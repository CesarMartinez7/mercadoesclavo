"use client";
//@ts-nocheck
import ImagenEnvioGratis from "@/ui/image/envio.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Response } from "@/lib/types/response";
import SkeletonItem1 from "@/components/skeletons/item-skeleton";

const accessToken = process.env.ASCES_TOKEN;

export default function Home() {
  const [data, setData] = useState<Response>();
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

  const opciones = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=tecnologia`;

  useEffect(() => {
    fetch(endpoint, opciones)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Cuando termina de cargar, cambia el estado
      });
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <main className="bg-gradient-to-t z-30 relative w-full h-[50vh]">
      <div className="flex items-end">
        <Image
          src={ImagenEnvioGratis}
          className="w-full h-[50vh] object-cover"
          alt="Imagen de Envío Gratis"
        />
      </div>
      <div className="absolute flex justify-end bg-gradient-to-t from-white/100 to-transparent inset-0"></div>
      <div className="w-full grid place-content-center">
        <div className="grid place-content-center w-[1100px] gap-12">
          <ul className="flex justify-between gap-5">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonItem1 key={index} /> // Renderiza el Skeleton mientras carga
                ))
              : data?.results.slice(5, 10).map((i) => (
                  <li key={i.id} className="p-3 border w-full grid shadow-sm rounded-md">
                    <div className="w-full">
                      <img
                        className="w-full"
                        src={i.thumbnail}
                        width={50}
                        height={60}
                        alt={`Imagen de ${i.title}`}
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <p className="text-xs w-full h-[29px] overflow-hidden overflow-ellipsis w-full">
                        {i.title}
                      </p>
                      <p className="text-zinc-600 text-xs line-through"> $ {i.original_price}</p>
                      <p className="font-semibold">$ {i.price}</p>
                      <p className="text-xs text-green-500 font-bold">
                        {i.shipping.free_shipping ? "Envío gratis" : i.shipping.benefits}
                      </p>
                    </div>
                  </li>
                ))}
          </ul>

          <div className="bg-whitespace border p-5 flex-shrink-0 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">Inspirado en lo último que viste</h3>
            <ul className="flex flex-shrink-0 p-3 w-full overflow-x-scroll gap-2">
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonItem1 key={index} />
                  ))
                : data?.results.slice(0, 12).map((item) => (
                    <li className="flex-shrink-0 border rounded p-1 max-w-[180px]" key={item.id}>
                      <div className="w-full">
                        <img src={item.thumbnail} alt="sfsd" className="w-full" />
                      </div>
                      <p className="text-xs h-[29px] overflow-hidden overflow-ellipsis w-full">
                        {item.title}
                      </p>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
