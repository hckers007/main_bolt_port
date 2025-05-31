"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Menu, X, Home, User, FolderKanban, FileText, 
  FlaskConical, Mail, Shield, Github, Linkedin, 
  Twitter, Terminal
} from 'lucide-react';

interface MobileNavProps {
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

export default function MobileNav({ isMatrixEnabled, setIsMatrixEnabled, pathname }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Close menu when a link is clicked
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-20 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary animate-pulse-glow">
            <Terminal className="absolute inset-0 m-auto text-primary" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-heading font-bold tracking-tighter">
              <span className="text-primary">R</span>am
            </h1>
            <p className="text-xs text-muted-foreground">Ethical Hacker</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 bg-background/80 backdrop-blur-sm"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-64 bg-card border-l border-border p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-10">
                <nav className="flex-1 space-y-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-2 py-2 text-base ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                        onClick={handleNavigation}
                      >
                        <item.icon size={18} />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                  
                  <Link 
                    href="/ctf" 
                    className="flex items-center gap-2 py-2 text-base text-neon mt-4"
                    onClick={handleNavigation}
                  >
                    <Shield size={18} className="animate-pulse" />
                    <span>CTF Challenge</span>
                  </Link>
                </nav>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Matrix Effect</span>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Content padding for mobile */}
      <div className="pt-16"></div>
    </div>
  );
}