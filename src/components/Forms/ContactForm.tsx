import { FC } from "react";
import { IOption, RadioInput } from "./RadioInput";
import { TextInput } from "./TextInput";

export const ContactForm: FC = (props) => {
    const previousInvestmentOptions: IOption[] = [
        { value: 1, text: 'SI' },
        { value: 2, text: 'NO' },
    ]
    const previousInvestmentRangesOptions: IOption[] = [
        { value: 1, text: '$138,000 - $590,000' },
        { value: 2, text: '$590,000 - $1,000,000' },
        { value: 3, text: 'más de $1,000,000' },
    ]
    const tentativeInvestmentDateOptions: IOption[] = [
        { value: 1, text: '1-3 Meses' },
        { value: 2, text: '3-6 Meses' },
        { value: 3, text: 'Mas de 6 meses' },
    ]
    return (
        <form className="text-center">
            <TextInput required={true} label="First Name" name="firstname" />
            <TextInput required={true} label="Last Name" name="lastname" />
            <TextInput required={true} label="Phone Number" name="phone" />
            <TextInput required={true} label="Email" name="email" />
            <RadioInput required label="¿Haz invertido antes?" name="previous-investments" options={ previousInvestmentOptions} />
            <RadioInput required label="Rango probable de inversión" name="investment-range" options={ previousInvestmentRangesOptions} />
            <RadioInput required label="Fecha probable de inversión" name="tentative-investments" options={ tentativeInvestmentDateOptions} />
            <input type="submit" className="bg-yellow-400 px-3 py-2" value="Enviar"></input>
        </form>
    );
}
