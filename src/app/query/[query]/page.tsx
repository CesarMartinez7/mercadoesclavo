"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Loading from "./loading";
import Image from "next/image";
import UseProducts from "@/hooks/useProducts";


// Puedo utiilizar el metodo conctt con el antiguo estado y actualizarlo asi mas falcil, inicializo el estado con un string y despues concateno todo igual a la la suspension de array de ...

// Hay que llevarlo a la practica sobre todo 

export default function Query() {
  const { filter, data, isLoading, error, setFilter } = UseProducts();

  if (error) <Error />;

  if (isLoading) return <Loading />;

  if (data?.results.length === 0) {
    <div>No hay resultados de tu producto</div>;
  }

  return (
    <main className="w-full gridCsi mt-12 ">
      <div className="w-[250px] text-zinc-700 px-6 ">
        <div aria-label="Resultados y filtros" className="mb-4 ">
          <p className="font-medium text-lg">
            {data?.query.slice(0, 1).toLocaleUpperCase()}
            {data?.query.slice(1)}
          </p>
          
          <p className="text-xs font-light">
            {data?.paging.total.toLocaleString()} <span>Resultados</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {data?.available_filters.map((item) => (
            <div key={item.id}>
              <div>
                <h3 className="text-sm font-medium mb-2">{item.name}</h3>
                <ul className="flex flex-col gap-1 ">
                  {item.values.map((value) => (
                    <li
                      title={`filter ${value.name}`}
                      key={value.id}
                      onClick={() => {
                        setFilter(`&${filter}${value.id}=${value.results}`);
                      }}
                      className="text-xs text-left text-graytext "
                    >
                      <button>
                        {value.name}{" "}
                        <span>({value.results.toLocaleString()})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* // Mapeo de items de productos */}
      <ul className="flex flex-shrink-0 w-[70vw] lg:w-[46vw]  flex-col">
        {data?.results.map((item) => {
          const isPatrocinado =
            item.official_store_name === undefined || "" ? false : true;
          return (
            <Link
              href={`item/${item.id}`}
              key={item.id}
              className="flex flex-shrink-0 justify-between h-fit max-h-[250px] rounded-xs border-b p-3 bg-white min-w-[300px]   "
            >
              <div className="w-[350px] ">
                <Image
                  priority
                  width={500}
                  height={490}
                  src={`http://http2.mlstatic.com/D_${item.thumbnail_id}-O.jpg`}
                  alt={`Imagen${item.title}`}
                  className="w-full object-cover h-full  rounded-md"
                />
              </div>
              <div className="w-full py-6 px-2 flex-grow-0">
                <div>
                  <h3 className="font-light text-xl text-zinc-800 mt-3">
                    {item.title} {String(isPatrocinado)}
                  </h3>
                  <div className="font-light text-sm text-zinc-800 text-[12px] flex">
                    {isPatrocinado ? (
                      <p className="text-[13px] flex items-center gap-1.5">
                        Por {item.official_store_name}{" "}
                        <Icon
                          icon="mdi:verified"
                          width="15"
                          height="15"
                          className="text-blue-500"
                        />
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex justify-between w-96">
                  <p className="grayscale text-[13px] text-opacity-45 line-through text-zinc-800">
                    <span>{`${
                      item.sale_price.regular_amount?.toString(10).length > 0
                        ? ` $ ${item.sale_price.regular_amount?.toLocaleString()}`
                        : ""
                    }`}</span>
                  </p>
                  <div className="flex ">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Icon
                        key={i}
                        icon="mdi:star"
                        className="text-blue-500"
                        width="15"
                        height="15"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 w-[60%] ">
                  <div className="flex items-end gap-1">
                    <h4 className="text-2xl">
                      $ {item.price.toLocaleString()}
                    </h4>
                    <p className="text-green-500 text-xs mb-1 font-normal">
                      OFF
                    </p>
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
                <div className="flex flex-shrink-0 justify-end text-graytext text-xs">
                  {isPatrocinado ? (<li>{"Promocionado"}</li>)  : <li></li>} 
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}

const Error = () => {
  return <div>Error</div>;
};
