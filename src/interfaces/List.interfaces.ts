export interface IToken {
  icon: string;
  name: string;
  price: {
    value: number;
    unit: string;
  };
  quantity: {
    value: number;
    unit: string;
  };
}

export interface IActivity {
  action: string;
  token: {
    icon: string;
    name: string;
    quantity: {
      value: number;
      unit: string;
    };
  };
  source: string;
  timestamp: number;
}

export interface IMonthlyActivities {
  month: string;
  activities: IActivity[];
}
