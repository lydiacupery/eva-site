import React from "react";
import {
  TableHead,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import { default as numeral } from "numeral";

type Props = {
  data: {
    [k in TransactionTypes]: { transactionFee: number; rate: number };
  };
  header: string;
};
export const PlatformTable: React.SFC<Props> = (props) => {
  return (
    <Paper>
      <Grid container justify="center">
        <Typography variant="h6">{props.header}</Typography>
      </Grid>
      <Table>
        <TableHead>
          <TableCell>Transaction Type</TableCell>
          <TableCell>Transaction Fee</TableCell>
          <TableCell>Discount Rate</TableCell>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.displayName}</TableCell>
              <TableCell>
                {numeral(props.data[row.type].transactionFee).format("$0.00")}
              </TableCell>
              <TableCell>
                {numeral(props.data[row.type].rate).format("0.00%")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const rows: {
  type: TransactionTypes;
  displayName: string;
}[] = [
  {
    type: "ACH",
    displayName: "ACH",
  },
  {
    type: "Visa",
    displayName: "Visa",
  },
  {
    type: "Mastercard",
    displayName: "Mastercard",
  },
  {
    type: "Discover",
    displayName: "Discover",
  },
  {
    type: "AmericanExpress",
    displayName: "American Express",
  },
];

export type TransactionTypes =
  | "ACH"
  | "Visa"
  | "Mastercard"
  | "Discover"
  | "AmericanExpress";
