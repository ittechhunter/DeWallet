interface IButtonProps {
    name: string;
    icon?: string;
    styles?: string;
    iconStyles?: string;
    textStyles?: string;
};

export default function Button(props: IButtonProps) {
    return <button className={`flex justify-center p-3 rounded-[50px] ${props.styles}`}>
        <img className={`w-5 my-auto sm:mr-2 ${props.iconStyles}`} src={props.icon} alt={props.name} />
        <span className={`hidden my-auto text-[1rem] font-[600] sm:block ${props.textStyles}`}>{props.name}</span>
    </button>
}