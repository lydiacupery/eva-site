import React from "react";
import { TextField, Paper, Grid, Typography } from "@material-ui/core";
import { Action, State } from "./reducer";

type Props = {
  dispatch: React.Dispatch<Action>;
  state: State;
};
export const InputBox: React.SFC<Props> = (props) => {
  const { dispatch, state } = props;
  return (
    <Paper style={{ padding: "40px", width: "200px" }}>
      <Grid container justify="center">
        <Typography variant="h6">Inputs</Typography>
      </Grid>
      <form>
        <TextField
          label="monthly transactions"
          placeholder="monthly transactions"
          value={state.noTransactionPerMonth}
          type="number"
          fullWidth
          onChange={(e) =>
            dispatch({
              type: "setNoTransactionPerMonth",
              noTransactionPerMonth: Number(e.target.value),
            })
          }
        />
        <TextField
          label="average transaction amount"
          placeholder="average transaction amount"
          value={state.averageTransactionPerMonth}
          type="number"
          fullWidth
          onChange={(e) =>
            dispatch({
              type: "setAverageTransactionPerMonth",
              averageTransactionPerMonth: Number(e.target.value),
            })
          }
        />
        <TextField
          label="% ACH"
          placeholder="% ACH"
          value={state.percentACH}
          type="number"
          fullWidth
          onChange={(e) =>
            dispatch({
              type: "setPercentAch",
              percentAch: Number(e.target.value),
            })
          }
        />
        <TextField
          label="% Visa"
          placeholder="% Visa"
          value={state.percentVisa}
          type="number"
          fullWidth
          onChange={(e) =>
            dispatch({
              type: "setPercentVisa",
              percentVisa: Number(e.target.value),
            })
          }
        />
        <TextField
          label="% Mastercard"
          placeholder="% Mastercard"
          value={state.percentMastercard}
          type="number"
          fullWidth
          onChange={(e) =>
            dispatch({
              type: "setPercentmastercard",
              percentMastercard: Number(e.target.value),
            })
          }
        />
      </form>
    </Paper>
  );
};
