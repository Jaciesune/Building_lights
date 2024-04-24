import React from "react"

export default function GuestLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex h-screen items-center justify-center p-10">
      {children}
    </main>
  )
}
