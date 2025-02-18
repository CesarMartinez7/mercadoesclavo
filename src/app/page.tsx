"use client";

import ImagenEnvioGratis from "@/ui/image/envio.webp";
import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-gradient-to-t z-30 relative w-full h-[50vh]">
      <div className="">
        <Image src={ImagenEnvioGratis} className="w-full h-[50vh] object-cover" alt="Imageb de envio Gratis"/>
      </div>
      <div className="absolute bg-gradient-to-t from-white to-transparent inset-0 ">
      </div>
    </main>
  );
}
