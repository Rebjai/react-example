import { FC } from "react";
interface IInputProps {
    name: string,
    label: string,
    required?: boolean
};

export const TextInput: FC<IInputProps> = (props) => {
    return (
        <div className="flex flex-col my-3">
            <label htmlFor={props.name}>{props.label}{props.required ? <span className="text-red-600 my-2" >*</span> : null}</label>
            <input type="text" name={props.name} id={props.name} required={props.required} className="rounded-sm bg-slate-200 max-w-[300px] p-2 border border-slate-400" />

        </div>
    );
}
