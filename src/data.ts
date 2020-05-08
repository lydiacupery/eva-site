import { TransactionTypes } from "./PlatformTable";

export type FeesForPlatform = {
  [k in TransactionTypes]: { transactionFee: number; rate: number };
};

export const stewardshipTechnologyFees: FeesForPlatform = {
  ACH: {
    transactionFee: 0.25,
    rate: 0.008,
  },
  Visa: {
    transactionFee: 0.25,
    rate: 0.029,
  },
  Mastercard: {
    transactionFee: 0.25,
    rate: 0.029,
  },
  Discover: {
    transactionFee: 0.25,
    rate: 0.03,
  },
  AmericanExpress: {
    transactionFee: 0.25,
    rate: 0.033,
  },
};
export const getStewardshipTechonlogyMonthlyFee = (transactions: number) => {
  return 20;
};

export const myWellFees: FeesForPlatform = {
  ACH: {
    transactionFee: 0.3,
    rate: 0.0,
  },
  Visa: {
    transactionFee: 0.3,
    rate: 0.0135,
  },
  Mastercard: {
    transactionFee: 0.3,
    rate: 0.0145,
  },
  Discover: {
    transactionFee: 0.3,
    rate: 0.0156,
  },
  AmericanExpress: {
    transactionFee: 0.3,
    rate: 0.0195,
  },
};

export const getMyWellMonthlyFee = (transactions: number) => {
  if (transactions < 100) {
    return 49;
  }
  if (transactions < 200) {
    return 99;
  }
  if (transactions < 500) {
    return 149;
  }
  if (transactions < 1250) {
    return 249;
  }
  if (transactions < 2500) {
    return 349;
  } else {
    return 499;
  }
};

export const breezeFees: FeesForPlatform = {
  ACH: {
    transactionFee: 0.25,
    rate: 0.01,
  },
  Visa: {
    transactionFee: 0.3,
    rate: 0.029,
  },
  Mastercard: {
    transactionFee: 0.3,
    rate: 0.029,
  },
  Discover: {
    transactionFee: 0.35,
    rate: 0.035,
  },
  AmericanExpress: {
    transactionFee: 0.35,
    rate: 0.035,
  },
};

export const getBreezeMonthlyFee = (transactions: number) => {
  return 0;
};
