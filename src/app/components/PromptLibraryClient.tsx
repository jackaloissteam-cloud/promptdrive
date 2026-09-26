'use client';

import React, { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { Search, X, Car, Zap, Copy, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';
import { ALL_PROMPTS, STYLE_CATEGORIES, CAR_MODELS, AI_TOOLS } from '@/data/prompts';
import PromptCard from './PromptCard';
import StatsBar from './StatsBar';
import CategoryFilterTabs from './CategoryFilterTabs';

export default function PromptLibraryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeCarModel, setActiveCarModel] = useState<string>('all');
  const [activeAITool, setActiveAITool] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = useMemo(() => {
    return ALL_PROMPTS.filter((prompt) => {
      const matchesCategory =
        activeCategory === 'all' || prompt.styleCategory === activeCategory;
      const matchesCarModel =
        activeCarModel === 'all' || prompt.carModel === activeCarModel;
      const matchesAITool =
        activeAITool === 'all' || prompt.aiTool === activeAITool;
      const matchesSearch =
        searchQuery.trim() === '' ||
        prompt.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.carModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.styleCategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesCarModel && matchesAITool && matchesSearch;
    });
  }, [searchQuery, activeCategory, activeCarModel, activeAITool]);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success('Prompt copied to clipboard!', {
        description: 'Paste it directly into your AI image generator.',
        duration: 2500,
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error('Copy failed', {
        description: 'Please select and copy the prompt text manually.',
      });
    }
  };

  const handleLaunch = (id: string, aiTool: string, promptText: string) => {
    const tool = AI_TOOLS.find((t) => t.id === aiTool);
    if (!tool) return;

    const encodedPrompt = encodeURIComponent(promptText);
    let launchUrl = tool.launchUrl;
    if (tool.supportsQueryParam) {
      launchUrl = `${tool.launchUrl}?prompt=${encodedPrompt}`;
    }

    window.open(launchUrl, '_blank', 'noopener,noreferrer');
    toast.success(`Opening ${tool.name}`, {
      description: "Paste your prompt if it wasn't pre-filled.",
      duration: 2500,
    });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveCarModel('all');
    setActiveAITool('all');
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    activeCategory !== 'all' ||
    activeCarModel !== 'all' ||
    activeAITool !== 'all';

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">
          Prompt Library
        </h1>
        <p className="text-sm text-muted-foreground">
          {ALL_PROMPTS.length} curated AI image prompts — cars in every style imaginable.
        </p>
      </div>

      {/* Stats Bar */}
      <StatsBar totalPrompts={ALL_PROMPTS.length} filteredCount={filteredPrompts.length} />

      {/* Search + Filter Controls */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-lg">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search prompts, car models, styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-150"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Advanced Filters Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-150 ${
              showFilters || activeCarModel !== 'all' || activeAITool !== 'all' ?'bg-primary/10 border-primary/30 text-primary' :'bg-card border-border text-muted-foreground hover:text-foreground hover:border-border/80'
            }`}
            aria-expanded={showFilters}
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
            {showFilters ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {(activeCarModel !== 'all' || activeAITool !== 'all') && (
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                {(activeCarModel !== 'all' ? 1 : 0) + (activeAITool !== 'all' ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Clear All */}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              <X size={13} />
              Clear all
            </button>
          )}
        </div>

        {/* Advanced Filter Panel */}
        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-card border border-border rounded-xl">
            {/* Car Model Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <Car size={12} />
                Car Model
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveCarModel('all')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
                    activeCarModel === 'all' ?'bg-primary text-primary-foreground' :'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  All Models
                </button>
                {CAR_MODELS.map((model) => (
                  <button
                    key={`carmodel-${model}`}
                    onClick={() => setActiveCarModel(model)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
                      activeCarModel === model
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Tool Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <Zap size={12} />
                AI Generator
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveAITool('all')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
                    activeAITool === 'all' ?'bg-primary text-primary-foreground' :'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  All Tools
                </button>
                {AI_TOOLS.map((tool) => (
                  <button
                    key={`aitool-${tool.id}`}
                    onClick={() => setActiveAITool(tool.id)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
                      activeAITool === tool.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter Tabs */}
      <CategoryFilterTabs
        categories={STYLE_CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        promptCounts={ALL_PROMPTS.reduce<Record<string, number>>((acc, p) => {
          acc[p.styleCategory] = (acc[p.styleCategory] || 0) + 1;
          return acc;
        }, {})}
      />

      {/* Results count */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Showing{' '}
            <span className="text-foreground font-medium">{filteredPrompts.length}</span>{' '}
            of {ALL_PROMPTS.length} prompts
          </span>
          {filteredPrompts.length === 0 && (
            <span className="text-xs text-muted-foreground">
              — try adjusting your filters
            </span>
          )}
        </div>
      )}

      {/* Prompt Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {filteredPrompts.map((prompt, index) => (
            <PromptCard
              key={`prompt-${prompt.id}`}
              prompt={prompt}
              isCopied={copiedId === prompt.id}
              onCopy={handleCopy}
              onLaunch={handleLaunch}
              animationDelay={index * 30}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
            <Car size={28} className="text-muted-foreground" />
          </div>
          <div className="text-center space-y-1">
            <h3 className="text-base font-semibold text-foreground">No prompts found</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              No car prompts match your current filters. Try a different style, car model, or clear your search.
            </p>
          </div>
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 active:scale-95 transition-all duration-150"
          >
            <X size={14} />
            Clear all filters
          </button>
        </div>
      )}

      {/* Footer spacer */}
      <div className="h-8" />
    </div>
  );
}