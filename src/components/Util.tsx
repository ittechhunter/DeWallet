interface ISectionProps extends React.PropsWithChildren {
    styles?: string;
}

export function Section(props: ISectionProps) {
    return <div className={`w-full py-2 ${props.styles}`}>
        {props.children}
    </div>
}