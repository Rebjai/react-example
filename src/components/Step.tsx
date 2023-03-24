import { FC } from "react";
export interface IStepProps {
    title: string
    image: string
    text: string
};

export const Step: FC<IStepProps> = (props) => {
    return (
        <div className="step w-full flex flex-col justify-center mb-10 items-center text-center">
            <img className="min-w-[2rem] max-w-[10vw]" src={props.image} alt="" />
            <h3 className="text-center text-gray-400 my-2 font-thin text-3xl md:text-5xl"> {props.title}</h3>
            <p>{props.text}</p>
        </div>
        
    );
}
