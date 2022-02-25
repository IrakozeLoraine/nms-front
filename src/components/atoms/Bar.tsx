import { BarType } from "../../types";
import Delete from '../../public/icons/ellipse.svg'
import { useState } from "react";


export default function Bar(props: BarType) {
    const [toggle, hangleToggle] = useState<boolean>(false)
    return (
        <div className={`cursor-pointer mt-4 p-3  ${props.hasColor ? 'bg-gray-100' : 'bg-green-50'} `}
            onClick={
                () => {
               props.subnotes.length !== 0 ? hangleToggle(!toggle) : alert("This is a subnote")
            }
        }
        >

            <div className="flex justify-between items-center">
                <div>
                    {props.title}
                </div>
                <div>
                    <img src={Delete} alt="" />
                </div>
            </div>
            {/* Subnotes */}
            {
                toggle && <div className="border">
                    {
                        props.subnotes.map((item: string, i) => {
                            return (<Bar key={i} title={item} subnotes={[]} hasColor={props.hasColor} />)
                        })
                    }
                </div>
            }
            </div>
    )
}