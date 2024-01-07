import ModalHeader from "./ModalHeader";
import MessageForm from "../Form/MessageForm";

interface IDashboardProps extends React.PropsWithChildren {
    styles?: string;
}

export default function DashboardModal(props: IDashboardProps) {
    return <div className={`w-full h-fit mt-auto mx-auto rounded-tl-[10px] rounded-tr-[10px] overflow-hidden lg:w-[800px] ${props.styles}`}>
        <ModalHeader />
        {props.children}
        <MessageForm />
    </div>
}