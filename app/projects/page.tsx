"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, Github, Lock, Server, Globe, 
  Database, Shield, Smartphone
} from 'lucide-react';

type ProjectCategory = 'all' | 'web' | 'network' | 'mobile' | 'cloud';

const projects = [
  {
    id: 1,
    title: "E-commerce Security Audit",
    description: "Comprehensive security assessment of a major e-commerce platform, identifying and remediating critical vulnerabilities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    category: "web",
    tags: ["Web Security", "Payment Systems", "API Testing"],
    link: "#",
    github: null, // Private project
  },
  {
    id: 2,
    title: "Banking App Penetration Test",
    description: "In-depth security testing of a mobile banking application, focusing on authentication mechanisms and data protection.",
    image: "https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg",
    category: "mobile",
    tags: ["Mobile Security", "Authentication", "Data Encryption"],
    link: "#",
    github: null, // Private project
  },
  {
    id: 3,
    title: "Network Infrastructure Assessment",
    description: "Thorough evaluation of corporate network infrastructure, identifying potential attack vectors and recommending security enhancements.",
    image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg",
    category: "network",
    tags: ["Network Security", "Firewall Testing", "VPN Security"],
    link: "#",
    github: null, // Private project
  },
  {
    id: 4,
    title: "Cloud Security Framework",
    description: "Development and implementation of a comprehensive security framework for AWS cloud infrastructure.",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
    category: "cloud",
    tags: ["AWS", "Cloud Security", "IaC Security"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Vulnerability Scanner",
    description: "Open-source automated vulnerability scanner for web applications with customizable scanning profiles.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    category: "web",
    tags: ["OWASP", "Automation", "Python"],
    link: "#",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "IoT Security Testing Framework",
    description: "Framework for testing security of Internet of Things devices, including firmware analysis and communication protocols.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    category: "network",
    tags: ["IoT", "Firmware Analysis", "Protocol Testing"],
    link: "#",
    github: "https://github.com",
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Shield },
  { id: 'web', label: 'Web Security', icon: Globe },
  { id: 'network', label: 'Network Security', icon: Server },
  { id: 'mobile', label: 'Mobile Security', icon: Smartphone },
  { id: 'cloud', label: 'Cloud Security', icon: Database },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <section>
        <h2 className="text-sm font-mono text-primary mb-2 terminal-text">
          projects.json
        </h2>
        <h1 className="text-4xl font-heading font-bold mb-4">Security Projects</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">
          A collection of my most significant security projects and assessments. Due to the sensitive 
          nature of security work, some details have been anonymized to protect client confidentiality.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setSelectedCategory(category.id as ProjectCategory)}
            >
              <category.icon size={16} />
              {category.label}
            </Button>
          ))}
        </div>
      </section>
      
      {/* Projects Grid */}
      <section>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="project-card overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Private project badge */}
                {!project.github && (
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
                    <Lock size={12} className="text-primary" />
                    <span className="text-xs">Private Project</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-heading font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <Button asChild variant="default" className="btn-glow flex-1">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Details
                    </a>
                  </Button>
                  
                  {project.github && (
                    <Button asChild variant="outline" className="btn-glow">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}