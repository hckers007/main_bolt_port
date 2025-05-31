"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';
import MobileNav from './mobile-nav';
import MatrixBackground from '../ui/matrix-background';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [isMatrixEnabled, setIsMatrixEnabled] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {isMatrixEnabled && <MatrixBackground />}
      
      <Sidebar 
        isMatrixEnabled={isMatrixEnabled}
        setIsMatrixEnabled={setIsMatrixEnabled}
        pathname={pathname}
      />
      
      <MobileNav 
        isMatrixEnabled={isMatrixEnabled}
        setIsMatrixEnabled={setIsMatrixEnabled}
        pathname={pathname}
      />
      
      <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8 lg:pt-8 lg:pb-16 overflow-auto">
        {children}
      </main>
    </div>
  );
}