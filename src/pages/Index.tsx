import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Globe, Palette, Bot, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const whyChooseUs = [
  {
    icon: Globe,
    title: "Simple & Fast Websites",
    description: "Clean, mobile-friendly websites that load fast and convert visitors into customers.",
  },
  {
    icon: Bot,
    title: "Automation & 24/7 Support",
    description: "Chatbots and workflows that handle customer queries even while you sleep.",
  },
  {
    icon: Zap,
    title: "Affordable & Focused",
    description: "Solutions designed specifically for small businesses, without enterprise pricing.",
  },
  {
    icon: Palette,
    title: "Clear Branding & Marketing",
    description: "Stand out with professional branding and marketing strategies that work.",
  },
];

const servicesPreview = [
  {
    icon: Globe,
    title: "Website & App Development",
    description: "Responsive websites and mobile apps that drive results.",
  },
  {
    icon: Zap,
    title: "Digital Marketing",
    description: "SEO, social media, and ads that bring real customers.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Logos and visual identity that make you memorable.",
  },
  {
    icon: Bot,
    title: "Automation & Chatbots",
    description: "Smart automation that saves time and never sleeps.",
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

const Index = () => {
  const containerRef = useIntersectionObserver();

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
                More Customers, Less Work —{" "}
                <span className="gradient-text">Simple Websites & Smart Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
                We help small businesses grow online with professional websites, mobile apps, chatbots, branding, and marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg gradient-bg-hover text-primary-foreground font-semibold h-12 px-8">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-semibold h-12 px-8">
                    See Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-8">
                Why Choose <span className="gradient-text">Shosh Digital</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8">
                We make digital simple. No tech jargon, just results that grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={item.title}
                  className="animate-on-scroll opacity-0 translate-y-8 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-8">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8">
                Everything you need to grow your business online, all in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servicesPreview.map((service, index) => (
                <Link
                  key={service.title}
                  to="/services"
                  className="group animate-on-scroll opacity-0 translate-y-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-1 flex items-center gap-2">
                          {service.title}
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10 animate-on-scroll opacity-0 translate-y-8">
              <Link to="/services">
                <Button variant="outline" size="lg" className="font-semibold">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 translate-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help you get more customers with less work. Free consultation, no strings attached.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-bg gradient-bg-hover text-primary-foreground font-semibold h-12 px-8">
                  Start Your Project
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

export default Index;
