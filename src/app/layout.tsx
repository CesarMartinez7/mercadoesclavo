import "./globals.css";
import Navbar from "@/components/navbar";
import { Ubuntu } from "next/font/google";
import Head from "next/head";

const ubuntu = Ubuntu({ weight: "300", subsets: ["latin"] });

const Categorias: string[] = [
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
  "Tiendas oficiales",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className={`${ubuntu.className} antialiased w-full h-full relative`}>
        <Navbar categories={Categorias} />
        {children}
      </body>
    </html>
  );
}
