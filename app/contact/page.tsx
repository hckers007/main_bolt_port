"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, MessageSquare, Clock, Send,
  MapPin, Github, Linkedin, Twitter
} from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <section>
        <h2 className="text-sm font-mono text-primary mb-2 terminal-text">
          contact.sh
        </h2>
        <h1 className="text-4xl font-heading font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-2xl mb-6">
          Have a security concern or interested in working together? 
          I'm available for security consulting, penetration testing, and speaking engagements.
        </p>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl font-heading font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:contact@ram-security.com" className="text-foreground hover:text-primary transition-colors">
                    contact@ram-security.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">San Francisco, CA, USA</p>
                  <p className="text-muted-foreground text-sm">Available for remote work worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-foreground">Usually within 24-48 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-lg font-heading font-medium mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", url: "https://github.com" },
                  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
                  { icon: Twitter, label: "Twitter", url: "https://twitter.com" }
                ].map((platform, index) => (
                  <Button 
                    key={index}
                    variant="outline"
                    size="icon"
                    className="btn-glow"
                    asChild
                  >
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={platform.label}
                    >
                      <platform.icon size={18} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-lg font-heading font-medium mb-2">Security Disclosures</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For responsible disclosure of security vulnerabilities, please use 
                  my PGP key to encrypt sensitive communications.
                </p>
                <Button variant="outline" size="sm" className="btn-glow">
                  Download PGP Key
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl font-heading font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="min-h-32 bg-secondary border-border focus:border-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-glow"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : isSubmitted ? (
                  <>Message Sent Successfully!</>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </Button>
              
              {isSubmitted && (
                <motion.p 
                  className="text-center text-neon text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}