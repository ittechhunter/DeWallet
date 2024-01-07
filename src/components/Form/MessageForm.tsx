import MenuBarIcon from "../../../src/assets/icons/bar-icon.svg";
import AttachIcon from "../../../src/assets/icons/attach-icon.svg";
import VoiceIcon from "../../../src/assets/icons/voice-icon.svg";
import ButtonIcon from "../../../src/assets/icons/button-icon.svg";
import Button from "./Button";

export default function MessageForm() {
    return <div className="flex bg-[#F1F1F2] justify-between w-full px-1 py-2 my-auto">
        <Button
            icon={MenuBarIcon}
            name="Menu"
            styles="!px-4 !py-1 !mr-2 bg-primary text-white"
            iconStyles="sm:!mr-1"
            textStyles="!font-[400]"
        />
        <div className="flex">
            <img src={AttachIcon} alt="attach" className="w-6 sm:w-auto" />
            <div className="p-2 mx-2 flex bg-white rounded-[25px]">
                <input className="text-[0.9rem] w-full pl-2 flex-1 bg-transparent outline-none placeholder:text-[grey]" placeholder="Message" />
                <img className="w-4 sm:w-fit" src={ButtonIcon} alt="button" />
            </div>
            <img src={VoiceIcon} alt="voice" className="w-6 sm:w-auto" />
        </div>
    </div>
}