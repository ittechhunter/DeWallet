import USDTIcon from "../../src/assets/icons/USDT.svg";
import TONIcon from "../../src/assets/icons/TON.svg";
import BTCIcon from "../../src/assets/icons/BTC.svg";

import {
  IMonthlyActivities,
  IToken,
} from "../interfaces/List.interfaces";

export const tokens: IToken[] = [
  {
    icon: TONIcon,
    name: "Toncoin",
    quantity: {
      value: 1253,
      unit: "TON",
    },
    price: {
      value: 2889.32,
      unit: "$",
    },
  },
  {
    icon: BTCIcon,
    name: "Bitcoin",
    quantity: {
      value: 100,
      unit: "BTC",
    },
    price: {
      value: 14.32,
      unit: "$",
    },
  },
  {
    icon: USDTIcon,
    name: "Tether",
    quantity: {
      value: 12.43,
      unit: "USDT",
    },
    price: {
      value: 12.46,
      unit: "$",
    },
  },
  {
    icon: TONIcon,
    name: "Toncoin",
    quantity: {
      value: 1253,
      unit: "TON",
    },
    price: {
      value: 2889.32,
      unit: "$",
    },
  },
  {
    icon: BTCIcon,
    name: "Bitcoin",
    quantity: {
      value: 100,
      unit: "BTC",
    },
    price: {
      value: 14.32,
      unit: "$",
    },
  },
  {
    icon: USDTIcon,
    name: "Tether",
    quantity: {
      value: 12.43,
      unit: "USDT",
    },
    price: {
      value: 12.46,
      unit: "$",
    },
  },
];

export const monthlyActivities: IMonthlyActivities[] = [
  {
    month: "August",
    activities: [
      {
        action: "Withdraw",
        token: {
          name: "Toncoin",
          icon: TONIcon,
          quantity: {
            value: 9,
            unit: "TON",
          },
        },
        source: "TjkLk...5FGs",
        timestamp: new Date().getTime(),
      },
      {
        action: "Deposit",
        token: {
          name: "Toncoin",
          icon: TONIcon,
          quantity: {
            value: 9,
            unit: "TON",
          },
        },
        source: "mutantape.ton",
        timestamp: new Date().getTime(),
      },
    ],
  },
  {
    month: "July",
    activities: [
      {
        action: "Deposit",
        token: {
          name: "Tether",
          icon: USDTIcon,
          quantity: {
            value: 4.5,
            unit: "USDT",
          },
        },
        source: "mutantape.ton",
        timestamp: new Date().getTime(),
      },
      {
        action: "Deposit",
        token: {
          name: "Bitcoin",
          icon: BTCIcon,
          quantity: {
            value: 0.005,
            unit: "BTC",
          },
        },
        source: "mutantape.ton",
        timestamp: new Date().getTime(),
      },
    ],
  },
];

export const dashboardTabs = [
  { name: "Tokens", id: 1 },
  { name: "Activities", id: 2 },
];
