import { useState } from "react"
import "./App.css"
import LinktreeSection from "./components/LinktreeSection"
import SearchBar from "./components/SearchBar"
import Header from "./components/Header"

export type AddInfo = { copyContent: string; displayedText: string; displayedType: string }

export type LinkItem = { name: string; img: string; link?: string; addInfo?: AddInfo; type: LinkItemType }

export type LinkItemType = "socials" | "gaming" | "other"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <main className="bg-zinc-400 p-5 font-rubik">
      <div className="bg-zinc-700 max-w-xl mx-auto rounded-3xl p-6">
        <Header />
        <SearchBar setSearchTerm={setSearchTerm} />
        <LinktreeSection searchTerm={searchTerm} header="Gaming" type="gaming" />
        <LinktreeSection searchTerm={searchTerm} header="Socials" type="socials" />
        <LinktreeSection searchTerm={searchTerm} header="Other" type="other" />
      </div>
    </main>
  )
}

export default App
