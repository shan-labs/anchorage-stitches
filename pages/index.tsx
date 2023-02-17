import React from "react"
import { ThemeToggle } from "components/theme-toggle"

export default function Page() {
  return (
    <div className="relative z-base">
      <h1 className="text-plum-8">Hello world!</h1>

      <h2 className="p-4 pt-2">Hello world!</h2>
      <ThemeToggle />
    </div>
  )
}
