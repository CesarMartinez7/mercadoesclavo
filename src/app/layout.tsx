import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/foooter";


const Categorias : string[] = [
  "Vehículos",
  "Supermercado",
  "Tecnología",
  "Electrodomésticos",
  "Hogar y Muebles",
  "Deportes y Fitness",
  "Belleza y Cuidado Personal",
  "Accesorios para Vehículos",
  "Herramientas",
  "Construcción",
  "Inmuebles",
  "Compra Internacional",
  "Moda",
  "Juegos y Juguetes",
  "Bebés",
  "Productos Sustentables",
  "Más vendido",
  "Salud y Equipamiento Médico",
  "Industrias y Oficinas",
  "Servicios",
  "Tiendas oficiales"
];


export const metadata: Metadata = {
  title: "Mercado Libre",
  icons : "./mercadologo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="./mercadologo.png" type="image/x-icon" />
      <body
        className={` antialiased w-full h-full`}
      >
        <Navbar categories={Categorias} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
