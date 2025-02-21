"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ItemInterface } from "@/lib/types/response-item";
// import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

// const opciones = {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     "Content-Type": "application/json",
//   },
// };

export default function Item() {
  const { id } = useParams();
  const [data, setData] = useState<ItemInterface>();
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

  if (data) {
    return (
      <div className="bg-graymercado flex-col items-center flex w-full h-screen">
        <div className="w-[60vw]">
          <p className="text-blue-500 text-xs mt-3">
            Volver al listado Electrónica, Audio y Video Audio
          </p>
        </div>
        <div className="p-6 bg-whitemercado w-[1100px] rounded-sm shadow-sm grid-cols-3 grid gap-2">
          <div className="flex ">
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Image
              src={data?.pictures[0].secure_url}
              alt={`Imagen de ${data?.title}`}
              width={500}
              height={500}
            />
          </div>
          <div className=" p-4">
            <section className="mt-12">
              <h3 className="font-medium text-xl">{data?.title}</h3>
              <p className="text-sm text-graytext line-through">
                $ {data?.price.toLocaleString()}
              </p>
              <p className="text-4xl font-light text-zinc-900">
                {" "}
                $ {data?.base_price.toLocaleString()}
              </p>
              <p>
                en{" "}
                <span className="text-green-600">
                  12 cuotas de $ {Number(data?.price / 12)} con 0% interes
                </span>{" "}
              </p>
              <button className="text-xs text-blue-500">
                Ver los medios de pago
              </button>
            </section>
          </div>
          <div className="flex flex-col">
            <div className="py-[25px] px-[16px] border border-zinc-200  rounded-md">
              <div className=" flex flex-col gap-5 ">
                <div>
                  <p className="text-sm">
                    <span className="text-green-500 font-semibold">
                      Llega gratis
                    </span>{" "}
                    entre el sabado y lunes
                  </p>
                  <p className="text-blue-500 text-left text-sm">
                    Mas formas de entrega
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Stock disponibles</p>
                  <p className="text-zinc-500 text-sm">
                    Almacenado y enviado por{" "}
                    <span className="font-mono text-green-500">FULL</span>
                  </p>
                </div>
                <div className="mb-8">
                  <p className="text-zinc-600 text-sm">
                    Cantidad <strong>1 unidad</strong> (25+ disponibles)
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-2 flex-col ">
                <button className="py-2.5 px-2 font-medium text-[14px] text-white bg-blue-500 rounded-md">
                  Comprar ahora
                </button>
                <button className="bg-blue-100 py-2.5 px-2 font-medium text-blue-500 text-sm rounded-md">
                  Agregar al carrito
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
