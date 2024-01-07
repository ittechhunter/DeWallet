import { useRef, useState } from "react";
import { ITab, ITabHookReturn } from "../interfaces/Panel.interfaces";

export default function useTab(tabs: ITab[]): ITabHookReturn {
    const tabsRef = useRef(tabs);
    const [selectedTab, setSelectedTab] = useState<ITab>(tabs[0]);

    return {
        tabs: tabsRef.current,
        selectTab: (tab: ITab) => setSelectedTab(tab),
        selectedTab,
        isActive: (id: number) => selectedTab.id === id
    }
}