'use client';

import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { AI_TOOLS } from '@/data/prompts';

interface Prompt {
  id: string;
  text: string;
  styleCategory: string;
  styleCategoryLabel: string;
  badgeClass: string;
  carModel: string;
  aiTool: string;
  tags: string[];
}

interface PromptCardProps {
  prompt: Prompt;
  isCopied: boolean;
  onCopy: (id: string, text: string) => void;
  onLaunch: (id: string, aiTool: string, promptText: string) => void;
  animationDelay: number;
}

export default function PromptCard({
  prompt,
  isCopied,
  onCopy,
  onLaunch,
  animationDelay,
}: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);

  const tool = AI_TOOLS.find((t) => t.id === prompt.aiTool);
  const isLong = prompt.text.length > 180;
  const displayText =
    isLong && !expanded ? prompt.text.slice(0, 180) + '…' : prompt.text;

  return (
    <div
      className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 card-glow prompt-card-enter hover:border-border/60"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Style Badge */}
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ${prompt.badgeClass}`}>
            {prompt.styleCategoryLabel}
          </span>
          {/* Car Model Tag */}
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50">
            {prompt.carModel}
          </span>
        </div>
        {/* AI Tool badge */}
        {tool && (
          <span className="flex-shrink-0 text-[10px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-md border border-border/40">
            {tool.name}
          </span>
        )}
      </div>

      {/* Prompt Text */}
      <div className="flex-1 px-4 pb-3">
        <div className="relative">
          <p className="font-mono text-[12.5px] leading-relaxed text-foreground/85 font-mono-prompt whitespace-pre-wrap break-words">
            {displayText}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 mt-1.5 text-[11px] font-medium text-primary hover:text-primary/80 transition-colors duration-150"
            >
              {expanded ? (
                <>
                  <ChevronUp size={12} /> Show less
                </>
              ) : (
                <>
                  <ChevronDown size={12} /> Show full prompt
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Tags */}
      {prompt.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 px-4 pb-3">
          {prompt.tags.map((tag) => (
            <span
              key={`tag-${prompt.id}-${tag}`}
              className="text-[10px] text-muted-foreground bg-secondary/50 px-1.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-border/60 mx-4" />

      {/* Actions */}
      <div className="flex items-center gap-2 px-4 py-3">
        {/* Copy Button */}
        <button
          onClick={() => onCopy(prompt.id, prompt.text)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 active:scale-95 ${
            isCopied
              ? 'bg-green-500/15 text-green-400 border border-green-500/30 copy-success-pulse' :'bg-secondary text-secondary-foreground border border-border hover:bg-secondary/70 hover:text-foreground'
          }`}
          aria-label="Copy prompt to clipboard"
        >
          {isCopied ? (
            <>
              <Check size={12} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>

        {/* Launch Button */}
        <button
          onClick={() => onLaunch(prompt.id, prompt.aiTool, prompt.text)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 active:scale-95 transition-all duration-150 border border-primary/20"
          aria-label={`Open in ${tool?.name || 'AI generator'}`}
        >
          <ExternalLink size={12} />
          {tool ? `Open in ${tool.name}` : 'Launch'}
        </button>
      </div>
    </div>
  );
}