import Image from "next/image"

export default function LogoNode() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/nodejs.svg"
        alt="Picture of the author"
        width={100}
        height={100}
      />
    </div>
  )
}
