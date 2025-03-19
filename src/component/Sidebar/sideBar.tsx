'use client'
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



export default function Sidebar() {
  return (
    <div>
  <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
            <Image src="/images/air-bnb.png" alt='123' width={100} height={100}/>
      </a>
      <ul className="space-y-2 font-medium">
        <li>
          <Link href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <MdDashboard className="" />

            <span className="ms-3">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/bookings" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <TbBrandBooking/>
            <span className="flex-1 ms-3 whitespace-nowrap">Quản lí bookings</span>
          </Link>
        </li>
        <li>
          <Link href="/locations" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaLocationDot/>
            <span className="flex-1 ms-3 whitespace-nowrap">Quản lí vị trí</span>
          </Link>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaUser/>
            <span className="flex-1 ms-3 whitespace-nowrap">Quản lí người dùng</span>
          </a>
        </li>
        <li>
          <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           
            <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            
            <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           
            <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
  
        </div>

  )
}
