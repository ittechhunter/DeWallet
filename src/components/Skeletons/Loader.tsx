export default function Loader(props: { styles?: string }) {

    return <div className={`skeleton-loading bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-[25px] ${props.styles}`}>

    </div>
}