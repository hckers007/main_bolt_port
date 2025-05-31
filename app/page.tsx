import HeroSection from '@/components/home/hero-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Shield, Bug, Lock, FileWarning, 
  UserCheck, ArrowRight 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20 lg:space-y-32 pb-20">
      <HeroSection />
      
      {/* Services Section */}
      <section className="relative">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-sm font-mono text-primary mb-2 terminal-text">
              services.config
            </h2>
            <h3 className="text-3xl font-heading font-bold mb-4">
              Expert Security Services
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Professional penetration testing and security assessment services to protect 
              your organization from evolving cyber threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Penetration Testing",
                description: "Thorough assessment of your systems to identify vulnerabilities before malicious actors can exploit them."
              },
              {
                icon: Bug,
                title: "Vulnerability Analysis",
                description: "In-depth examination of security weaknesses in your infrastructure and applications."
              },
              {
                icon: Lock,
                title: "Security Hardening",
                description: "Strengthening your defenses with industry best practices and custom security solutions."
              },
              {
                icon: FileWarning,
                title: "Security Audits",
                description: "Comprehensive review of your security policies, procedures, and implementations."
              },
              {
                icon: UserCheck,
                title: "Security Training",
                description: "Educating your team on security awareness and best practices to prevent social engineering attacks."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-md hover:shadow-primary/5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-secondary mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-heading font-medium mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
            
            <div className="bg-primary/10 p-6 rounded-lg border border-primary transition-all duration-300">
              <h4 className="text-lg font-heading font-medium mb-2">Need a Custom Service?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Contact me for specialized security services tailored to your organization's needs.
              </p>
              <Button asChild variant="outline" className="group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Stats */}
      <section className="relative py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Security Audits" },
              { value: "50+", label: "Vulnerabilities Found" },
              { value: "25+", label: "Clients Protected" },
              { value: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 md:p-10 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to secure your digital assets?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Don't wait for a breach to highlight your vulnerabilities. 
                Proactive security measures save time, money, and reputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-glow group" size="lg">
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View Past Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}