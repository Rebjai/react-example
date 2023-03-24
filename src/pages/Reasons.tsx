import { FC } from "react";
import reason1 from './../assets/oportunidad.9b7a0309.svg'
import reason2 from './../assets/comprar.a6b7ae75.svg'
export const Reasons: FC = (props) => {
    return (
        <div className="w-full md:grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
            <div className="text-yellow-400" >
                <div className="w-full flex justify-center mb-5">
                    <img src={reason1} className="w-20" alt="" />
                </div>
                <div className="text-center text-4xl font-bold uppercase">Modelo único integral</div>
                <div className="text-center text-lg">Sé parte de</div>
                <div className="mt-5 text-justify text-black md:px-10 lg:px-20">Conviértete en dueño de una plantación de Maguey en Oaxaca, estado originario del mezcal y sus derivados. Visita el Rancho MAGUEYTOKEN ® y conoce por medio de un extraordinario tour recreativo y temático el crecimiento de su plantación.
                </div>
            </div>
            <div className="text-yellow-400" >

                <div className="w-full flex justify-center mb-5">
                    <img src={reason2} className="w-20" alt="" />
                </div>
                <div className="text-center text-4xl font-bold uppercase px-2">¿POR QUÉ FORMAR PARTE?</div>
                <div className="text-center text-lg">Alta demanda de maguey</div>
                <div className="mt-5 text-black text-justify md:px-10 lg:px-20">Las bebidas destiladas a partir del maguey se han vuelto tendencia internacional y nacional, provocando una alta demanda de producción en la industria, convirtiéndose en una gran oportunidad de negocio.
                </div>
            </div>
        </div>
    );
}
4