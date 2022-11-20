import { FC } from "react";
import { default as MUITable } from "@mui/material/Table";
import { TableBody } from "@mui/material";
import { styled } from "@mui/system";
import { TableContainer } from "@mui/material";
import { TableRow } from "@mui/material";
import { createRow, Row } from "../../helpers/createRow";
import LoadingBoundary from "../LoadingBoundary/LoadingBoundary";

interface Props {
  tableData: Row[] | undefined;
  user?: string;
  loading: boolean;
}

const TableCell = styled("td")({
  width: "50px",
  display: "table-cell",
  textAlign: "center",
  padding: "16px 4px",
});

const Table: FC<Props> = ({ tableData, user, loading }) => {
  const rows = tableData?.map((row) => createRow(row));

  return (
    <LoadingBoundary loading={loading}>
      <TableContainer>
        <MUITable>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row.name}>
                <TableCell aria-hidden="true"> - </TableCell>
                <TableCell>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`https://github.com/${user}/${row.name}`}
                  >
                    {row.name}
                  </a>
                </TableCell>
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
    </LoadingBoundary>
  );
};

export default Table;
