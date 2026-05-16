import { useState } from "react"

const CopyLinkButton = ({
  contentType,
  copyContent,
  img,
  successImg,
}: {
  contentType: string
  copyContent: string
  img: string
  successImg: string
}) => {
  const NO_TIMEOUT = 0
  const [currentImg, setCurrentImg] = useState(img)
  const [currentTimeout, setCurrentTimeout] = useState(NO_TIMEOUT)

  async function handleKeydown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      await handleClick()
    }
  }

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(copyContent)
    } catch (error) {
      console.error("Failed to copy: ", error)
    }
    if (!(currentTimeout === NO_TIMEOUT)) {
      clearTimeout(currentTimeout)
    }
    setCurrentImg(successImg)
    const timeout = setTimeout(
      (img: string) => {
        setCurrentImg(img)
        setCurrentTimeout(0)
      },
      3000,
      img,
    )
    setCurrentTimeout(timeout)
  }

  return (
    <div className="mx-5 my-1" onClick={handleClick} onKeyDown={handleKeydown}>
      <img
        tabIndex={0}
        role="button"
        className="size-10 mx-auto m-1 p-2 bg-zinc-500 hover:bg-zinc-600 rounded-xl cursor-pointer"
        src={currentImg}
        alt={currentImg}
      />
      <p className="text-white text-center text-sm">{contentType}</p>
    </div>
  )
}

export default CopyLinkButton
