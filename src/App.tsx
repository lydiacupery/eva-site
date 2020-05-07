import React, { useReducer } from "react";
import { Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import "./App.css";
import { PlatformTable } from "./PlatformTable";
import {
  stewardshipTechnologyFees,
  myWellFees,
  FeesForPlatform,
  getMyWellMonthlyFee,
  getStewardshipTechonlogyMonthlyFee,
} from "./data";
import { InputBox } from "./InputBox";
import { reducer, State } from "./reducer";

function App() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, {
    noTransactionPerMonth: 100,
    averageTransactionPerMonth: 10,
    percentACH: 0.1,
    percentVisa: 0.1,
    percentMastercard: 0.5,
    percentDiscover: 0.2,
    percentAMEX: 0.3,
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
          </Grid>
          <Grid item xs={3} className={classes.tableContainer}>
            <PlatformTable data={myWellFees} header="My Well" />
          </Grid>
          <Grid item xs={5} className={classes.tableContainer}>
            <InputBox dispatch={dispatch} state={state} />
          </Grid>
        </Grid>
        <Grid item container justify="center">
          <Grid container item justify="center" alignContent="center">
            <Typography variant="h1">Total Platform Fee: $99</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const calcFee: (
  platform: "mywell" | "stewardship",
  fees: FeesForPlatform,
  state: State
) => number = (platform, fees, state) => {
  const monthlyFee =
    platform === "mywell"
      ? getMyWellMonthlyFee(state.noTransactionPerMonth)
      : getStewardshipTechonlogyMonthlyFee(state.noTransactionPerMonth);
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
