"use client"
import React, { useEffect } from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);
  const isDarkMode = useAppSelector((state)=> state.global.isDarkMode)

  // Apply dark mode class to document
  useEffect(()=>{
    const html = document.documentElement;
    
    if(isDarkMode){
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    
    // Log for debugging
    console.log('Dark mode state:', isDarkMode);
    console.log('HTML classes:', html.className);
  }, [isDarkMode])

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-dark-bg dark:text-white'>
      {/* sidebar */}
      <Sidebar />
      <main className={`flex flex-col w-full bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper