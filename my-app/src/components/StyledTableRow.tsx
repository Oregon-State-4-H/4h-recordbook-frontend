import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

export const StyledTableRow = styled(TableRow)(({}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  "&:nth-of-type(odd):hover": {
    backgroundColor: "rgba(255,255,255,0.98)",
  },
  "&:nth-of-type(even):hover": {
    backgroundColor: "rgba(255,255,255,0.98)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableHeader = styled(TableRow)(({}) => ({
  backgroundColor: "rgba(255,255,255,1)",
}));
