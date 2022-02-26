import Bar from "../atoms/Bar";
import Delete from '../../public/icons/ellipse.svg'
import Popup from "reactjs-popup";
import { BarMoleculeType, BarType } from "../../types";
import PopupMolecule from "../molecule/PopupMolecule";

export default function BarsHolder() {
    const tapcontent: BarMoleculeType[] = [
        {
            courseTitle: "Physics",
            notes: [
                {
                    mainNote: "Kinematics",
                    subnotes:["Graph","Exercises"]
                },
                {
                    mainNote: "Dynamics",
                    subnotes: ["Momentum", "Exercises"]
                }
            ]
        },
        {
            courseTitle: "Maths",
            notes: [
                {
                    mainNote: "Kinematics",
                    subnotes: ["Graph", "Exercises"]
                },
                {
                    mainNote: "Dynamics",
                    subnotes: ["Momentum", "Exercises"]
                }
            ]
        },


    ]
    return (
        <div className="mt-12">
            {
                tapcontent.map((item:BarMoleculeType, i: number) => {
                    return (
                    <PopupMolecule key={i} courseTitle={item.courseTitle} notes={item.notes}/>
                    )
                })
            }
        </div>
    )
}