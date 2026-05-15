import { useEffect, useRef } from "react"
import type { LinkItem } from "../App"
import CopyLinkButton from "./CopyLinkButton"

const Menu = ({
  linkItem,
  setOpened,
}: {
  linkItem: LinkItem
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleOutsideClick = () => {
    setOpened(false)
  }

  const useOutsideClick = (callback: { (): void; (): void }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
          callback()
        }
      }

      document.addEventListener("click", handleClick, true)

      return () => {
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
          <CopyLinkButton
            contentType="URL"
            copyContent={linkItem.link}
            img="src/assets/link.png"
            successImg="src/assets/checkmark.png"
          />
        )}
        {linkItem.addInfo && (
          <CopyLinkButton
            contentType={linkItem.addInfo.type}
            copyContent={linkItem.addInfo.copyContent}
            img="src/assets/copy.png"
            successImg="src/assets/checkmark.png"
          />
        )}
      </div>
    </div>
  )
}

export default Menu
