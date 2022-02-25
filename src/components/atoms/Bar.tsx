import { BarType } from "../../types";
import Delete from '../../public/icons/ellipse.svg'


export default function Bar(props:BarType) {
    return (
        <div className={`flex mt-4 p-3 justify-between items-center ${props.hasColor ? 'bg-gray-100' : 'bg-green-50'}`}>
            <div>
                {props.title}
            </div>
            <div>
                <img src={Delete} alt=""/>
            </div>
            </div>
    )
}