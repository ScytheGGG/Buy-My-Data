import React from "react"

// website elements
import B_Header from "./b-home/bHeader"
import B_Page from "./b-home/bPage"
import B_Footer from "./b-home/bFooter"

// the app itself
export default function App() {
  return (
    <div>
      <B_Header />
      <B_Page />
      <B_Footer />
    </div>
  )
}