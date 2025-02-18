"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Response } from "@/lib/types/response";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Query() {
  const accessToken = process.env.ACCES_TOKEN;
  const { query } = useParams();
  const [data, setData] = useState<Response>();

  const ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
  const opciones = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  const asyncFetching = async (ENDPOINT : string) => {
    const response = await fetch(ENDPOINT, opciones);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    asyncFetching(ENDPOINT);
    document.title = `${query} | MercadoLibre 📦`;
  }, []);

  return (
    <main className="w-full gridCsi mt-12 ">
      <div className="w-[300px] text-zinc-700 px-6 ">
        <div aria-label="Resultados y filtros" className="mb-4 ">
          <p className="font-medium text-lg">{data?.query}</p>
          <p className="text-xs font-light">
            {data?.paging.total} <span>Resultados</span>
          </p>
        </div>
        <div>
          {data?.available_filters.map((item) => (
            <div key={item.id}>
              <div>
                <h3 className="text-sm ">{item.name}</h3>
                <ul className="px-4">
                  {item.values.map((value) => (
                    <li key={value.id}>
                      {value.name}
                    </li>
                  ) )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="flex flex-shrink-0  w-[50vw] flex-col ">
        {data?.results.map((item) => (
          <li
            key={item.id}
            className="flex justify-between h-fit max-h-[290px] rounded-md border-b p-3 bg-white "
          >
            <div className="bg-yellow-300 w-[34%]">
              <img
                src={`${item.thumbnail}`}
                alt={`Imagen${item.title}`}
                className="w-full object-cover h-full"
              />
            </div>
            <div className="w-full  py-3 px-2">
              <div>
                <h3 className="font-light text-xl text-zinc-800 mt-3">
                  {item.title}
                </h3>
                <div className="font-light text-sm text-zinc-800 text-[12px] flex">
                  <p className="text-[13px] flex items-center gap-1.5">
                    Por {item.official_store_name}{" "}
                    <Icon icon="mdi:verified" width="14" height="14" className="text-blue-500" />
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="grayscale text-[13px] text-opacity-45 line-through text-zinc-800">
                  <span>{`${
                    item.sale_price.regular_amount?.toString(10).length > 0
                      ? ` $ ${item.sale_price.regular_amount?.toLocaleString()}`
                      : ""
                  }`}</span>
                </p>
                <p>Estrellas</p>
              </div>
              <div className="flex items-center justify-between gap-3 w-[60%] ">
                <div className="flex items-end gap-1">
                  <h4 className="text-2xl">$ {item.price.toLocaleString()}</h4>
                  <p className="text-green-500 text-xs mb-1 font-normal">OFF</p>
                </div>
                <div className="text-[13px] text-graytext">
                  {" "}
                  <p>Disponibles {item.available_quantity}</p>
                </div>
              </div>
              <div>
                <p className="text-[13px] text-green-500 font-semibold mt-3">
                  {item.shipping.free_shipping ? "Envio gratis" : ""}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
