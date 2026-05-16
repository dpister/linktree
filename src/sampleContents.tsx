import type { LinkItem } from "./App.tsx"

export const linkItems: LinkItem[] = [
  {
    name: "Link1",
    img: "src/assets/link.png",
    link: "https://sampleLinkdotcom",
    type: "socials",
  },
  {
    name: "Profile2",
    img: "src/assets/copy.png",
    link: "https://sampleLinkdotcom",
    addInfo: {
      // Show your username below the name of the linked website
      displayedText: "@myUsername",
      copyContent: "myUsername",
      displayedType: "Username",
    },
    type: "other",
  },
  {
    name: "Link3",
    img: "src/assets/link.png",
    // Links can be omitted if there is no website to link to
    addInfo: {
      displayedText: "EU West: username#1234",
      copyContent: "username#1234",
      displayedType: "Gamer tag",
    },
    type: "gaming",
  },
]

export const headerName = "Your Name"

export const headerBio = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
   sed diam nonumy eirmod tempor invidunt ut
   labore et dolore magna aliquyam erat, sed diam voluptua`
