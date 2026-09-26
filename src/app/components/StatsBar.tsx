import React from 'react';
import { Layers, Palette, Car } from 'lucide-react';
import { STYLE_CATEGORIES, CAR_MODELS } from '@/data/prompts';
import Icon from '@/components/ui/AppIcon';


interface StatsBarProps {
  totalPrompts: number;
  filteredCount: number;
}

export default function StatsBar({ totalPrompts, filteredCount }: StatsBarProps) {
  const stats = [
    {
      id: 'stat-total',
      icon: Layers,
      value: totalPrompts,
      label: 'Total Prompts',
    },
    {
      id: 'stat-styles',
      icon: Palette,
      value: STYLE_CATEGORIES.length,
      label: 'Style Categories',
    },
    {
      id: 'stat-models',
      icon: Car,
      value: CAR_MODELS.length,
      label: 'Car Models',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon size={15} className="text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground tabular-nums leading-none">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}