"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ItemInterface } from "@/lib/types/response-item";

// const opciones = {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "application/json",
//   },
// };

export default function Item() {
  const { id } = useParams();
  const [ setData] = useState<ItemInterface>();
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  const fetchingAsync = async (endpoint: string) => {
    try {
      const response = await fetch(endpoint);
      const datae = await response.json();
      setData(datae);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchingAsync(endpoint);
  }, [id]);

  return (
    <div>
      <h3>dsfsdfdsf</h3>
    </div>
  );
}
