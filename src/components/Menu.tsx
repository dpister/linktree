import { useEffect, useRef, type Dispatch, type SetStateAction } from "react"
import type { LinkItem } from "../App"
import CopyLinkButton from "./CopyLinkButton"
import linkImg from "../assets/link.png"
import successImg from "../assets/checkmark.png"
import copyImg from "../assets/copy.png"

const Menu = ({ linkItem, setOpened }: { linkItem: LinkItem; setOpened: Dispatch<SetStateAction<boolean>> }) => {
  const handleOutsideClick = () => {
    setOpened(false)
  }

  const useOutsideClick = (callback: { (): void; (): void }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleOutsideClick()
        }
      }
      const handleClick = (event: MouseEvent) => {
        if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
          callback()
        }
      }

      document.addEventListener("click", handleClick, true)
      document.addEventListener("keydown", handleKeydown, true)

      return () => {
        document.removeEventListener("keydown", handleKeydown, true)
        document.removeEventListener("click", handleClick, true)
      }
    }, [ref])

    return ref
  }

  const ref = useOutsideClick(handleOutsideClick)

  return (
    <div
      ref={ref}
      className="py-2 px-3 absolute z-20 -right-2 -top-2 -translate-y-full bg-zinc-700 border-2 border-zinc-600 rounded-xl"
    >
      <h3 className="text-white">Copy</h3>
      <div className="flex justify-between">
        {linkItem.link && (
          <CopyLinkButton contentType="URL" copyContent={linkItem.link} img={linkImg} successImg={successImg} />
        )}
        {linkItem.addInfo && (
          <CopyLinkButton
            contentType={linkItem.addInfo.displayedType}
            copyContent={linkItem.addInfo.copyContent}
            img={copyImg}
            successImg={successImg}
          />
        )}
      </div>
    </div>
  )
}

export default Menu
