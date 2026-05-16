import { type Dispatch, type SetStateAction } from "react"
import menuImg from "../assets/menu.png"

const OpenMenuButton = ({ setClicked }: { setClicked: Dispatch<SetStateAction<boolean>> }) => {
  const handleClick = () => {
    setClicked(true)
  }
  return (
    <div tabIndex={0} onClick={handleClick} className="relative p-2 rounded-full m-0.5 hover:bg-zinc-400">
      <img className="size-6" src={menuImg} alt="menu.png" />
    </div>
  )
}

export default OpenMenuButton
