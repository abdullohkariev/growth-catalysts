import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, DollarSign, Heart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const whyUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most projects completed in 7-14 days. No endless delays.",
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Small business pricing without enterprise-level costs.",
  },
  {
    icon: Heart,
    title: "Simple & Stress-Free",
    description: "No tech jargon. We explain everything in plain language.",
  },
  {
    icon: Users,
    title: "Personal Support",
    description: "Local, dedicated support. We're your digital partner.",
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

const About = () => {
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
                About <span className="gradient-text">Shosh Digital</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
                We're a modern digital agency helping small businesses grow online. Simplicity, speed, and results.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll opacity-0 translate-y-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Shosh Digital was founded with a simple mission: to make digital solutions accessible, understandable, and effective for small businesses.
                  </p>
                  <p>
                    We noticed that many small business owners felt overwhelmed by technology. Website builders, marketing jargon, complicated tools — it was all too much. Meanwhile, they were losing customers to competitors with better online presence.
                  </p>
                  <p>
                    That's why we created Shosh Digital. We focus on what matters: getting you more customers with less work. No unnecessary complexity, no confusing tech speak — just clear solutions that grow your business.
                  </p>
                  <p>
                    We become your digital partner — from initial ideas to full execution. Whether you need a simple website, an automated chatbot, or a complete digital transformation, we're here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                To empower small businesses with digital tools that{" "}
                <span className="gradient-text font-semibold">bring more customers</span> and{" "}
                <span className="gradient-text font-semibold">reduce manual work</span> — making technology feel simple, not scary.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Why Work With Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're not just another agency. Here's what makes us different.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item, index) => (
                <Card
                  key={item.title}
                  className="animate-on-scroll opacity-0 translate-y-8 border-border/50 bg-card/50 backdrop-blur-sm text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center animate-on-scroll opacity-0 translate-y-8">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Simplicity",
                    description: "We make complex things simple. Every solution should be easy to understand and use.",
                  },
                  {
                    title: "Results",
                    description: "We focus on what matters: growing your business. Every project has measurable goals.",
                  },
                  {
                    title: "Partnership",
                    description: "We're not just vendors — we're your digital partners invested in your success.",
                  },
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="animate-on-scroll opacity-0 translate-y-8 text-center"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h3 className="font-heading font-semibold text-xl mb-2 gradient-text">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
                Let's Grow Together
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to take your business online? We'd love to hear about your goals and how we can help.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-bg gradient-bg-hover text-primary-foreground font-semibold h-12 px-8">
                  Get in Touch
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

export default About;
