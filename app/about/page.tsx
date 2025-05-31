import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Download, ArrowRight, Award, BookOpen, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <section>
        <h2 className="text-sm font-mono text-primary mb-2 terminal-text">
          about.md
        </h2>
        <h1 className="text-4xl font-heading font-bold mb-4">About Me</h1>
        <p className="text-muted-foreground max-w-2xl mb-6">
          I'm Ram, a professional penetration tester and security researcher with extensive 
          experience in identifying and mitigating security vulnerabilities in various systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="btn-glow group">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
          
          <Button variant="outline" className="btn-glow">
            <Download className="mr-2" size={18} />
            Download Resume
          </Button>
        </div>
      </section>
      
      {/* Professional Background */}
      <section className="space-y-6">
        <div className="mb-6">
          <h3 className="text-xl font-heading font-bold mb-2 flex items-center">
            <Briefcase className="mr-2 text-primary" size={20} />
            Professional Experience
          </h3>
          <p className="text-muted-foreground">
            Over 5 years of experience in the cybersecurity industry, working with organizations 
            of all sizes to secure their digital infrastructure.
          </p>
        </div>
        
        <div className="space-y-8">
          {[
            {
              position: "Lead Security Consultant",
              company: "SecureNet Solutions",
              period: "2022 - Present",
              description: "Leading penetration testing teams and coordinating security assessments for enterprise clients. Developed custom testing methodologies and reporting frameworks."
            },
            {
              position: "Senior Penetration Tester",
              company: "CyberGuard Inc.",
              period: "2019 - 2022",
              description: "Conducted comprehensive security assessments, including network penetration testing, web application security testing, and social engineering campaigns."
            },
            {
              position: "Security Analyst",
              company: "DefendTech Security",
              period: "2017 - 2019",
              description: "Performed vulnerability assessments, security audits, and implemented security controls for clients across various industries."
            }
          ].map((job, index) => (
            <div key={index} className="relative pl-6 border-l border-border">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
              <h4 className="text-lg font-heading font-medium">
                {job.position} <span className="text-primary">@</span> {job.company}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
              <p className="text-sm text-muted-foreground">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Education & Certifications */}
      <section className="space-y-6">
        <div className="mb-6">
          <h3 className="text-xl font-heading font-bold mb-2 flex items-center">
            <BookOpen className="mr-2 text-primary" size={20} />
            Education & Certifications
          </h3>
          <p className="text-muted-foreground">
            Committed to continuous learning and professional development in the rapidly evolving field of cybersecurity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-heading font-medium mb-2">Education</h4>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">MSc in Cybersecurity</p>
                <p className="text-sm text-muted-foreground">University of Technology, 2017</p>
              </li>
              <li>
                <p className="font-medium">BSc in Computer Science</p>
                <p className="text-sm text-muted-foreground">State University, 2015</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-heading font-medium mb-2">Certifications</h4>
            <ul className="space-y-2">
              {[
                "Certified Ethical Hacker (CEH)",
                "Offensive Security Certified Professional (OSCP)",
                "Certified Information Systems Security Professional (CISSP)",
                "GIAC Penetration Tester (GPEN)",
                "Certified Web Application Penetration Tester"
              ].map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Award className="text-primary flex-shrink-0" size={16} />
                  <span className="text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Skills */}
      <section>
        <h3 className="text-xl font-heading font-bold mb-4">Technical Skills</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Penetration Testing</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Network Security", "Web Application Testing", "Mobile App Security",
                "API Security Testing", "Cloud Security", "IoT Security"
              ].map((skill, index) => (
                <Badge key={index} variant="outline" className="skill-tag">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Metasploit", "Burp Suite", "Wireshark", "Nmap",
                "OWASP ZAP", "Kali Linux", "Nessus", "Hashcat",
                "Hydra", "SQLmap"
              ].map((skill, index) => (
                <Badge key={index} variant="outline" className="skill-tag">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3">Programming & Scripting</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "Bash", "PowerShell", "JavaScript",
                "SQL", "Ruby", "C/C++", "Go"
              ].map((skill, index) => (
                <Badge key={index} variant="outline" className="skill-tag">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section>
        <h3 className="text-xl font-heading font-bold mb-4">When I'm Not Hacking</h3>
        <p className="text-muted-foreground mb-6">
          Outside of cybersecurity, I enjoy participating in CTF competitions, contributing to open-source 
          security tools, and mentoring aspiring security professionals. I'm also an avid rock climber 
          and enjoy landscape photography.
        </p>
        
        <div className="rounded-lg overflow-hidden border border-border">
          <div className="grid grid-cols-3 gap-1">
            {[
              "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
              "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
              "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
            ].map((image, index) => (
              <div key={index} className="aspect-square relative">
                <img 
                  src={image}
                  alt="Hobby photograph"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}