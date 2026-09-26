import React from 'react';
import AppHeader from '@/components/AppHeader';
import PromptLibraryClient from '@/app/components/PromptLibraryClient';
import { Toaster } from 'sonner';

export default function PromptLibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-10 2xl:px-16 py-8">
        <PromptLibraryClient />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--card)',
            color: 'var(--card-foreground)',
            border: '1px solid var(--border)',
            fontFamily: 'var(--font-sans)',
          },
        }}
      />
    </div>
  );
}