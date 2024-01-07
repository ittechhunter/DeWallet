import DepositIcon from "../../assets/icons/deposit-icon.svg";
import WithdrawIcon from "../../assets/icons/withdraw-icon.svg";

import { Section } from "../Util";
import { Flex, Heading, Label } from "./Utils";

import { formatTimestamp } from "../../utils/utils";

import { IActivity, IMonthlyActivities } from "../../interfaces/List.interfaces";

export function Activity(props: { activity: IActivity }) {
    return <Section styles="flex !py-0">
        <div className="relative mr-3 w-fit h-fit">
            <img
                src={props.activity.token.icon}
                alt={props.activity.token.name}
                className="w-[40px] sm:w-[50px]"
            />
            <img
                src={props.activity.action === "Withdraw" ? WithdrawIcon : DepositIcon}
                alt={props.activity.action}
                className="w-[15px] sm:w-auto absolute bottom-0 right-0"
            />
        </div>
        <div className="w-full my-auto">
            <Flex>
                <Heading
                    text={props.activity.action}
                />
                <Heading
                    text={`${props.activity.action === "Withdraw" ? "-" : "+"}${props.activity.token.quantity.value.toLocaleString("en-US")} ${props.activity.token.quantity.unit}`}
                    styles={`${props.activity.action === "Deposit" ? "!text-[#00B83E]" : ""}`}
                />
            </Flex>
            <Flex styles="mt-1">
                <Label text={`${props.activity.action === "Withdraw" ? "To" : "From"} ${props.activity.source}`} />
                <Label text={formatTimestamp(props.activity.timestamp)} />
            </Flex>
        </div>
    </Section>
}

export default function MonthlyActivity(props: { monthlyActivity: IMonthlyActivities }) {
    return <div className="w-full">
        <h2 className="text-main-size font-[500]">{props.monthlyActivity.month}</h2>
        <div className="grid gap-6 my-6">
            {props.monthlyActivity.activities.map((activity, index) => <Activity key={index} activity={activity} />)}
        </div>
    </div>
}
