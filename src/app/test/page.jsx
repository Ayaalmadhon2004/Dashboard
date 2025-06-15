"use client";

import { useState } from "react"

export default function page() {
    const [input,setInput]=useState("");
  return (
    <div>
      <form>
        <input type="text" onChange={e=>setInput(e.target.value)}/>
        <button onClick={send(input)}>Send</button> {/**when reload the page not in click the button  */}
      </form>
    </div>
  )
}
