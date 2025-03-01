"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Response } from "@/lib/types/response";

const accessToken = process.env.ACCES_TOKEN;

interface OpcionesType {
  method: string;
  headers: {
    Authorization: string;
    "Content-Type": string;
  };
}

const opciones = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

interface ReturnUseProducts {
  data?: Response;
  filter: string;
  isLoading: boolean;
  error: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

// ⬇️ 1. Mejor estructura: Eliminar ENDPOINT fuera del estado
export default function UseProducts(): ReturnUseProducts {
  const { query } = useParams();
  const [filter, setFilter] = useState<string>("");
  const [data, setData] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const asyncFetching = async (ENDPOINT: string, opciones: OpcionesType) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(ENDPOINT, opciones);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // ⬇️ 2. Mueve ENDPOINT dentro del useEffect
  useEffect(() => {
    if (!query) return; // Evita llamadas innecesarias si no hay `query`

    const ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?q=${query}${filter}`;
    asyncFetching(ENDPOINT, opciones);
  }, [query, filter]); // ⬅️ ENDPOINT ya no es dependencia directa

  // ⬇️ 3. Actualiza el título de la pestaña correctamente
  useEffect(() => {
    if (query) {
      document.title = `${query?.slice(0, 1).toUpperCase() + query?.slice(1)} | MercadoLibre 📦`;
    }
  }, [query]);

  return { data, filter, isLoading, error, setFilter };
}
