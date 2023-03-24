import { Children, FC, PropsWithChildren, ReactNode } from "react";
import { Title } from "../components/Title";
import slider1 from "./../assets/slider-1.webp"

export const MainSection: FC = () => {
    return (
        <main >
            <Title>¡HAZTE DUEÑO DE TU RANCHO DE MAGUEY!</Title>
            <h2 className="text-2xl text-black text-center mb-10">
                ¿Qué es <span className="text-yellow-400 uppercase font-bold"> MAGUEYTOKEN &reg; ?</span>
            </h2>
            <p className="leading-8 tracking-wide mb-10">Somos un modelo de negocio encargado del incremento de tu capital mediante la siembra, cuidado y venta de Maguey Espadín <span className="font-thin italic">(Agave Angustifolia Haw)</span>, comprometidos con el desarrollo y bienestar de las comunidades, incrementando el nivel de vida, económico, personal y familiar.</p>
            <div id="slider">
                <img src={slider1} alt=""/>
            </div>
        </main>
    );
}
