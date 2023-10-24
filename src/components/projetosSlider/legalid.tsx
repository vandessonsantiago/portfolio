import { ArrowClockwise, LockSimple } from "@phosphor-icons/react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProjetoLegalid() {
  const [urlVideo, setUrlVideo] = useState<string>("/legalid.png")

  useEffect(() => {
    const atualizarUrl = () => {
      console.log("Chamando a função atualizarImagem")
      const larguraTela = window.innerWidth
      const url1 = "/legalidMobile.png"
      const url2 = "/legalid.png"
      // Defina os breakpoints e valores correspondentes de slidesPerView
      if (larguraTela < 420) {
        console.log(larguraTela)
        setUrlVideo(url1)
      } else {
        setUrlVideo(url2)
      }
      console.log(urlVideo)
    }
    // Adicione um ouvinte de redimensionamento de tela
    window.addEventListener("resize", atualizarUrl)
    // Execute a função de atualização inicialmente
    atualizarUrl()
    // Limpe o ouvinte de redimensionamento de tela quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", atualizarUrl)
    }
  }, [urlVideo])

  return (
    <div className="w-full mb-8">
      <div className="flex justify-center">
        <h3 className="p-4 font-bold antialiased text-center text-4xl">
          Projeto Legal+ID
          <span className="text-yellow-300 font-extrabold text-3xl">.</span>
        </h3>
      </div>
      <div className="flex justify-center">
        <p className="py-8">
          Projeto de aplicação web em nextJS 13, Firebase
          Auth/Firestore/firestorage, e Stripe com integração de API REST para
          assinatura de documentos Eversign - projeto desenvolvido com a
          finalidade de ajudar estrangeiros na obtenção do número de
          identificação fiscal em Portugal.
        </p>
      </div>
      <div className="w-full border border-gray-400 divide-y divide-slate-500 rounded shadow-xl">
        <div className="flex justify-between h-10">
          <div className="ml-4 flex items-center gap-2 w-1/5">
            <span className="bg-red-500 h-3 w-3 rounded-full"></span>
            <span className="bg-yellow-500 h-3 w-3 rounded-full"></span>
            <span className="bg-green-500 h-3 w-3 rounded-full"></span>
          </div>
          <div className="flex justify-center w-3/5">
            <div className="flex justify-center items-center gap-1 w-full bg-slate-100 m-1">
              <span>
                <LockSimple color="#00cc63" weight="fill" />
              </span>
              <p className="font-medium text-xs">legalid.pt</p>
              <span>
                <ArrowClockwise />
              </span>
            </div>
          </div>
          <div className="w-1/5"></div>
        </div>
        <div>
          <div className="w-full h-[800px] lg:h-[520px] relative">
            <Image
              src={urlVideo}
              alt=""
              width={1080}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <a href="https://legalid.pt" className="text-blue-400 decoration-slice">
          legalid.pt/
        </a>
      </div>
    </div>
  )
}
