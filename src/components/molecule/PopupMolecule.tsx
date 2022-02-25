import Bar from "../atoms/Bar";
import Delete from '../../public/icons/ellipse.svg'
import Popup from "reactjs-popup";
import { BarType } from "../../types";

export default function PopupMolecule() {
    const tapcontent:BarType[] = [
        {
            title: "Dynamics",
        },
        {
            title: "Kinamatics",
        },
        {
            title: "Motions",
        },
        {
            title: "Magnetism",
        },
    ]
    return (
        <div className="mt-12">
            {
                tapcontent.map((item:BarType, i:number) => {
                    return (
                        <Bar key={i} title={item.title} hasColor={i%2 ===0  && true}/>
                    )
                })
            }
       </div>
    )
}