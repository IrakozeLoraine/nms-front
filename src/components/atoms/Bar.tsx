type BarType = {
    title: string
    icon: object
    hasColor?: boolean
}

export default function Bar(props:BarType) {
    return (
        <div className={`${props.hasColor ? 'bg-gray-500' : 'bg-green-100'}`}>
            ${props.title && 'Kinematics'}
        </div>
    )
}