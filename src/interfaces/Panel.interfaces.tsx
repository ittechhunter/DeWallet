import React from "react";

export interface ITab {
    id: number;
    name: string;
}

export interface ITabProps {
    tab: ITab;
    select: () => void;
    selected: boolean;
}

export interface ITabsProps {
    tabs: ITab[];
    tab: ITab;
    setTab: (tab: ITab) => void;
}

export interface ITabHookReturn {
    tabs: ITab[];
    selectedTab: ITab;
    selectTab: (tab: ITab) => void;
    isActive: (panelId: number) => boolean;
}

export interface ITabPanelsProps extends React.PropsWithChildren {
    tabHandler: ITabHookReturn;
    styles?: {
        mainContainer?: string;
        panelContainer?: string;
    }
}

export interface IPanelProps extends React.PropsWithChildren {
    styles?: string;
    active: boolean
}