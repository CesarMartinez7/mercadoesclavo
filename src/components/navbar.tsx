"use client";
import Image from "next/image";
import ImagenEnvioGratis from "@/ui/image/enviogratis.webp";
import MercadoLibreLogo from "@/ui/image/logo_large_25years_v2.png";
import { Icon } from "@iconify/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";

interface NavbarProps {
  categories: string[];
}

export default function Navbar({ categories = Categorias }: NavbarProps) {
  const [isHiddenCategories, setIsHiddenCategories] = useState<boolean>(true);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/query/${inputRef.current?.value.replaceAll(" ","")}`);
  };
  return (
    <div className="bg-yellowmercado flex flex-nowrap z-50  py-2 justify-center w-full shadow-md">
      <header className="px-3 flex flex-col">
        <div className="flex justify-between gap-12  items-center mb-3 ">
          <Link href={"/"}>
            <Image
              src={MercadoLibreLogo}
              width={"134"}
              height={"34"}
              alt="Imagen mercado libre logo"
              className="max-w-[340px] max-h-[39px]"
            />
          </Link>
          <div>
            <form onSubmit={handleSubmit} className="w-full">
              <label className="w-[500px] rounded-sm shadow-md bg-white h-full px-4 py-2 flex">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Buscar productos, marcas y mas..."
                  className="outline-none  placeholder-[#737373] text-[15px] w-full"
                />
                <span className="border-l-2 border-graymercado flex items-center justify-center pl-2">
                  <Icon
                    icon="mdi:search"
                    width="22"
                    height="22"
                    className="text-gray-400"
                  />
                </span>
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
              <div className="relative inline-block">
                <button
                  className="flex items-center"
                  aria-label="categorias"
                  onMouseUp={() => {
                    setIsHiddenCategories(!isHiddenCategories);
                  }}
                >
                  Categorias{"    "}
                  <Icon
                    icon="mdi:chevron-down"
                    width="14"
                    height="14"
                    className="text-zinc-400"
                  />
                </button>
                {!isHiddenCategories && (
                  <div className="absolute top-full mt-2 p-6 bg-zinc-800 shadow-lg h-fit z-50 rounded-md transition-all text-white flex flex-col items-start w-56 gap-3">
                    {categories.map((category, index) => (
                      <Link key={index} href={`/query/${category}`}>
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <p>Ofertas</p>
              <p>Cupones</p>
              <p>Supermercado</p>
              <p>Vender</p>
              <p>Ayuda</p>
            </div>
          </div>
          <div className="flex text-[13px] items-center justify-center gap-3 flex-no">
            <div className="flex-1 flex text-center items-center gap-1">
              <span className="py-1 px-2 bg-whitemercado rounded-full">Ce</span>
              <p>Cesar</p>
              <span>
                <Icon
                  icon="mdi:chevron-down"
                  width="14"
                  height="14"
                  className="text-gray-400"
                />
              </span>
            </div>
            <div className="flex-1 text-center whitespace-nowrap">
              <p>Mis compras</p>
            </div>
            <div className="flex-1 text-center">
              <p className="flex items-center">
                Favoritos{" "}
                <span>
                  <Icon
                    icon="mdi:chevron-down"
                    width="14"
                    height="14"
                    className="text-zinc-400"
                  />
                </span>
              </p>
            </div>
            <button>
            <Icon icon="tabler:shopping-cart" width="20" height="20" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

const Categorias: string[] = [
  "Vehículos",
  "Supermercado",
  "Tecnología",
  "Electrodomésticos",
  "Hogar y Muebles",
  "Deportes y Fitness",
  "Belleza y Cuidado Personal",
  "Accesorios para Vehículos",
  "Herramientas",
  "Construcción",
  "Inmuebles",
  "Compra Internacional",
  "Moda",
  "Juegos y Juguetes",
  "Bebés",
  "Productos Sustentables",
  "Más vendido",
  "Salud y Equipamiento Médico",
  "Industrias y Oficinas",
  "Servicios",
  "Tiendas oficiales",
];
