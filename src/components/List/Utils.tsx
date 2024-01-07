interface IProps {
    text: string;
    styles?: string;
}
interface IFlexProps extends React.PropsWithChildren {
    styles?: string;
}

export function Flex(props: IFlexProps) {
    return <div className={`w-full flex justify-between ${props.styles}`}>
        {props.children}
    </div>
}
export function Heading(props: IProps) {
    return <h2 className={`text-[0.9rem] font-[600] sm:text-main-size ${props.styles}`}>{props.text}</h2>
}

export function Label(props: IProps) {
    return <span className={`text-[#8E8E93] text-[0.7rem] sm:text-[0.9rem] ${props.styles}`}>{props.text}</span>
}
