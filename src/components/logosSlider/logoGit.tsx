import Image from "next/image"

export default function LogoGit() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/git.svg"
        alt="Picture of the author"
        width={150}
        height={150}
      />
    </div>
  )
}
