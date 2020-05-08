import React, { useReducer } from "react";
import { Grid, Typography, makeStyles, Paper, Box } from "@material-ui/core";
import "./App.css";
import { PlatformTable } from "./PlatformTable";
import {
  stewardshipTechnologyFees,
  myWellFees,
  FeesForPlatform,
  getMyWellMonthlyFee,
  getStewardshipTechonlogyMonthlyFee,
  getBreezeMonthlyFee,
  breezeFees,
} from "./data";
import { InputBox } from "./InputBox";
import { reducer, State } from "./reducer";
import numeral from "numeral";

function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, {
    noTransactionPerMonth: 87,
    averageTransactionPerMonth: 225,
    percentACH: 0.7816,
    percentVisa: 0.1149,
    percentMastercard: 0.1034,
    percentDiscover: 0.0,
    percentAMEX: 0.0,
  });
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Grid container className={classes.wrapper}>
      <Grid item container direction="column" wrap="nowrap">
        <Grid
          item
          container
          justify="space-evenly"
          className={classes.container}
          wrap="nowrap"
        >
          <Grid item xs={3} className={classes.tableContainer}>
            <PlatformTable
              data={stewardshipTechnologyFees}
              header="Stewardship Technology"
            />
            <Box m={3} />
            <Typography>Has flat monthly fee of $20</Typography>
            <Box m={3} />
            <Typography variant="h6">
              {`Total Stewardship Technology Fees: ${calcFee(
                "stewardship",
                stewardshipTechnologyFees,
                state
              )}`}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.tableContainer}>
            <PlatformTable data={myWellFees} header="My Well" />
            <Box m={3} />
            <Typography>
              Has monthly fee of $
              {getMyWellMonthlyFee(state.noTransactionPerMonth)}
            </Typography>
            <Box m={3} />
            <Typography variant="h6">
              {`Total My Well Fees: ${calcFee("mywell", myWellFees, state)}`}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.tableContainer}>
            <PlatformTable data={breezeFees} header="Breeze" />
            <Box m={3} />
            <Typography>Has no monthly fee</Typography>
            <Box m={3} />
            <Typography variant="h6">
              {`Total Breeze Fees: ${calcFee("breeze", breezeFees, state)}`}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.tableContainer}>
            <InputBox dispatch={dispatch} state={state} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const calcFee: (
  platform: "mywell" | "stewardship" | "breeze",
  fees: FeesForPlatform,
  state: State
) => string = (platform, fees, state) => {
  const monthlyFee =
    platform === "mywell"
      ? getMyWellMonthlyFee(state.noTransactionPerMonth)
      : platform === "breeze"
      ? getBreezeMonthlyFee(state.noTransactionPerMonth)
      : getStewardshipTechonlogyMonthlyFee(state.noTransactionPerMonth);
  const totalTransactionAmount =
    state.noTransactionPerMonth * state.averageTransactionPerMonth;
  const amountACH =
    totalTransactionAmount * state.percentACH * fees.ACH.rate +
    state.noTransactionPerMonth * state.percentACH * fees.ACH.transactionFee;
  const amountVisa =
    totalTransactionAmount * state.percentVisa * fees.Visa.rate +
    state.noTransactionPerMonth * state.percentACH * fees.Visa.transactionFee;
  const amountMastercard =
    totalTransactionAmount * state.percentMastercard * fees.Mastercard.rate +
    state.noTransactionPerMonth *
      state.percentACH *
      fees.Mastercard.transactionFee;
  return numeral(monthlyFee + amountACH + amountVisa + amountMastercard).format(
    "$0,0.00"
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flex: 1,
  },
  container: {
    paddingTop: theme.typography.pxToRem(50),
  },
  tableContainer: {
    padding: theme.typography.pxToRem(20),
  },
}));

export default App;
