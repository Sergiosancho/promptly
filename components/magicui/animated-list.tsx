'use client';

import { animate, stagger } from '@motionone/dom';
import React from 'react';

interface AnimatedListProps {
  items: React.ReactNode[];
  className?: string;
}

export const AnimatedList = ({ items, className = '' }: AnimatedListProps) => {
  React.useEffect(() => {
    const elements = document.querySelectorAll('.animated-list-item');
    animate(
      elements,
      { opacity: [0, 1], y: [50, 0] },
      { 
        delay: stagger(0.3),
        duration: 0.8,
        easing: 'ease-out'
      }
    );
  }, []);

  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="animated-list-item p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 shadow-xl opacity-0"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
