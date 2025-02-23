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
          <ul className="flex  justify-between gap-5  ">
            {data?.results.slice(5, 10).map((i) => (
              <li key={i.id} className="p-3 border w-full grid  shadow-sm rounded-md">
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
          <div className="bg-whitespace border p-5 flex-shrink-0 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">
              Inspirado en lo ultimo que vistes
            </h3>
            <ul className="flex flex-shrink-0 p-3 w-full overflow-x-scroll gap-2">
              {data?.results.slice(0, 12).map((item) => (
                <li
                  className="flex-shrink-0 border rounded p-1  max-w-[180px]"
                  key={item.id}
                >
                  <div className="w-full">
                    <img src={item.thumbnail} alt="sfsd" className="w-full" />
                  </div>
                  <p className="text-xs   h-[29px] overflow-hidden overflow-ellipsis w-full">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-h-[120px] bg-whitemercado  border rounded-md  relative shadow-md ">
            <div className="flex justify-between bg-gradient-to-l text-white from-[#0F1A52] to-[#A90F90] px-5 rounded-t-md py-3">
              <h4 className="font-semibold">Suscríbete al nivel 6 por$29.990 /mes</h4>
              <button className="px-3 font-bold py-1.5 text-sm bg-white/20 rounded-md ">Suscribete</button>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Consigue los mejores beneficios en Mercado Libre</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
