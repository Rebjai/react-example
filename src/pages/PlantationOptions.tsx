import { FC } from "react";
import { PlantationComponent } from "../components/Plantation";
import plantation1 from "../assets/Plantations/plantation1.webp"
import plantation2 from "../assets/Plantations/plantation2.webp"
import plantation3 from "../assets/Plantations/plantation3.webp"
import Plantation from "../interfaces/Plantation";
interface IPlantationOptionsProps { };

export const PlantationOptions: FC<IPlantationOptionsProps> = (props) => {
    const plantations: Plantation[] = [
        {
            id: 1,
            name: 'Macrolote',
            startingPrice: 138000,
            plantationArea: 2000,
            yield: 273302,
            image: plantation1
        },
        {
            id: 2,
            name: 'Hectárea',
            startingPrice: 590000,
            plantationArea: 10000,
            yield: 1366512,
            image: plantation2
        },
        {
            id: 3,
            name: 'Megaplantación',
            startingPrice: 5450000,
            plantationArea: 100000,
            yield: 13665120,
            image: plantation3
        },
    ]
    return (
        <section>
            <div className="grid grid-cols-2">
                {
                    plantations.map(plantation => <PlantationComponent plantation={plantation} key={plantation.id} />)
                }
            </div>

        </section>
    );
}
