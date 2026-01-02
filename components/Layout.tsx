import React from 'react';

interface LayoutProps {
  left: React.ReactNode;
  main: React.ReactNode;
  right: React.ReactNode;
  title?: string;
}

export const ThreePanelLayout: React.FC<LayoutProps> = ({ left, main, right, title }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FBFBFB]">
      {/* Header */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-yellow-400 font-bold text-sm shadow-sm">S</div>
          <span className="font-bold text-lg tracking-tight text-gray-900 italic">Sun AI</span>
        </div>
        {title && <h1 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">{title}</h1>}
        <div className="flex items-center gap-6">
          <button className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">Client Portal</button>
          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200" />
        </div>
      </header>

      {/* Grid-based Panels */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Panel - Context & Navigation (2 Columns) */}
        <aside className="lg:col-span-2 border-r border-gray-100 p-8 hidden lg:block overflow-y-auto bg-[#FDFDFD]">
          {left}
        </aside>

        {/* Main Panel - Work Area (6 Columns) */}
        <main className="lg:col-span-6 overflow-y-auto p-12 bg-white flex justify-center border-r border-gray-50">
          <div className="w-full max-w-xl">
            {main}
          </div>
        </main>

        {/* Right Panel - AI Intelligence (4 Columns) */}
        <aside className="lg:col-span-4 p-10 hidden lg:block overflow-y-auto bg-[#F9FAFB] relative">
          {/* subtle background glow for the intelligence panel */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />
          {right}
        </aside>
      </div>
    </div>
  );
};