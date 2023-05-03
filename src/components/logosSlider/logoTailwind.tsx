import Image from "next/image"

export default function LogoTailwind() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/tailwindcss-icon.svg"
        alt="Picture of the author"
        width={80}
        height={120}
      />
    </div>
  )
}
