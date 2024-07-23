"use client"

import Sidebar from '@/components/ui/sidebar'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

 

  return (
   
      <div className="flex h-[100dvh] overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}

          <main className="grow [&>*:first-child]:scroll-mt-16">
            {children}
          </main>
        </div>
      </div>
  );
}
