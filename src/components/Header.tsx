import { headerName, headerText } from "../contents"

const Header = () => {
  return (
    <header>
      <img className="mx-auto h-40 w-40 my-5 rounded-full" src="src/assets/profile-pic.png" alt="profile-pic.png" />
      <h1 className="py-5 overflow-hidden text-ellipsis w-5/6 mx-auto text-white text-3xl text-center">{headerName}</h1>
      <h2 className="text-white text-center py-8 max-h-80 w-5/6 mx-auto overflow-hidden text-ellipsis">{headerText}</h2>
    </header>
  )
}

export default Header
