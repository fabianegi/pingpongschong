import { cloneElement, useState } from "react"
import { Footer } from "@pmndrs/branding"

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen bg ready"} ${clicked && "clicked"}`}>
        <div className="stack">
          <a href="#" onClick={() => setClicked(true)}>
            {"click to continue"}
          </a>
        </div>
      </div>
    </>
  )
}
