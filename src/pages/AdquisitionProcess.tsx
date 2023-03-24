import { FC } from "react";
import { JumpingButton } from "../components/JumpingButton";
import { IStepProps, Step } from "../components/Step";
import { Title } from "../components/Title";
import step1 from './../assets/AdquisitionProcess/step1.svg'
import step2 from './../assets/AdquisitionProcess/step2.svg'
import step3 from './../assets/AdquisitionProcess/step3.svg'
import step4 from './../assets/AdquisitionProcess/step4.svg'
import step5 from './../assets/AdquisitionProcess/step5.svg'
interface IWDWDProps { };

export const AdquisitionProcess: FC<IWDWDProps> = (props) => {
    const steps: IStepProps[] = [
        { title: '1', image: step1, text: 'Llena el formulario para que uno de nuestros account managers se contacte contigo y pueda ofrecerte un servicio personalizado.' },
        { title: '2', image: step2, text: 'Firma el manifiesto de interés con aviso de privacidad que te proporcionará tu account manager.' },
        { title: '3', image: step3, text: 'Espera un correo electrónico con una carta de aceptación como socio en la industria del maguey.' },
        { title: '4', image: step4, text: 'Revisa y firma tus documentos legales.' },
        { title: '5', image: step5, text: 'Realiza la transferencia electrónica correspondiente.' },
        { title: '6', image: step5, text: '¡Felicidades, eres dueño de tu rancho de maguey! A la brevedad recibirás tus documentos legales y tú bienvenida como magueyero en MAGUEYTOKEN ® .' },
    ]
    return (
        <section>
            <Title>Pasos para comprar</Title>
            <div className="grid md:grid-cols-2">

                {steps.map(step => (<Step image={step.image} title={step.title} text={step.text} key={step.title} />))}
            </div>
            <div className="text-center">
                <JumpingButton>Más información</JumpingButton>
            </div>
        </section>
    );
}
