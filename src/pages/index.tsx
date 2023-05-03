import AbasProjects from "@/components/abaProject"
import { HeroPattern } from "@/components/heroPattern"
import Slider from "@/components/slider"
import {
  EnvelopeSimple,
  GithubLogo,
  HandWaving,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react"
import { Inter } from "next/font/google"
import Image from "next/image"
import Balance from "react-wrap-balancer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
})

export default function Home() {
  return (
    <main className={inter.variable}>
      <section>
        <div className="max-w-5xl m-auto flex justify-between items-center p-4 mt-2 border-b border-yellow-200">
          <div>
            <a href="mailto:info@vandessonsantiago.pt">
              <EnvelopeSimple size={24} />
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/vandesson-santiago-89158b270/">
              <LinkedinLogo size={24} />
            </a>
            <a href="https://github.com/vandessonsantiago">
              <GithubLogo size={24} />
            </a>
            <a href="https://www.instagram.com/vandessonsantiago/">
              <InstagramLogo size={24} />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="m-auto flex justify-center p-4 mt-12">
          <Image
            src="/avatar_vand.png"
            alt="Picture of the author"
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <a className="text-sm lg:text-base">
            <span className="font-semibold">Vandesson Santiago</span>
          </a>
          <span>
            <HandWaving />
          </span>
        </div>
        <div className="flex justify-center items-center gap-1">
          <a className="text-xs lg:text-xs">Dev. Node & React</a>
        </div>
        <div className="flex justify-center py-16 my-4 lg:max-w-5xl m-auto">
          <h2 className="font-bold antialiased text-3xl lg:text-6xl text-center p-4 leading-tight tracking-wide overflow-wrap">
            <Balance ratio={0.5}>
              Construindo soluções e experiências digitais
              <span className="text-yellow-300 font-extrabold">.</span>
            </Balance>
          </h2>
          <HeroPattern />
        </div>
        <div className="p-2 outline outline-yellow-200 hover:opacity-100 hover:outline-4 hover:shadow-sm flex justify-center gap-2 items-center w-60 m-auto rounded">
          <button className="p-3 flex items-center gap-2 z-10">
            <a href="mailto:info@vandessonsantiago.pt">Entre em contacto</a>
            <EnvelopeSimple />
          </button>
        </div>
      </section>
      <section>
        <div className="py-16 border-y border-yellow-200 my-32">
          <Slider />
        </div>
      </section>
      <section className="my-20">
        <div className="flex justify-center py-4 mb-16 lg:max-w-4xl mx-2 lg:m-auto ">
          <AbasProjects />
        </div>
      </section>
      <section className="my-20">
        <div className="flex justify-center py-4 mb-16 lg:max-w-4xl m-auto">
          <h2 className="font-bold antialiased text-3xl lg:text-6xl text-center p-4 leading-tight tracking-wide overflow-wrap">
            <Balance ratio={0.5}>
              Fale comigo sobre o seu projeto
              <span className="text-yellow-300 font-extrabold">.</span>
            </Balance>
          </h2>
          <HeroPattern />
        </div>
        <div className="p-2 outline outline-yellow-200 hover:outline-4 hover:shadow-sm flex justify-center gap-2 items-center w-60 m-auto rounded">
          <button className="p-3 flex items-center gap-2">
            <a href="mailto:info@vandessonsantiago.pt"> Entre em contacto</a>
            <EnvelopeSimple />
          </button>
        </div>
      </section>
      <footer className="flex justify-between items-center max-w-5xl m-auto p-4">
        <div>
          <p className="text-xs">© 2023 todos os direitos reservados.</p>
        </div>
        <div className="flex gap-4 items-center">
          <a href="https://www.linkedin.com/in/vandesson-santiago-89158b270/">
            <LinkedinLogo size={24} />
          </a>
          <a href="https://github.com/vandessonsantiago">
            <GithubLogo size={24} />
          </a>
          <a href="https://www.instagram.com/vandessonsantiago/">
            <InstagramLogo size={24} />
          </a>
        </div>
      </footer>
    </main>
  )
}
