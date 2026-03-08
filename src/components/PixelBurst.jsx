// PixelBurst.jsx
import React from 'react';

// Simple animated pixel burst effect for celebration
export default function PixelBurst({ show = false, onEnd }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      <div className="relative w-[400px] h-[400px]">
        {[...Array(24)].map((_, i) => {
          const angle = (i / 24) * 2 * Math.PI;
          const x = Math.cos(angle) * 140 + 180;
          const y = Math.sin(angle) * 140 + 180;
          const color = [
            'bg-yellow-400',
            'bg-rose-500',
            'bg-blue-400',
            'bg-green-400',
            'bg-pink-400',
            'bg-amber-400',
            'bg-purple-400',
          ][i % 7];
          return (
            <div
              key={i}
              className={`absolute w-6 h-6 ${color} rounded-[3px] shadow-lg animate-pixelburst`}
              style={{
                left: 180,
                top: 180,
                animationDelay: `${i * 0.03}s`,
                '--pixelburst-x': `${x - 180}px`,
                '--pixelburst-y': `${y - 180}px`,
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes pixelburst {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          60% { transform: translate(var(--pixelburst-x), var(--pixelburst-y)) scale(1.2); opacity: 1; }
          100% { transform: translate(var(--pixelburst-x), var(--pixelburst-y)) scale(0.7); opacity: 0; }
        }
        .animate-pixelburst {
          animation: pixelburst 0.9s cubic-bezier(.7,-0.2,.7,1.2) both;
        }
      `}</style>
    </div>
  );
}
