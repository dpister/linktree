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
        <div className="text-white text-center text-md wrap-break-word">{linkItem.name}</div>
        {linkItem.addInfo?.displayedText && (
          <div className="text-white text-center text-sm wrap-break-word text">{linkItem.addInfo?.displayedText}</div>
        )}
      </div>
    </>
  )
}

const LinkOrDiv = ({ linkItem }: { linkItem: LinkItem }) => {
  return (
    <>
      {linkItem.link ? (
        <a href={linkItem.link} target="_blank" className="flex flex-col justify-center align-center min-h-14 py-1 active:bg-zinc-600 hover:bg-zinc-600 rounded-full">
          <Content linkItem={linkItem} />   
        </a>
      ) : (
        <div tabIndex={0} className="flex flex-col justify-center align-center min-h-14 py-1 rounded-full">
          <Content linkItem={linkItem} />
        </div>
      )}
    </>
  )
}

const LinkButton = ({ linkItem }: { linkItem: LinkItem }) => {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="relative">
      <div className="relative bg-zinc-500 rounded-full my-3 border-zinc-600 border">
        <LinkOrDiv linkItem={linkItem} />
        <div className="absolute bottom-1/2 translate-y-1/2 right-2">
          <OpenMenuButton setClicked={setMenuOpened} />
        </div>
      </div>
      {menuOpened && <Menu linkItem={linkItem} setOpened={setMenuOpened} />}
    </div>
  )
}

export default LinkButton
