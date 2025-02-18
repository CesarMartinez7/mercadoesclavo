export default function Footer (){
    return(
        <div className="bg-whitemercado border-t-2 mt-3 flex flex-col gap-2 px-11 lg:px-96  ">
            <div className="flex flex-auto text-xs font-light gap-3 pt-5 ">
                <div className="whitespace-nowrap">Trabaja con nosotros</div>
                <div className="whitespace-nowrap">Terminos y condiciones</div>
                <div className="whitespace-nowrap">Promociones</div>
                <div className="whitespace-nowrap">Como cuidamos tu privacidad</div>
                <div className="whitespace-nowrap">Accesibilidad</div>
                <div className="whitespace-nowrap">Ayuda</div>
                <div className="whitespace-nowrap">Navidad</div>
                <div className="whitespace-nowrap">www.sic.gov.co</div>
            </div>
            <div className=" text-zinc-500 text-xs">
                <p>Copyright © 1999-2025 MercadoLibre Colombia LTDA.</p>
                <p>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</p>
            </div>
        </div>
    )
}