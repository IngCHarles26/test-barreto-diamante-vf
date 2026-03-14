'use client'

import { useMessageStore } from "@/store"
import clsx from "clsx"
import { useEffect } from "react"

export const SidebarMessage = () => {
  const { 
    stMessage:message, stLoadingMsg:loading, stGoodMsg:isGood,stResetMsg 
  } = useMessageStore( st => st)

  useEffect(() => {
  if (message && !loading) {

    const timer = setTimeout(() => {
      stResetMsg();
    }, 8000);
    return () => clearTimeout(timer);
    
  }
}, [message, loading, stResetMsg]);
  
  return (
    <p className={clsx(
        "w-full px-1 mb-2 font-bold text-lg text-wrap uppercase text-center text-white",
        loading  
          ? 'animate-pulse bg-orange-1'
          : isGood ? 'bg-money' : 'bg-danger',
      )}
    >
      {message}
    </p>
  )
}
