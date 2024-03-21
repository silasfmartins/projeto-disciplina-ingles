'use client'

import { ReactNode } from "react";

import { Header } from "@/components/Header";
import { ThemeProvider } from 'next-themes'
import { Toaster } from "@/components/Toaster";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        {children}
        <Toaster />
      </div>
    </ThemeProvider>
  )
}