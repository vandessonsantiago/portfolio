import Image from "next/image"

export default function Logofirebase() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/firebase.svg"
        alt="Picture of the author"
        width={80}
        height={120}
      />
    </div>
  )
}
