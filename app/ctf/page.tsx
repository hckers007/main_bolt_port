"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Terminal, ShieldAlert, ArrowRight, 
  CheckCircle, XCircle, Lock
} from 'lucide-react';

export default function CTFChallenge() {
  const [level, setLevel] = useState(1);
  const [answer, setAnswer] = useState('');
  const [attempt, setAttempt] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hint, setHint] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  
  // Encrypted challenge data
  const challenges = [
    {
      level: 1,
      challenge: "Decode the following string: 72 65 64 5f 74 65 61 6d",
      hint: "Think about hexadecimal ASCII representation",
      answer: "red_team",
      success: "Access granted to level 1. Proceed to the next challenge."
    },
    {
      level: 2,
      challenge: "Find the hidden flag in the source code of this page.",
      hint: "Inspect the DOM or use dev tools to examine comments",
      answer: "hidden_in_plain_sight",
      success: "Access granted to level 2. One step closer to the final challenge."
    },
    {
      level: 3,
      challenge: "What common web vulnerability is represented by this code?\n`https://vulnerable-site.com/profile?redirect=https://malicious-site.com`",
      hint: "Think about redirects and what can happen if they're not validated",
      answer: "open redirect",
      success: "Final level complete! You've proven your skills."
    }
  ];
  
  // Add hidden comment for level 2
  useEffect(() => {
    if (level === 2) {
      const comment = document.createComment(" FLAG: hidden_in_plain_sight ");
      document.body.appendChild(comment);
    }
  }, [level]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const currentChallenge = challenges[level - 1];
    const isAnswerCorrect = attempt.trim().toLowerCase() === currentChallenge.answer;
    
    setAnswer(attempt);
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect && level < challenges.length) {
      // Set a countdown to advance to the next level
      setCountdown(3);
    }
  };
  
  // Handle countdown for level advancement
  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setLevel(level + 1);
      setAttempt('');
      setAnswer('');
      setIsCorrect(null);
      setHint(false);
      setCountdown(null);
    }
  }, [countdown, level]);

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-10">
        <h2 className="text-sm font-mono text-neon mb-2 terminal-text glitch-text">
          ctf_challenge.exe
        </h2>
        <h1 className="text-4xl font-heading font-bold mb-4">CTF Challenge</h1>
        <p className="text-muted-foreground max-w-2xl mb-6">
          Welcome to my capture the flag challenge. Test your skills by solving these security puzzles.
          Each level gets progressively more difficult. Are you up for the challenge?
        </p>
        
        <div className="flex items-center gap-3 mb-8">
          <ShieldAlert className="text-primary" size={20} />
          <p className="text-sm font-medium">Current Level: {level} of {challenges.length}</p>
        </div>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-secondary px-4 py-2 border-b border-border flex items-center">
              <Terminal className="text-primary mr-2" size={18} />
              <h2 className="font-heading text-sm">Challenge Terminal</h2>
            </div>
            
            <div className="p-6 font-mono">
              <motion.div
                key={level}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="text-lg font-bold mb-2 terminal-text">
                  Level {level} Challenge
                </h3>
                <div className="code-block">
                  <code>{challenges[level - 1].challenge}</code>
                </div>
              </motion.div>
              
              {hint && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-secondary p-4 rounded-md border border-neon/30 mb-6"
                >
                  <p className="text-sm text-neon">
                    <span className="font-bold">HINT:</span> {challenges[level - 1].hint}
                  </p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 terminal-text">Enter your answer:</label>
                  <Input 
                    value={attempt}
                    onChange={(e) => setAttempt(e.target.value)}
                    className="font-mono bg-secondary border-border focus:border-primary"
                    placeholder="flag{your_answer_here}"
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <Button 
                    type="submit" 
                    className="btn-glow"
                  >
                    Submit Answer
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setHint(!hint)}
                  >
                    {hint ? "Hide Hint" : "Show Hint"}
                  </Button>
                </div>
              </form>
              
              {isCorrect !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-6 p-4 rounded-md border ${
                    isCorrect 
                      ? "bg-neon/10 border-neon/30 text-neon" 
                      : "bg-destructive/10 border-destructive/30 text-destructive"
                  }`}
                >
                  {isCorrect ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      <p>{challenges[level - 1].success}</p>
                      {countdown !== null && (
                        <span className="ml-2 text-sm">
                          Next level in {countdown}...
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <XCircle size={18} />
                      <p>Incorrect answer. Try again.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-heading font-bold mb-4 flex items-center">
              <Lock className="mr-2 text-primary" size={20} />
              CTF Scoreboard
            </h3>
            
            <div className="space-y-4">
              {Array.from({ length: challenges.length }, (_, i) => i + 1).map(lvl => (
                <div 
                  key={lvl}
                  className={`flex items-center justify-between p-3 rounded-md ${
                    lvl < level 
                      ? "bg-neon/10 border border-neon/30" 
                      : lvl === level 
                        ? "bg-primary/10 border border-primary/30" 
                        : "bg-secondary border border-border"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {lvl < level ? (
                      <CheckCircle className="text-neon\" size={18} />
                    ) : lvl === level ? (
                      <span className="w-4 h-4 bg-primary rounded-full animate-pulse"></span>
                    ) : (
                      <Lock size={18} />
                    )}
                    <span>Level {lvl}</span>
                  </div>
                  
                  <div>
                    {lvl < level ? (
                      <span className="text-xs font-mono bg-background px-2 py-1 rounded">
                        {challenges[lvl - 1].answer}
                      </span>
                    ) : lvl === level ? (
                      <span className="text-xs font-mono">In progress</span>
                    ) : (
                      <span className="text-xs font-mono">Locked</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-medium mb-2">Rules:</h4>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>- Each level must be completed in sequence</li>
                <li>- Answers are case-sensitive</li>
                <li>- No brute force attempts</li>
                <li>- Use hints if you're stuck</li>
                <li>- Have fun and learn!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}