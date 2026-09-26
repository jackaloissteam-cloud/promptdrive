import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Sparkles } from 'lucide-react';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <AppLogo size={36} />
            <span className="font-semibold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-150">
              PromptDrive
            </span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles size={13} className="text-primary" />
              <span className="text-xs font-medium text-primary">Personal Library</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}