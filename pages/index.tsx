import React from "react"
import { ThemeToggle } from "components/theme-toggle"

export default function Page() {
  return (
    <div className="bg-orange-200 dark:bg-blue-300 min-h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ThemeToggle />
    </div>
  )
}
