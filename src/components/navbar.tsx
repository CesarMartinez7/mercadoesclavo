"use client";
import Image from "next/image";
import ImagenEnvioGratis from "@/ui/image/enviogratis.webp";
import MercadoLibreLogo from "@/ui/image/logo_large_25years_v2.png";
import { Icon } from "@iconify/react";
import { FormEvent} from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/query/${inputRef.current?.value}`);
  };
  return (
    <div className="bg-yellow-300 flex flex-nowrap items-center py-2 justify-center w-full shadow-md ">
      <header className="px-3 md:w-[50vw]">
        <div className="flex justify-between  items-center mb-3 ">
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
                    ref={inputRef}
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
        <div
          aria-label="Stats"
          className="w-full font-light  flex justify-between"
        >
          <div className="w-full flex items-center gap-4 ">
            <div aria-label="envio" className="inline-flex gap-2">
              <div>
                <Icon icon="mdi:location-on-outline" width="26" height="26" />
              </div>
              <div>
                <p className="font-extralight text-[12px]">Enviar a Cesar</p>
                <p className="text-sm font-medium">Carrera KR 54 #13-31</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[13px]">
              <p className="flex items-center">
                Categorias{" "}
                <Icon icon="mdi:chevron-down" width="14" height="14" />
              </p>
              <p>Ofertas</p>
              <p>Cupones</p>
              <p>Supermercado</p>
              <p>Vender</p>
              <p>Ayuda</p>
            </div>
          </div>
          <div className="flex text-[13px] items-center gap-3">
            <p>Cesar</p>
            <p>Mis compras</p>
            <p>Favoritos</p>
          </div>
        </div>
      </header>
    </div>
  );
}
