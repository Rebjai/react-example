import { FC, ReactNode } from "react";
interface IJumpingButtonProps {
    children: ReactNode | null
    primary?: boolean
};

export const JumpingButton: FC<IJumpingButtonProps> = (props) => {
    return (
        <button className={(props.primary?'bg-yellow-400 text-white border-white hover:bg-white hover:text-yellow-400 text-yellow-400':'bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white text-yellow-400')+' px-4 py-2 border uppercase  transition duration-300 ease-in-out'}>{props.children}</button>
    );
}
