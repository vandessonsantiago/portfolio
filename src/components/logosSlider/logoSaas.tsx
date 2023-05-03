import Image from "next/image"

export default function LogoSaas() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/sass.svg"
        alt="Picture of the author"
        width={80}
        height={120}
      />
    </div>
  )
}
