import { FC } from "react";

export interface IOption {
    text: string
    value: any
}
interface IInputProps {
    name: string,
    label: string,
    required?: boolean
    options: IOption[]
};

export const RadioInput: FC<IInputProps> = (props) => {
    return (
        <div className="my-3">
            <label htmlFor={props.name}>{props.label}{props.required ? <span className="text-red-600 my-2" >*</span> : null}</label>
            <div className="flex flex-col">
                {props.options.map(option => (<div className="radio-option" key={option.value}>
                    <input type="radio" name={props.name} id={option.value} value={option.value} />
                    <label htmlFor={option.value}>{option.text}</label>
                </div >))}
            </div>


        </div>
    );
}
