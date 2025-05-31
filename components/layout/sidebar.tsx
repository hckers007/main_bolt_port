"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Home, User, FolderKanban, FileText, 
  FlaskConical, Mail, Shield, Github, Linkedin, 
  Twitter, ExternalLink, Terminal
} from 'lucide-react';

interface SidebarProps {
  isMatrixEnabled: boolean;
  setIsMatrixEnabled: (value: boolean) => void;
  pathname: string;
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Research', href: '/research', icon: FlaskConical },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const social = [
  { name: 'GitHub', href: 'https://github.com', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export default function Sidebar({ isMatrixEnabled, setIsMatrixEnabled, pathname }: SidebarProps) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r border-border bg-card z-10">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary animate-pulse-glow">
            <Terminal className="absolute inset-0 m-auto text-primary" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-heading font-bold tracking-tighter">
              <span className="text-primary">R</span>am
            </h1>
            <p className="text-xs text-muted-foreground">Ethical Hacker</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.span
                    className="absolute right-3 w-1.5 h-1.5 rounded-full bg-primary"
                    layoutId="navIndicator"
                  />
                )}
              </Link>
            );
          })}
          
          <Link href="/ctf" className="nav-link group relative overflow-hidden mt-4">
            <Shield size={18} className="text-neon group-hover:animate-pulse" />
            <span className="glow-neon-text group-hover:animate-pulse">CTF Challenge</span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neon opacity-70">01</span>
          </Link>
        </nav>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-muted-foreground">Matrix Effect</span>
            <Switch 
              checked={isMatrixEnabled} 
              onCheckedChange={setIsMatrixEnabled}
              className="data-[state=checked]:bg-neon"
            />
          </div>

          <div className="flex gap-2 mt-4">
            {social.map((item) => (
              <Button
                key={item.name}
                variant="outline"
                size="icon"
                className="btn-glow"
                asChild
              >
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon size={16} />
                  <span className="sr-only">{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ram
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}