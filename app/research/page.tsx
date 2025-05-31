import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Download, FileDown, 
  ExternalLink, Lock, Shield
} from 'lucide-react';
import Link from 'next/link';

const researchPapers = [
  {
    id: 1,
    title: "Analysis of Zero-Day Vulnerabilities in IoT Devices",
    abstract: "This paper explores the discovery and exploitation of previously unknown vulnerabilities in consumer IoT devices, with recommendations for manufacturers.",
    date: "2023",
    tags: ["IoT Security", "Zero-Day", "Vulnerability Analysis"],
    status: "Published",
    downloadable: true
  },
  {
    id: 2,
    title: "Evaluating Machine Learning-Based Intrusion Detection Systems",
    abstract: "A comparative study of various machine learning algorithms for network intrusion detection and their effectiveness against modern attack vectors.",
    date: "2022",
    tags: ["Machine Learning", "IDS", "Network Security"],
    status: "Published",
    downloadable: true
  },
  {
    id: 3,
    title: "Cryptographic Weaknesses in Blockchain Implementations",
    abstract: "Investigation of potential vulnerabilities in cryptographic implementations across various blockchain platforms and smart contract systems.",
    date: "2022",
    tags: ["Cryptography", "Blockchain", "Smart Contracts"],
    status: "Published",
    downloadable: true
  },
  {
    id: 4,
    title: "Advanced Persistent Threats: Detection and Mitigation",
    abstract: "Analysis of APT campaigns targeting critical infrastructure, examining tactics, techniques, and procedures with proposed defensive strategies.",
    date: "2021",
    tags: ["APT", "Threat Intelligence", "Critical Infrastructure"],
    status: "Published",
    downloadable: true
  },
  {
    id: 5,
    title: "Security Implications of Quantum Computing on Existing Encryption Standards",
    abstract: "Examination of how quantum computing advancements will impact current encryption methods and recommendations for quantum-resistant algorithms.",
    date: "2023",
    tags: ["Quantum Computing", "Cryptography", "Post-Quantum"],
    status: "In Review",
    downloadable: false
  }
];

const presentations = [
  {
    id: 1,
    title: "Breaking Authentication: Common Flaws and Solutions",
    event: "SecureCon 2023",
    date: "October 2023",
    slides: true
  },
  {
    id: 2,
    title: "Red Team Operations: Methodology and Best Practices",
    event: "CyberSummit",
    date: "July 2023",
    slides: true
  },
  {
    id: 3,
    title: "Securing the Software Supply Chain",
    event: "DevSecOps Days",
    date: "May 2022",
    slides: true
  }
];

export default function Research() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Header */}
      <section>
        <h2 className="text-sm font-mono text-primary mb-2 terminal-text">
          research.data
        </h2>
        <h1 className="text-4xl font-heading font-bold mb-4">Security Research</h1>
        <p className="text-muted-foreground max-w-2xl mb-6">
          My contributions to the field of cybersecurity through academic research, 
          vulnerability disclosures, and conference presentations.
        </p>
      </section>
      
      {/* Research Papers */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
          <FileDown className="mr-2 text-primary" size={24} />
          Research Publications
        </h2>
        
        <div className="space-y-6">
          {researchPapers.map(paper => (
            <div 
              key={paper.id} 
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2">{paper.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {paper.date}
                    </Badge>
                    <Badge variant="outline" className={`
                      ${paper.status === "Published" 
                        ? "bg-neon/10 text-neon border-neon/20" 
                        : "bg-accent/10 text-accent border-accent/20"}
                    `}>
                      {paper.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{paper.abstract}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {paper.downloadable ? (
                  <Button className="btn-glow">
                    <Download className="mr-2" size={16} />
                    PDF
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="opacity-50">
                    <Lock className="mr-2" size={16} />
                    Pending
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Conference Presentations */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-6">Conference Presentations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentations.map(presentation => (
            <div 
              key={presentation.id} 
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-lg font-heading font-bold mb-2">{presentation.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{presentation.event}</Badge>
                <span className="text-sm text-muted-foreground">{presentation.date}</span>
              </div>
              
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2" size={16} />
                View Slides
              </Button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Responsible Disclosures */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
          <Shield className="mr-2 text-primary" size={24} />
          Responsible Disclosures
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground mb-6">
            I believe in responsible disclosure of security vulnerabilities. Below is a list of 
            publicly acknowledged security findings that I've reported to various organizations.
            Many other disclosures remain confidential due to NDA restrictions.
          </p>
          
          <div className="space-y-4">
            {[
              {
                company: "Major E-commerce Platform",
                date: "2023",
                description: "Identified and responsibly disclosed a critical API vulnerability that could have exposed customer payment information.",
                cve: "CVE-2023-XXXXX"
              },
              {
                company: "Financial Services Provider",
                date: "2022",
                description: "Discovered authentication bypass vulnerability in mobile application backend.",
                cve: "CVE-2022-XXXXX"
              },
              {
                company: "Cloud Service Provider",
                date: "2021",
                description: "Identified privilege escalation vulnerability in container orchestration service.",
                cve: "CVE-2021-XXXXX"
              }
            ].map((disclosure, index) => (
              <div key={index} className="relative pl-6 border-l border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-medium">{disclosure.company}</h3>
                  <Badge variant="outline" className="sm:self-start">{disclosure.date}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{disclosure.description}</p>
                <p className="text-sm text-primary mt-1 font-mono">{disclosure.cve}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/contact">
              <Button className="btn-glow">
                Inquire About Security Research Collaboration
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}