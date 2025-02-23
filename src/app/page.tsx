"use client";
//@ts-nocheck 
import ImagenEnvioGratis from "@/ui/image/envio.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Response } from "@/lib/types/response";

const accessToken = process.env.ASCES_TOKEN;

export default function Home() {
  const [data, setData] = useState<Response>();
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
      .then((data) => setData(data));
    console.log(data);
  });

  return (
    <main className="bg-gradient-to-t z-30 relative w-full h-[50vh]">
      <div className="flex items-end">
        <Image
          src={ImagenEnvioGratis}
          className="w-full h-[50vh] object-cover"
          alt="Imageb de envio Gratis"
        />
      </div>
      <div className="absolute flex  justify-end bg-gradient-to-t from-white/100 to-transparent inset-0 "></div>
      <div className="w-full grid place-content-center">
        <div className="grid place-content-center w-[1100px] gap-12 ">
          <ul className="flex  justify-between gap-5 ">
            {data?.results.slice(0, 5).map((i) => (
              <li key={i.id} className="p-3 border w-full grid   rounded-md">
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
                  <p className="text-xs  w-full h-[29px] overflow-hidden overflow-ellipsis w-full">
                    {i.title}
                  </p>
                  <p className="text-zinc-600 text-xs line-through">
                    {" "}
                    $ {i.original_price}
                  </p>
                  <p className="font-semibold">$ {i.price}</p>
                  <p className="text-xs text-green-500 font-bold">
                    {i.shipping.free_shipping
                      ? "Envio gratis"
                      : i.shipping.benefits}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="bg-whitespace border p-2 flex-shrink-0">
            <h3 className="font-semibold text-lg">Inspirado en lo ultimo que vistes</h3>
            <ul className="flex flex-shrink-0 p-3">
                {data?.results.slice(0,5).map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
