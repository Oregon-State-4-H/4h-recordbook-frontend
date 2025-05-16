import * as React from "react";
import TableCell from "@mui/material/TableCell";
import { StyledTableRow } from "../StyledTableRow";
import DeleteIconButton from "./DeleteIconButton";
import EditIconButton from "./EditIconButton";
// import ResumeEdit from "./EditIconButton";
import { AnimalProjectTypes, isExpense } from "../../API/ProjectAPI";
import { toDDMMYY } from "@/components/Date";
import Stack from "@mui/material/Stack";

interface ResumeRowProps {
  index: number;
  projectEntry: AnimalProjectTypes;
  // sectionNumber: string;
  // sectionPlusNumber: string;
  // setEntries: (allEntries: AnimalProjectTypes[]) => void;
  // priorEntries: AnimalProjectTypes[];
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  subpage: string;
}

export default function ResumeTableCells({
  index,
  projectEntry,
  // sectionNumber,
  // sectionPlusNumber,
  // setEntries,
  // priorEntries,
  handleOpen,
  subpage,
}: ResumeRowProps) {
  switch (subpage) {
    case "Expense":
      if (isExpense(projectEntry)) {
        return (
          <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell sx={{ textAlign: "center" }}>
              {projectEntry.cost}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {toDDMMYY(projectEntry.date)}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {projectEntry.items}
            </TableCell>
            <TableCell sx={{ textAlign: "center" }}>
              {projectEntry.quantity}
            </TableCell>
            <TableCell>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <EditIconButton
                  animalProjectEntry={projectEntry}
                  handleOpen={handleOpen}
                />
                <DeleteIconButton id={projectEntry.id} subpage={subpage} />
              </Stack>
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
  }
}
