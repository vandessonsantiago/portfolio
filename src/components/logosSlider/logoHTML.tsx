import Image from "next/image"

export default function LogoHTML() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/html5.svg"
        alt="Picture of the author"
        width={80}
        height={120}
      />
    </div>
  )
}
