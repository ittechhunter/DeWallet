import { Section } from "../Util";

import { ITabsProps, ITabProps, IPanelProps, ITabPanelsProps } from "../../interfaces/Panel.interfaces";

function Tab(props: ITabProps) {
  return <span
    className={`w-full p-2 my-auto rounded-md text-center text-[0.9rem] leading-2 cursor-pointer ${props.selected ? "!bg-white shadow-tab font-bold" : "bg-transparent"}`}
    onClick={props.select}
  >
    {props.tab.name}
  </span>
}

function Tabs(props: ITabsProps) {
  return (
    <div className="flex p-1 rounded-lg bg-[#747480]/[8%]">
      {props.tabs.map(tab => <Tab
        key={tab.id}
        tab={tab}
        select={() => props.setTab(tab)}
        selected={tab.id === props.tab.id}
      />)}
    </div>
  );
}

export function Panel(props: IPanelProps) {
  return <div className={`hidden w-full ${props.active ? "!block" : ""} ${props.styles}`}>
    {props.children}
  </div>
}

export function TabPanel(props: ITabPanelsProps) {
    return <Section styles={`px-2 !py-0 ${props.styles?.mainContainer}`}>
        <Tabs
            tab={props.tabHandler.selectedTab}
            setTab={props.tabHandler.selectTab}
            tabs={props.tabHandler.tabs}
        />
        <div className={`overflow-y-auto hide-scrollbar ${props.styles?.panelContainer}`}>
            {props.children}
        </div>
    </Section>
}