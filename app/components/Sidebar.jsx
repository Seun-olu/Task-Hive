"use client"; // Ensure this is a client component
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-[#212121] text-white flex flex-col h-full">
      <div className="p-4 text-2xl font-bold text-white">Task Hive</div>
      <nav className="flex-1 p-4 text-white space-y-2">
        <Link
          href="#all"
          className={`block p-2 rounded ${
            pathname === "#all" ? "bg-[#212121]" : "bg-transparent"
          } hover:bg-gray-600`}
        >
          All Tasks
        </Link>
        <Link
          href="#completed"
          className={`block p-2 rounded ${
            pathname === "#completed" ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-gray-600`}
        >
          Completed
        </Link>
        <Link
          href="#favourites"
          className={`block p-2 rounded ${
            pathname === "#favourites" ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-gray-600`}
        >
          Favourite
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
