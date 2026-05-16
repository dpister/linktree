import { type Dispatch, type SetStateAction } from "react"
import menuImg from "../assets/menu.png"

const OpenMenuButton = ({ setClicked }: { setClicked: Dispatch<SetStateAction<boolean>> }) => {
  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick()
    }
  }
  const handleClick = () => {
    setClicked(true)
  }
  return (
    <div
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeydown}
      role="button"
      className="cursor-pointer relative p-2 rounded-full m-0.5 active:bg-zinc-400 hover:bg-zinc-400"
    >
      <img className="size-6" src={menuImg} alt="menu.png" />
    </div>
  )
}

export default OpenMenuButton
