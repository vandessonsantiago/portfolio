import Image from "next/image"

export default function LogoCSS() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/css3.svg"
        alt="Picture of the author"
        width={80}
        height={120}
      />
    </div>
  )
}
