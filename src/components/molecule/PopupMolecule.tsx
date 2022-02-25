import Bar from "../atoms/Bar";
import Delete from '../../public/icons/ellipse.svg'
import Popup from "reactjs-popup";
import { BarMoleculeType, BarType } from "../../types";

export default function PopupMolecule(props:BarMoleculeType) {
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
            <h1 className="text-gray-300 uppercase font-bold">{ props.courseTitle}</h1>
            {
                props.notes.map((item:string, i:number) => {
                    return (
                        <Bar key={i} title={item} hasColor={i%2 ===0  && true}/>
                    )
                })
            }
       </div>
    )
}