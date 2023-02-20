import React from "react"
import { ThemeToggle } from "components/theme-toggle"

export default function Page() {
  return (
    <div className="relative z-base">
      <h1>h1: Hello world!</h1>
      <h2>h2: Hello world!</h2>
      <h3>h3: Hello world!</h3>
      <h4>h4: Hello world!</h4>
      <h5>h5: Hello world!</h5>
      <h6>h6: Hello world!</h6>
      <p>p: hello</p>
      <ThemeToggle />
    </div>
  )
}
