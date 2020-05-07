export type State = {
  noTransactionPerMonth: number;
  averageTransactionPerMonth: number;
  percentACH: number;
  percentVisa: number;
  percentMastercard: number;
  percentDiscover: number;
  percentAMEX: number;
};

type Reducer = (state: State, action: Action) => State;

export type Action =
  | { type: "setNoTransactionPerMonth"; noTransactionPerMonth: number }
  | {
      type: "setAverageTransactionPerMonth";
      averageTransactionPerMonth: number;
    }
  | { type: "setPercentAch"; percentAch: number }
  | { type: "setPercentVisa"; percentVisa: number }
  | { type: "setPercentmastercard"; percentMastercard: number }
  | { type: "setPercentDiscover"; percentDiscover: number }
  | { type: "setPercentAmex"; percentAmex: number };

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "setAverageTransactionPerMonth":
      return {
        ...state,
        averageTransactionPerMonth: action.averageTransactionPerMonth,
      };
    case "setNoTransactionPerMonth":
      return {
        ...state,
        noTransactionPerMonth: action.noTransactionPerMonth,
      };
    case "setPercentAch":
      return {
        ...state,
        percentACH: action.percentAch,
      };
    case "setPercentVisa":
      return {
        ...state,
        percentVisa: action.percentVisa,
      };
    case "setPercentmastercard":
      return {
        ...state,
        percentMastercard: action.percentMastercard,
      };
    case "setPercentDiscover":
      return {
        ...state,
        percentDiscover: action.percentDiscover,
      };
    case "setPercentVisa":
      return {
        ...state,
        percentVisa: action.percentVisa,
      };
    default:
      return state;
  }
};
