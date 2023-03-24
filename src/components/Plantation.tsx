import { FC } from "react";
import Plantation from "../interfaces/Plantation";
interface IPlantationProps {
    plantation: Plantation

};

export const PlantationComponent: FC<IPlantationProps> = (props) => {
    return (
        <div className=" bg-white shadow-lg px-5 py-10 my-5">
            <div className="">
                <div className="text-center text-2xl font-semibold text-yellow-400">{props.plantation.name}</div><div className="w-full flex justify-center">
                    <img src={props.plantation.image} alt="" />
                </div>
                <div className="text-center mt-5">Compra desde <br />
                    <span className="text-2xl font-semibold"> ${props.plantation.startingPrice}* </span>
                </div>
                <div className="text-center mt-5">Superficie: {props.plantation.plantationArea} m²</div>
                <div className="text-center mt-5">Al vender tu plantación obtienes:<br />
                    <span className="text-3xl font-semibold">${props.plantation.yield} <span className="text-base">MXN</span></span>
                </div>
                <div className="text-center mt-5 text-xs">*Rendimientos variables</div>
                <div className="flex justify-center mt-5"><a className="bg-white px-4 py-2 text-yellow-400 uppercase font-semibold text-lg border border-yellow-400 hover:text-white hover:bg-yellow-400 transition duration-300 ease-in-out text-center" href="https://api.whatsapp.com/send?phone=5215564931947&amp;text=Hola,%20%C2%BFMe%20puedes%20brindar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20MAGUEYTOKEN?%20Visite%20la%20p%C3%A1gina%20https://magueytoken.com/" target="_blank" rel="noopener">Quiero ser parte de</a>
                </div>
            </div>
        </div>
    );
}
