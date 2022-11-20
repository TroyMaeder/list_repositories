import { FC } from "react";
import { default as MUITable } from "@mui/material/Table";
import { TableBody } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { Paper } from "@mui/material";
import { createRow, Row } from "../../helpers/createRow";

interface Props {
  data: Row[] | undefined;
}

const Table: FC<Props> = ({ data }) => {
  const rows = data?.map((row) => createRow(row));

  return (
    <>
      <TableContainer component={Paper}>
        <MUITable>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.starIcon}</TableCell>
                <TableCell>{row.stargazerCount}</TableCell>
                <TableCell>{row.forkIcon}</TableCell>
                <TableCell>{row.forkCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </>
  );
};

export default Table;
