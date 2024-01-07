import useTab from "../hooks/useTab";

import DashboardModal from "../components/Modal/DashboardModal";
import { Section } from "../components/Util";
import Button from "../components/Form/Button";
import { Panel, TabPanel } from "../components/Panel/Tabs";
import Token from "../components/List/Token";
import MonthlyActivity from "../components/List/Activity";

import UpIcon from "../assets/icons/up-icon.svg";
import DownIcon from "../assets/icons/down-icon.svg";
import UpDownIcon from "../assets/icons/up-down-icon.svg";

import { dashboardTabs, monthlyActivities, tokens } from "../utils/data";

export default function Dashboard() {

    const tabHandler = useTab(dashboardTabs);

    return <DashboardModal styles='gradient-bg '>
        <Section styles="!pt-5 !pb-7 text-center">
            <h1 className="text-SFProRegular text-[2rem] font-bold">$2,934<span className="text-[1.5rem] text-[#28282D]/50">.32</span></h1>
            <span className="text-[#8E8E93] text-[0.9rem]">TjkLk...5FGs</span>
        </Section>
        <div className="pt-4 rounded-tr-3xl rounded-tl-3xl bg-white">
            <Section styles="px-2  lg:grid lg:grid-cols-2 lg:gap-2 lg:mb-4">
                <div className="flex mb-4 gap-2 lg:mb-0">
                    <Button
                        icon={UpIcon}
                        name={"Deposit"}
                        styles="flex-1 bg-primary text-white"
                    />
                    <Button
                        icon={DownIcon}
                        name={"Send"}
                        styles="flex-1 bg-[#007AFF]/10 text-primary"
                    />
                    <Button
                        icon={UpDownIcon}
                        name={"Buy"}
                        styles="flex-1 sm:flex-none sm:w-fit bg-[#007AFF]/10 text-primary"
                    />
                </div>
                <Button
                    icon={UpIcon}
                    name={"Buy DFC"}
                    styles={`w-full mb-2 bg-primary text-white lg:mb-0 ${tabHandler.selectedTab.id === 1 ? "" : "hidden"}`}
                    iconStyles="!mr-2"
                    textStyles="!block"
                />
            </Section>
            <TabPanel
                tabHandler={tabHandler}
                styles={{
                    panelContainer: "h-[220px]"
                }}
            >
                <Panel styles="py-2" active={tabHandler.isActive(1)}>
                    {tokens.map((token, index) => <Token key={index} token={token} />)}
                </Panel>
                <Panel styles="pt-6" active={tabHandler.isActive(2)}>
                    {monthlyActivities.map((monthlyActivity, index) => <MonthlyActivity key={index} monthlyActivity={monthlyActivity} />)}
                </Panel>
            </TabPanel>
        </div>
    </DashboardModal>
}