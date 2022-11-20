import { FC } from "react";
import { default as MUITable } from "@mui/material/Table";
import { TableBody } from "@mui/material";
import { styled } from "@mui/system";
import { TableContainer } from "@mui/material";
import { TableRow } from "@mui/material";
import { createRow, Row } from "../../helpers/createRow";

interface Props {
  data: Row[] | undefined;
}

const TableCell = styled("td")({
  width: "50px",
  display: "table-cell",
  textAlign: "center",
  padding: "16px 4px",
});

const Table: FC<Props> = ({ data }) => {
  const rows = data?.map((row) => createRow(row));

  return (
    <>
      <TableContainer>
        <MUITable>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row.name}>
                <TableCell aria-hidden="true"> - </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell aria-hidden="true"> - </TableCell>
                <TableCell role="img" aria-label="star">
                  {row.starIcon}
                </TableCell>
                <TableCell>{row.stargazerCount}</TableCell>
                <TableCell aria-hidden="true"> - </TableCell>
                <TableCell role="img" aria-label="fork">
                  {row.forkIcon}
                </TableCell>
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
