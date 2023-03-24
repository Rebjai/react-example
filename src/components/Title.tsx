import { Children, FC, PropsWithChildren, ReactNode } from "react";
interface ITitleProps {
    children: ReactNode | undefined
};

export const Title: FC<ITitleProps> = ({children}) => {
    return (
        <h1 className="text-5xl px-12 text-center my-14 justify-center text-yellow-400 font-semibold">
            {children}
        </h1>
    );
}
