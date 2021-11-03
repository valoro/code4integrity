import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Address", "1AjZPMsnmpdK2Rv9KQNfMurTXinscVro9V", 6.0, 24, 4.0),
  createData("Report Count", 1, 9.0, 37, 4.3),
  createData(
    "Latest Report",
    "Wed, 03 Nov 21 11:54:00 +0000(1 hour ago)",
    16.0,
    24,
    6.0
  ),
  createData("Total Bitcoin Received", "1050.27344484 BTC", 3.7, 67, 4.3),
  createData("No. Transactions Received", 799, 16.0, 49, 3.9),
];

export const Tablee = () => {
  return (
    <TableContainer component={Paper} style={{ width: "50%" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {/* <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead> */}
        <div>
          <h1 style={{ fontWeight: 300, fontSize: 20, marginLeft: 15 }}>
            Address found in database:
          </h1>
        </div>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                align="left"
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
