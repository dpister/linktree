import { useState } from "react"
import type { LinkItem } from "../App"
import OpenMenuButton from "./OpenMenuButton"
import Menu from "./Menu"

const Content = ({ linkItem }: { linkItem: LinkItem }) => {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 my-auto size-10 ml-4">
        <img src={linkItem.img} alt={linkItem.img} className="rounded-lg" />
      </div>
      <div className="mx-16">
        <div className="text-white text-center text-lg wrap-break-word">{linkItem.name}</div>
        {linkItem.addInfo?.displayText && (
          <div className="text-white text-center wrap-break-word">{linkItem.addInfo?.displayText}</div>
        )}
      </div>
    </>
  )
}

const LinkOrDiv = ({ linkItem }: { linkItem: LinkItem }) => {
  return (
    <>
      {linkItem.link ? (
        <a href={linkItem.link} target="_blank">
          <Content linkItem={linkItem} />
        </a>
      ) : (
        <div tabIndex={0}>
          <Content linkItem={linkItem} />
        </div>
      )}
    </>
  )
}

const LinkButton = ({ linkItem }: { linkItem: LinkItem }) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const hasLink = Boolean(linkItem.link)
  return (
    <div className="relative">
      {menuOpened && <Menu linkItem={linkItem} setOpened={setMenuOpened} />}
      <div
        className={`${hasLink ? "hover:bg-zinc-600" : ""} relative flex flex-col justify-center align-center my-3 min-h-14 py-1 bg-zinc-500 rounded-full border-zinc-600 border`}
      >
        <LinkOrDiv linkItem={linkItem} />
        <div className="absolute right-1">
          <OpenMenuButton setClicked={setMenuOpened} />
        </div>
      </div>
    </div>
  )
}

export default LinkButton
