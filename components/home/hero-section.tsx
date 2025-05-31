"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [text, setText] = useState('');
  const phrases = [
    'Securing digital assets.',
    'Finding vulnerabilities.',
    'Ethical hacking expert.',
    'Security researcher.',
    'Penetration tester.'
  ];
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingSpeed = useRef(100);
  const pauseDuration = 1500; // ms to pause after completing a phrase

  useEffect(() => {
    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex.current];
      
      if (isDeleting.current) {
        charIndex.current--;
        typingSpeed.current = 50; // Faster when deleting
      } else {
        charIndex.current++;
        typingSpeed.current = 100; // Normal typing speed
      }
      
      setText(currentPhrase.substring(0, charIndex.current));
      
      // Handle end of phrase or deletion
      if (!isDeleting.current && charIndex.current === currentPhrase.length) {
        // Pause at the end of typing before deleting
        isDeleting.current = true;
        typingSpeed.current = pauseDuration;
      } else if (isDeleting.current && charIndex.current === 0) {
        // Move to next phrase
        isDeleting.current = false;
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
      }
    };
    
    const timer = setTimeout(typeEffect, typingSpeed.current);
    return () => clearTimeout(timer);
  }, [text, phrases]);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center lg:justify-start py-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm sm:text-base md:text-lg font-mono text-primary mb-2 terminal-text">
            penetration_tester.exe
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 leading-tight">
            Ram<span className="text-primary">.</span>
          </h1>
          
          <div className="h-8 md:h-10 mb-6">
            <h2 className="text-xl md:text-2xl font-heading mb-6">
              {text}
              <span className="typing-cursor"></span>
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-lg">
            I help organizations identify and mitigate security vulnerabilities through 
            ethical hacking and penetration testing. With a focus on responsible disclosure, 
            I secure digital assets against potential threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="btn-glow group" size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="btn-glow">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}