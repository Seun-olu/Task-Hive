"use client"; // Ensure this is a client component
import React from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Sidebar = () => {
    const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col h-full">
        <div className="p-4 text-2xl font-bold text-black">Task Hive</div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="#all"
            className={`block p-2 rounded ${pathname === '#all' ? 'bg-[#ececec]' : 'bg-[#f6f6f6]'} hover:bg-gray-600`}
          >
            All Tasks
          </Link>
          <Link
            href="#completed"
            className={`block p-2 rounded ${pathname === '#completed' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-gray-600`}
          >
            Completed
          </Link>
          <Link
            href="#favourites"
            className={`block p-2 rounded ${pathname === '#favourites' ? 'bg-blue-500' : 'bg-gray-700'} hover:bg-gray-600`}
          >
            Favourite
          </Link>
        </nav>
      </aside>
  );
};

export default Sidebar;
