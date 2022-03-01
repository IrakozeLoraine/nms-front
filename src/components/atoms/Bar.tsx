import { BarType } from "../../types";
import Download from '../../public/icons/download.svg'
import { useState } from "react";


export default function Bar(props: BarType) {
    const [toggle, handleToggle] = useState<boolean>(false);
    return (
        <div className={`rounded-lg cursor-pointer mt-4 p-3  ${props.hasColor ? 'bg-gray-100' : 'bg-green-50'} `}
            onClick={
                () => {
               props.subnotes.length !== 0 ? handleToggle(!toggle) : alert("This is a subnote")
            }
        }
        >

            <div className="flex justify-between items-center">
                <div className="txt-primary">
                    {props.title}
                </div>
                <div className="mr-4" onClick={
                    () => {
                        
                    }
                }>
                    <img src={Download} alt="" className=""/>
                </div>
            </div>
            {/* Subnotes */}
            {/* {
                toggle && <div className="border ">
                    {
                        props.subnotes.map((item: string, i) => {
                            return (<Bar key={i} title={item} subnotes={[]} hasColor={props.hasColor} />)
                        })
                    }
                </div>
            } */}
            </div>
    )
}