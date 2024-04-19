import React from "react"

// website elements
import BHeader from "./b-home/bHeader"
import BPage from "./b-home/bPage"
import BFooter from "./b-home/bFooter"

// the app itself
export default function App() {
  return (
    <div>
      <BHeader />
      <BPage />
      <BFooter />
    </div>
  )
}