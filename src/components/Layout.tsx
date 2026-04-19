import React from 'react';
import { Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onHome?: () => void;
}

export default function Layout({ children, onHome }: LayoutProps) {
  return (
    <div className="min-h-screen bg-bg-main flex flex-col">
      <nav className="h-14 sm:h-16 bg-bg-panel border-b border-border-main flex items-center justify-between px-4 sm:px-6 shrink-0 sticky top-0 z-10 shadow-sm">
        <div 
          className={`flex items-center gap-2 sm:gap-3 ${onHome ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
          onClick={onHome}
        >
          <div className="bg-primary-main text-white font-black px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs sm:text-sm uppercase tracking-tight">
            INI-CET
          </div>
          <span className="font-bold text-sm sm:text-lg text-text-main truncate max-w-[150px] sm:max-w-none">
            2026 Master Prep
          </span>
        </div>
        {onHome && (
          <button 
            onClick={onHome}
            className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary-main transition-colors bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
        )}
      </nav>
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
}
