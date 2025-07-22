'use client';

import React from 'react';
import { FaTachometerAlt, FaTable, FaChartBar } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white flex flex-col fixed">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">EyeGo Dashboard</div>

      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link href="/dashboard">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <FaTachometerAlt className="text-lg" />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link href="/dashboard/data">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <FaTable className="text-lg" />
            <span>Data Table</span>
          </div>
        </Link>

        <Link href="/dashboard/chart">
          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <FaChartBar className="text-lg" />
            <span>Analytics</span>
          </div>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
