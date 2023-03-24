import { FC } from "react";
import { JumpingButton } from "../components/JumpingButton";
import { IStepProps, Step } from "../components/Step";
import { Title } from "../components/Title";
import step1 from './../assets/WDYD/step-1.svg'
import step2 from './../assets/WDYD/step-2.svg'
import step3 from './../assets/WDYD/step-3.svg'
import step4 from './../assets/WDYD/step-4.svg'
import step5 from './../assets/WDYD/step-5.svg'
interface IWDWDProps { };

export const WDWD: FC<IWDWDProps> = (props) => {
    const steps: IStepProps[] = [
        { title: '1', image: step1, text: 'Seleccionamos las mejores plantas y material genético para el crecimiento y desarrollo de tu plantación de maguey' },
        { title: '2', image: step2, text: 'Identificamos tu polígono de plantación el cual fue previamente analizado por el uso de tierra bajo un análisis ambiental y social.' },
        { title: '3', image: step3, text: 'Sembramos el número de plantas de tu compra mediante los procesos establecidos del paquete tecnológico, el cual permitirá cosechar en un mínimo de 5 años y con un alto índice de grados brix.' },
        { title: '4', image: step4, text: 'Supervisamos y monitoreamos el crecimiento de tus plantas, asegurándonos de tener el mejor cuidado con nuestro equipo técnico.' },
        { title: '5', image: step5, text: 'Cosechamos tus plantas de maguey llevando el proceso de la jima en tiempo y forma para preparar la venta de tus plantas de maguey pasando por una báscula industrial certificada para garantizar el peso neto oficial de las piñas.' },
    ]
    return (
        <section>
            <Title>Qué es lo que hacemos?</Title>
            {steps.map(step => (<Step image={step.image} title={step.title} text={step.text} key={step.title} />))}
            <div className="text-center">
                <JumpingButton>Más información</JumpingButton>
            </div>
        </section>
    );
}
