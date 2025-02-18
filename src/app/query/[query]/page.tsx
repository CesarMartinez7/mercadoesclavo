"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Response } from "@/lib/types/response";
import "./page.module.css";
import Image from "next/image";



export default function Query() {
  const accessToken = process.env.ACCES_TOKEN
  const { query } = useParams();
  const [data, setData] = useState<Response>();
  
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
  const opciones = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    }
  }
  const asyncFetching = async () => {
    const response = await fetch(ENDPOINT,opciones)
    if(!response.ok){
      throw new Error("Error al obtener datos")
    }
    const data = await response.json()
    setData(data)
  } 

  useEffect(() => {
    asyncFetching()
    document.title = `${query} | MercadoLibre 📦`
  }, []);

  return (
    <main className="w-full gridCsi place-content-center grid mt-12 bg-graymercado">
      <ul className="flex flex-shrink-0  w-[50vw] flex-col ">
        {data?.results.map((item) => (
          <li
            key={item.id}
            className="shadow-md flex  border-b-2 border-zinc-300 rounded-md flex-shrink-0 bg-white w-full "
          >
            <div className="bg-yellow-300 w-[33%]">
              <Image
                src={`${item.thumbnail}`}
                alt={`Imagen${item.title}`}
                className="w-full object-cover"
              />
            </div>
            <div className="w-full p-4">
              <h3 className="font-light">{item.title}</h3>
              <p>{item.id}</p>
              <p className="grayscale text-[13px]  text-opacity-45">
                {item.sale_price.regular_amount}
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
