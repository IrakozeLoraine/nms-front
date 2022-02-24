import Bar from "../atoms/Bar";
import Delete from '../../public/icons/ellipse.svg'
import Popup from "reactjs-popup";

type popupType = {
    title: string
    icon: object
    swap?:boolean
}

export default function PopupMolecule() {
    const icon = [
        {
            title: "Dynamics",
            icon: { Delete },
        },
        {
            title: "Kinamatics",
            icon: { Delete },
        },
        {
            title: "Motions",
            icon: { Delete },
        },
        {
            title: "Magnetism",
            icon: { Delete },
        },
    ]
    return (
        <Popup children={undefined}></Popup>
    )
}