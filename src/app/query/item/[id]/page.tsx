"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ItemInterface } from "@/lib/types/response-item";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Item() {
  const { id } = useParams();
  const stringId: string | string[] = id ? id : "no se";
  const [data, setData] = useState<ItemInterface>();
  const endpoint = `https://api.mercadolibre.com/items/${stringId}`;
  const [image, setImage] = useState<string>("");

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
  }, []);

  useEffect(() => {
    if(data?.pictures){
      setImage(data?.pictures[0].secure_url)
    }
  },[])


  if (data) {
    return (
      <div className="bg-graymercado flex-col items-center flex w-full ">
        <div className="w-[60vw]">
          <p className="text-blue-500 text-xs mt-3">
            Volver al listado Electrónica, Audio y Video Audio
          </p>
        </div>
        <div className="p-6 bg-whitemercado w-[1100px] rounded-sm shadow-sm grid-cols-3 grid gap-6">
          <div className="flex gap-4  ">
            <div className="flex flex-col  gap-1 rounded-md ">
              {data.pictures.map((img, index) => (
                <button
                  onMouseEnter={() => {
                    setImage(img.secure_url);
                  }}
                  key={img.id}
                  className="p-2 border border-zinc-300 rounded-md"
                >
                  <Image
                    src={img.secure_url}
                    width={90}
                    height={90}
                    priority
                    className="max-h-12 object-contain"
                    alt={`Imagen ${index} ${data.title}`}
                  />
                </button>
              ))}
            </div>
            <div aria-label="images ascesibles" >
              <Image
                src={image ? image : data.pictures[0].secure_url }
                alt={`Imagen de ${data?.title}`}
                width={500}
                height={500}
                className="max-h-fit"
              />
            </div>
          </div>
          <div className="py-4">
            <section className="mt-12">
              <h3 className="font-bold text-xl">{data?.title}</h3>
              <div aria-label="Puntuacion" className="flex my-5">
                <Icon
                  icon="mdi:star"
                  className="text-blue-500"
                  width="15"
                  height="15"
                />
                <Icon
                  icon="mdi:star"
                  className="text-blue-500"
                  width="15"
                  height="15"
                />
                <Icon
                  icon="mdi:star"
                  className="text-blue-500"
                  width="15"
                  height="15"
                />
                <Icon
                  icon="mdi:star"
                  className="text-blue-500"
                  width="15"
                  height="15"
                />
                <Icon
                  icon="mdi:star"
                  className="text-blue-500"
                  width="15"
                  height="15"
                />
              </div>
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
                  12 cuotas de $ {Number(data?.price / 12).toString().slice(0,7)} con 0% interes
                </span>{" "}
              </p>
              <button className="text-xs text-blue-500">
                Ver los medios de pago
              </button>
              <div className="text-sm" aria-label="Caracteristicas productos">
                <h3 className="font-semibold text-zinc-700 mt-12  ">
                  Lo que tienes que saber de este producto
                </h3>
                <div className="list-disc text-[13px] text-zinc-700">
                  {data.attributes.length > 12 ? (
                    <ul className="mt-4 list-disc flex flex-col gap-1.5 pl-4">
                      {data.attributes.slice(0, 11).map((attr) => (
                        <li key={attr.id}>
                          {attr.name} : {attr.value_name}
                        </li>
                      ))}
                      <p className="text-blue-500">Ver mas caracteristicas</p>
                    </ul>
                  ) : (
                    data.attributes.map((attr) => (
                      <li key={attr.id}>
                        {attr.name} : {attr.value_name}
                      </li>
                    ))
                  )}
                </div>
              </div>
            </section>
          </div>
          <article className="flex flex-col ">
            <div className="py-[25px] px-[16px] border border-zinc-200  rounded-md">
              <div className=" flex flex-col gap-5 ">
                <div>
                  <p className="text-sm">
                    <span className="text-green-500 font-semibold">
                      {data.shipping.free_shipping ? "Envio gratis " : `Envio`}
                    </span>
                    {""}
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
                    Cantidad <strong>: 1 unidad</strong> (
                    {data.initial_quantity}+ disponibles)
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
              <div className="text-sm mt-5">
                <div className="text-zinc-600 flex items-start gap-3">
                  <Icon icon="tabler:arrow-back" width="24" height="30" />
                  <p>
                    <span className="text-blue-500">Devolución gratis.</span>{" "}
                    Tienes 30 días desde que lo recibes.
                  </p>
                </div>
                <div className="text-zinc-600 flex items-start justify-between gap-3">
                  <Icon
                    icon="tabler:shield-check-filled"
                    width="44"
                    height="44"
                  />
                  <p>
                    <span className="text-blue-500">Compra protegida</span> se
                    abrirá en una nueva ventana, recibe el producto que
                    esperabas o te devolvemos tu dinero.
                  </p>
                </div>
                <div className="text-zinc-600 flex mt-4 items-start gap-1">
                  <Icon icon="tabler:lock-check" width="24" height="24" />
                  <p>12 meses de garantía de fábrica.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
