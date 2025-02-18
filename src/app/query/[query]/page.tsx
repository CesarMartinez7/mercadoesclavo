"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Response } from "@/lib/types/response";

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
  const asyncFetching = async () => {
    const response = await fetch(ENDPOINT, opciones);
    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    asyncFetching();
    document.title = `${query} | MercadoLibre 📦`;
  }, []);

  return (
    <main className="w-full gridCsi mt-12 ">
      <div className="w-[300px] text-zinc-700 px-6 ">
        <div aria-label="Resultados y filtros" className="mb-4 ">
          <p className="font-medium text-lg">{query}</p>
          <p className="text-xs font-light">
            {data?.paging.total} <span>Resultados</span>
          </p>
        </div>
        <div>
          {data?.available_filters.map((item) => (
            <div key={item.id}>
              <div>
                <h3 className="text-sm ">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="flex flex-shrink-0  w-[50vw] flex-col ">
        {data?.results.map((item) => (
          <li
            key={item.id}
            className="flex justify-between  rounded-md border-b p-3 bg-white "
          >
            <div className="bg-yellow-300 w-[30%]">
               
              <img
                src={`${item.thumbnail}`}
                alt={`Imagen${item.title}`}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full p-4">
              <h3 className="font-light">{item.title}</h3>
              <p className="grayscale text-[13px] text-opacity-45 line-through text-zinc-800">
                <span>{`$${
                  item.sale_price.regular_amount?.toString(10).length > 0
                    ? item.sale_price.regular_amount?.toString(10)
                    : ""
                }`}</span>
              </p>
              <div className="inline-flex items-center justify-center gap-3">
                <h4 className="text-2xl">$ {item.price}</h4>
                <p className="text-green-500 text-sm font-normal">OFF</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
