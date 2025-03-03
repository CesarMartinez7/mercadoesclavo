"use client";



import ImagenEnvioGratis from "@/ui/image/envio.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Response } from "@/lib/types/response";
import SkeletonItem1 from "@/components/skeletons/item-skeleton";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "@/components/foooter";

const accessToken = process.env.ASCES_TOKEN;

export default function Home() {
  const [data, setData] = useState<Response>();
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

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
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="bg-gradient-to-t z-30 relative w-full h-[50vh]">
      <div className="flex items-end">
        <Image
          src={ImagenEnvioGratis}
          className="w-full h-[50vh] object-cover"
          alt="Imagen de Envío Gratis"
        />
      </div>
      <div className="relative flex justify-end bg-gradient-to-t from-white/100 to-transparent inset-0"></div>
      <div className="w-full grid place-content-center relative">
        <div className="grid place-content-center w-[1100px] gap-12">
          <div className="flex justify-between gap-5">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonItem1 key={index} /> // Renderiza el Skeleton mientras carga
                ))
              : data?.results.slice(5, 10).map((i) => (
                  <Link
                    href={`/query/item/${i.id}`}
                    key={i.id}
                    className="p-3 border w-full grid shadow-sm rounded-md"
                  >
                    <div className="w-full">
                      <Image
                        className="w-full"
                        src={`http://http2.mlstatic.com/D_${i.thumbnail_id}-O.jpg`}
                        width={200}
                        height={302}
                        alt={`Imagen de ${i.title}`}
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <p className="text-xs w-full h-[29px] overflow-hidden overflow-ellipsis ">
                        {i.title}
                      </p>
                      {i.original_price ? (
                        <p className="text-zinc-600 text-xs line-through">
                          {" "}
                          $ {i.original_price?.toLocaleString()}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="font-semibold">
                        $ {i.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-500 font-bold">
                        {i.shipping.free_shipping
                          ? "Envío gratis"
                          : i.shipping.benefits}
                      </p>
                    </div>
                  </Link>
                ))}
          </div>
          <div className="bg-whitespace border p-5 flex-shrink-0 rounded-md shadow-md">
            <h3 className="font-semibold text-lg">
              Inspirado en lo último que viste
            </h3>
            <ul className="flex relative flex-shrink-0 p-3 w-full overflow-x-scroll gap-2">
              <div className="absolute inset-0 z-0 w-full flex justify-between h-full items-center">
                <button title="Go to left" className="px-3 py-1 z-10 flex items-center bg-whitemercado h-12 border rounded-full">
                  <Icon
                    icon="mdi:keyboard-arrow-left"
                    width="20"
                    height="20"
                    className="text-blue-500"
                  />
                </button>
                <button title="Go to right" className="px-3 py-1 bg-whitemercado flex items-center h-12  rounded-full border ">
                  <Icon
                    icon="mdi:keyboard-arrow-right"
                    width="20"
                    height="20"
                    className="text-blue-500"
                  />
                </button>
              </div>
              {loading
                ? Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonItem1 key={index} />
                  ))
                : data?.results.slice(0, 12).map((item) => (
                    <Link
                      href={`/query/item/${item.id}`}
                      className="flex-shrink-0 border rounded p-2 max-w-[180px]"
                      key={item.id}
                    >
                      <div className="w-full">
                        <Image
                          width={200}
                          height={100}
                          priority
                          src={`http://http2.mlstatic.com/D_${item.thumbnail_id}-O.jpg`}
                          alt={`Imagen de ${item.title}`}
                          className="w-full"
                        />
                      </div>
                      <p className="text-xs h-[29px] overflow-hidden overflow-ellipsis w-full">
                        {item.title}
                      </p>
                      {item.original_price ? (
                        <p className="text-zinc-600 text-xs line-through">
                          {" "}
                          $ {item.original_price?.toLocaleString()}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="font-semibold">
                        $ {item.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-500">{item.shipping.free_shipping ? "Envio gratis" : ""}</p>
                    </Link>
                  ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
