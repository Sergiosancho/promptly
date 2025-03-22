"use client";

import { ReactNode } from "react";

interface BoxRevealProps {
  children: ReactNode;
  delay?: number;
}

export const BoxReveal = ({ children, delay = 0 }: BoxRevealProps) => {
  return (
    <div
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        animation: `reveal 0.5s ease-out ${delay}s forwards`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
