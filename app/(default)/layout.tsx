"use client"

import Sidebar from '@/components/ui/sidebar'
import Header from '@/components/ui/header'
import { ScopeContext } from '../(context)/ScopeContext'
import { useEffect, useState } from 'react'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  const [id, setId] = useState<number>(0)
  const [scopeCheck, setScopeCheck] = useState<boolean>(false)
  const [names, setNames] = useState('');
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [scopeValue, setScopeValue] = useState('')
  

  useEffect(() => {
    if (triggerUpdate) {
      setScopeValue(names);
      setTriggerUpdate(false);
    }
  }, [names, triggerUpdate]);

  const value = (index: number, name: string) => {
    setScopeCheck(true);
    setId(index);
    setNames(name); 
    setTriggerUpdate(true); 
  };


  return (
    <ScopeContext.Provider value={{
      id , setId, value , scopeCheck , scopeValue
      }}>
      <div className="flex h-[100dvh] overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header />

          <main className="grow [&>*:first-child]:scroll-mt-16">
            {children}
          </main>
        </div>
      </div>
    </ScopeContext.Provider>
  );
}
