import type { LinkItem, LinkItemType } from "../App"
import { linkItems } from "../contents"
import LinkButton from "./LinkButton"

const toComparableString = (myString: string) => {
  return myString
    .replace(/\s+/g, "") // remove all whitespace
    .toLowerCase()
}

const LinktreeSection = ({ searchTerm, header, type }: { searchTerm: string; header: string; type: LinkItemType }) => {
  const filteredItems = linkItems
    .filter((l: LinkItem) => l.type === type)
    .filter((l: LinkItem) => toComparableString(l.name).includes(toComparableString(searchTerm)))

  return (
    <section>
      {filteredItems.length > 0 && <h3 className="text-white text-2xl text-center m-5">{header}</h3>}
      {filteredItems.map((l: LinkItem) => {
        return <LinkButton key={l.name} linkItem={l} />
      })}
    </section>
  )
}

export default LinktreeSection
