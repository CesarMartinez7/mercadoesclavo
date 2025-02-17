"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Response } from "@/lib/types/response";
import "./page.module.css"

export default function Query() {
  const accessToken = "sYNkXnJ2QvLRJH9O6PAgEQRoLJPbeyaM";
  const { query } = useParams();
  const [data, setData] = useState<Response>();
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
  useEffect(() => {
    fetch(ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);
  
  return (
    <main className="w-full gridCsi">
        <div>
            sfsf
        </div>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3  ">
        {data?.results.map((item) => (
          <li
            key={item.id}
            className="shadow-md grid grid-rows-2 border  rounded-md w-full"
          >
            <div className="w-full min-h-[248px] border-b-2" aria-label="image-div">
              <img src={item.thumbnail} alt={`Imagen de ${item.title}`} className="w-full h-full" />
            </div>
            <div className="my-2 p-3" aria-label="informacion">
              <h2 className="font-light text-xs">{item.title}</h2>
              <p className="text-2xl">$ {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
