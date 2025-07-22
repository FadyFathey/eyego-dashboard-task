'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-slate-800 to-slate-900 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-800 transition-all duration-200 border border-slate-700 backdrop-blur-sm"
        >
          <span className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Menu
          </span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-gradient-to-b from-white to-gray-50 shadow-2xl border-r border-gray-200/50 px-8 py-8 transform transition-all duration-500 ease-out backdrop-blur-md
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200/60">
          <div className="flex items-center gap-3">
            <img
              src="https://i0.wp.com/eyego.ai/wp-content/uploads/2023/12/cropped-eyego-logo-png-1-1.png?fit=810%2C935&ssl=1"
              alt="EyeGo Logo"
              className="h-12 w-auto drop-shadow-sm"
            />
            <div className="text-sm text-gray-500 font-medium">Enterprise</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar"
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className="group flex items-center gap-4 text-gray-700 hover:text-slate-800 hover:bg-slate-50 font-medium px-4 py-4 rounded-xl transition-all duration-200 border border-transparent hover:shadow-sm hover:border-slate-200"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Dashboard</div>
              <div className="text-xs text-gray-500">Overview & Analytics</div>
            </div>
          </Link>

          <Link
            href="/dashboard/table"
            className="group flex items-center gap-4 text-gray-700 hover:text-slate-800 hover:bg-slate-50 font-medium px-4 py-4 rounded-xl transition-all duration-200 border border-transparent hover:shadow-sm hover:border-slate-200"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Data Table</div>
              <div className="text-xs text-gray-500">Records & Management</div>
            </div>
          </Link>

          <Link
            href="/dashboard/charts"
            className="group flex items-center gap-4 text-gray-700 hover:text-slate-800 hover:bg-slate-50 font-medium px-4 py-4 rounded-xl transition-all duration-200 border border-transparent hover:shadow-sm hover:border-slate-200"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Analytics</div>
              <div className="text-xs text-gray-500">Charts & Insights</div>
            </div>
          </Link>

          <div className="border-t border-gray-200/60 my-6" />

          <Link
            href="/logout"
            className="group flex items-center gap-4 text-red-600 hover:text-red-700 hover:bg-red-50 font-medium px-4 py-4 rounded-xl transition-all duration-200 border border-transparent hover:shadow-sm hover:border-red-200"
          >
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold">Sign Out</div>
              <div className="text-xs text-red-500">Exit Application</div>
            </div>
          </Link>
        </nav>
      </aside>
    </>
  );
}
