import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, FileText, Paintbrush, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start by learning about your business, goals, and target customers. What problems are you solving? Who are you trying to reach?",
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning",
    description:
      "We create a digital strategy and roadmap tailored to your needs. Clear milestones, realistic timelines, and no surprises.",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Design & Development",
    description:
      "Our team builds your website, app, or automation system. You'll see progress along the way and have opportunities for feedback.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy your project and make sure everything works perfectly. Testing, optimization, and a smooth go-live experience.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Growth",
    description:
      "We don't just launch and leave. Continuous support, optimization, and marketing help your business grow over time.",
  },
];

function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

const HowItWorks = () => {
  const containerRef = useIntersectionObserver();

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
                How It <span className="gradient-text">Works</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Our simple 5-step process takes you from idea to launch and beyond. Clear, transparent, and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

                <div className="space-y-12 md:space-y-16">
                  {steps.map((step, index) => (
                    <div
                      key={step.number}
                      className="animate-on-scroll opacity-0 translate-y-8 relative flex gap-6 md:gap-10"
                    >
                      {/* Step indicator */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
                          <step.icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary">{step.number}</span>
                          <h3 className="font-heading text-xl md:text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Typical Project Timeline
                </h2>
                <p className="text-muted-foreground">
                  Most projects are completed within 7–14 days, depending on complexity.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll opacity-0 translate-y-8">
                {[
                  { label: "Discovery", time: "1-2 days" },
                  { label: "Design", time: "3-5 days" },
                  { label: "Development", time: "5-10 days" },
                  { label: "Launch", time: "1-2 days" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center p-6 rounded-2xl bg-card border border-border/50"
                  >
                    <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{item.time}</p>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's begin with a free discovery call. We'll learn about your business and create a plan together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-bg gradient-bg-hover text-primary-foreground font-semibold h-12 px-8">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowItWorks;
