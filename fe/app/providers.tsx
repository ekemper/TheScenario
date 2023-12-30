// app/providers.tsx
'use client'

// following docs here : https://nextui.org/docs/frameworks/nextjs

import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}