"use client";
import Image from "next/image";
import ImagenEnvioGratis from "@/ui/image/enviogratis.webp";
import MercadoLibreLogo from "@/ui/image/logo_large_25years_v2.png"

export default function Home() {
  const handleSubmit = () => {
    window.alert("Pon la logica del submit");
  };
  return (
    // El height debe ser de 120px
    <div className="bg-yellow-300 flex items-center justify-center">
    <header className="bg-yellow-300  px-3 md:w-[50vw]">
      <div className="flex justify-between pt-4 items-center mb-3 ">
        <div className="">
        <Image
            src={MercadoLibreLogo}
            width={"134"}
            height={"34"}
            alt="Imagen mercado libre logo"
            className="max-w-[340px] max-h-[39px]"
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="w-[400px] rounded-sm shadow-md bg-white h-full px-4 py-2 flex">
              <input
                type="text"
                placeholder="Buscar productos, marcas y mas..."
                className="outline-none placeholder-[#737373] text-[15px] w-full"
              />
            </label>
          </form>
        </div>
        <div>
          <Image
            src={ImagenEnvioGratis}
            width={"340"}
            height={"39"}
            alt="Imagen mercado libre logo"
            className="max-w-[340px] max-h-[39px]"
          />
        </div>
      </div>
      <div aria-label="Stats" className="w-full font-light  flex justify-between">
        <div className="w-full flex items-center gap-4 ">
          <div aria-label="envio">
            <p className="font-extralight text-[12px]">Enviar a Cesar</p>
            <p className="text-sm font-medium">Carrera KR 54 #13-31</p>
          </div>
          <div className="flex items-center gap-3 text-[13px]">
            <p className="">Categorias _</p>
            <p>Ofertas</p>
            <p>Cupones</p>
            <p>Supermercado</p>
            <p>Vender</p>
            <p>Ayuda</p>
          </div>
        </div>
        <div className="inline-flex text-[13px] items-center gap-3">
          <p>Cesar</p>
          <p>Mis compras</p>
          <p>Favoritos</p>
        </div>
      </div>
    </header>
    </div>
  );
}
