import { FC } from "react";
import { JumpingButton } from "./JumpingButton";

export const CtoBanner: FC = (props) => {
    return (
        <div className="w-full bg-yellow-400 py-5">
            <h2 className="text-center pt-5 text-lg md:text-2xl text-white font-medium uppercase px-5">SI HUBIERAS COMENZADO HACE 5 AÑOS HOY TENDRÍAS</h2>
            <p className="pt-5 text-center text-3xl md:text-5xl lg:text-6xl font-semibold text-black">$1,366,512<span className="text-xl font-normal">MXN</span></p>
            <div className="text-center mt-5">
                <JumpingButton primary>¡inicia hoy mismo!</JumpingButton>

            </div>
        </div>
    );
}
