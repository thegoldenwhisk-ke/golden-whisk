import React from 'react';

export default function WhiskIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Whisk Handle */}
      <line x1="12" y1="2" x2="12" y2="7" />
      <line x1="10" y1="7" x2="14" y2="7" />
      {/* Outer Balloon Loops */}
      <path d="M12 7C8.5 10 7.5 15.5 8.5 19C9.2 21.5 14.8 21.5 15.5 19C16.5 15.5 15.5 10 12 7Z" />
      {/* Inner Wire 1 */}
      <path d="M12 7C10 10.5 9.5 15 10.5 19.5" />
      {/* Inner Wire 2 */}
      <path d="M12 7C14 10.5 14.5 15 13.5 19.5" />
    </svg>
  );
}