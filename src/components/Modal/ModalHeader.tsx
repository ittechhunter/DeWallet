import NavBarIcon from "../../assets/icons/nav-bar-icon.svg";

export default function ModalHeader() {
    return <div className="flex justify-between px-4 py-3 bg-transparent">
        <span className="my-auto text-primary text-main-size cursor-pointer">Cancel</span>
        <div className="text-center my-auto">
            <h3 className="text-[#28282D] leading-none text-main-size font-bold">DeWallet</h3>
            <span className="text-[#818990] leading-none text-[0.85rem]">bot</span>
        </div>
        <img className="h-fit my-auto cursor-pointer" src={NavBarIcon} alt="navigation" />
    </div>
}