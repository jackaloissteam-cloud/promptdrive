'use client';

import React, { useRef } from 'react';

interface StyleCategory {
  id: string;
  label: string;
  badgeClass: string;
}

interface CategoryFilterTabsProps {
  categories: StyleCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  promptCounts: Record<string, number>;
}

export default function CategoryFilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
  promptCounts,
}: CategoryFilterTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalCount = Object.values(promptCounts).reduce((a, b) => a + b, 0);

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-1"
      role="tablist"
      aria-label="Style categories"
    >
      {/* All tab */}
      <button
        role="tab"
        aria-selected={activeCategory === 'all'}
        onClick={() => onCategoryChange('all')}
        className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
          activeCategory === 'all' ?'bg-primary text-primary-foreground shadow-sm' :'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/60'
        }`}
      >
        All
        <span
          className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full ${
            activeCategory === 'all' ?'bg-white/20 text-white' :'bg-secondary text-secondary-foreground'
          }`}
        >
          {totalCount}
        </span>
      </button>

      {categories.map((cat) => (
        <button
          key={`tab-${cat.id}`}
          role="tab"
          aria-selected={activeCategory === cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
            activeCategory === cat.id
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border/60'
          }`}
        >
          {cat.label}
          <span
            className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-full ${
              activeCategory === cat.id
                ? 'bg-white/20 text-white' :'bg-secondary text-secondary-foreground'
            }`}
          >
            {promptCounts[cat.id] || 0}
          </span>
        </button>
      ))}
    </div>
  );
}