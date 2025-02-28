"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Response } from "@/lib/types/response";

const acessToken = process.env.ACCES_TOKEN;

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
    Authorization: `Bearer ${acessToken}`,
    "Content-Type": "application/json",
  },
};

interface ReturnUseProducts {
  data: Response;
  filter: string;
  isLoading: boolean;
  error: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
// Fix error to filter, pass to string y recoperar el numero y pasar el & siemrpe  cuando haga falta
export default function UseProducts(): ReturnUseProducts {
  const { query } = useParams();
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<Response>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);

  const asyncFetching = async (ENDPOINT: string, opciones: OpcionesType) => {
    const response = await fetch(ENDPOINT, opciones);
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } else {
      setError(true);
      throw new Error("Error al obtener datos");
    }
  };

  const ENDPOINT = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&${filter}`;

  useEffect(() => {
    asyncFetching(ENDPOINT, opciones);
  }, [filter]);

  useEffect(() => {
    if (query) {
      document.title = `${
        query?.slice(0, 1).toString().toUpperCase() + query?.slice(1)
      } | MercadoLibre 📦`;
    }
  }, [query]);

  if (data) {
    return { data, filter, isLoading, error, setFilter };
  }
return { data, filter, isLoading, error, setFilter };

}
