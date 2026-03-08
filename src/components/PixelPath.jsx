// PixelPath.jsx
import React from 'react';
import mascot from '../assets/logo.png';

// Example data for path nodes
const pathNodes = [
  { label: 'Start', status: 'active' },
  { label: 'Lesson 1', status: 'complete' },
  { label: 'Lesson 2', status: 'unlocked' },
  { label: 'Quiz', status: 'locked' },
  { label: 'Boss', status: 'locked' },
];

const statusColor = {
  active: 'bg-yellow-400 border-yellow-600',
  complete: 'bg-green-400 border-green-600',
  unlocked: 'bg-blue-300 border-blue-600',
  locked: 'bg-gray-200 border-gray-400',
};

const statusShadow = {
  active: 'shadow-[0_0_8px_2px_rgba(251,191,36,0.7)]',
  complete: 'shadow-[0_0_8px_2px_rgba(74,222,128,0.7)]',
  unlocked: 'shadow-[0_0_8px_2px_rgba(96,165,250,0.7)]',
  locked: '',
};

export default function PixelPath({ nodes = pathNodes, current = 0 }) {
  return (
    <div className="flex flex-col items-center relative" style={{ minHeight: nodes.length * 90 }}>
      {nodes.map((node, idx) => {
        // Zig-zag: even left, odd right
        const isLeft = idx % 2 === 0;
        return (
          <div key={node.label} className="flex w-full items-center relative" style={{ height: 90 }}>
            {/* Connector line above */}
            {idx > 0 && (
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: -45, width: 4, height: 45, background: '#222', borderRadius: 2, filter: 'url(#pixelate)' }}
              />
            )}
            <div className={`flex-1 ${isLeft ? 'justify-end' : 'justify-start'} flex`}>
              <div
                className={`relative flex flex-col items-center group`}
                style={{
                  marginLeft: isLeft ? 0 : 40,
                  marginRight: isLeft ? 40 : 0,
                }}
              >
                <div
                  className={`w-16 h-16 border-4 ${statusColor[node.status]} ${statusShadow[node.status]} flex items-center justify-center rounded-[6px]`}
                  style={{ imageRendering: 'pixelated', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 18 }}
                >
                  {idx === current ? (
                    <img src={mascot} alt="mascot" className="w-10 h-10" style={{ imageRendering: 'pixelated' }} />
                  ) : (
                    <span>{node.label[0]}</span>
                  )}
                </div>
                <span className="mt-2 text-xs font-pixel text-gray-700 select-none" style={{ fontFamily: 'monospace' }}>{node.label}</span>
              </div>
            </div>
          </div>
        );
      })}
      {/* SVG filter for pixel effect (optional, fallback to CSS) */}
      <svg width="0" height="0">
        <filter id="pixelate" x="0" y="0">
          <feFlood x="4" y="4" height="4" width="4" />
          <feComposite in2="SourceGraphic" operator="in" />
          <feMorphology operator="dilate" radius="1" />
        </filter>
      </svg>
    </div>
  );
}
