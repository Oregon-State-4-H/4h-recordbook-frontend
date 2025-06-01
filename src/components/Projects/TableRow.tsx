import * as React from "react";
import TableCell from "@mui/material/TableCell";
import { StyledTableRow } from "../StyledTableRow";
import { ProjectSubEntryDeleteIconButton } from "@/components/DeleteButtons";
import EditIconButton from "@/components/EditIconButton";
import {
  AnimalProjectTypes,
  isExpense,
  EndpointByDynamicPathSuffix,
} from "@/API/ProjectAPI";
import { toDDMMYY } from "@/components/Date";
import Stack from "@mui/material/Stack";

interface ResumeRowProps {
  jwt: string;
  index: number;
  projectEntry: AnimalProjectTypes;
  setEntries: (allEntries: AnimalProjectTypes[]) => void;
  priorEntries: AnimalProjectTypes[];
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  handleModalClose: () => void;
  subpage: string;
}

export default function ResumeTableCells({
  index,
  projectEntry,
  jwt,
  setEntries,
  priorEntries,
  handleOpen,
  handleModalClose,
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
                  handleOpen={() => {
                    handleOpen(projectEntry, "edit");
                  }}
                />
                <ProjectSubEntryDeleteIconButton
                  id={projectEntry.id}
                  jwt={jwt}
                  endpoint={EndpointByDynamicPathSuffix(subpage)}
                  handleModalClose={handleModalClose}
                  allSubentries={priorEntries}
                  setSubentries={setEntries}
                />
              </Stack>
            </TableCell>
          </StyledTableRow>
        );
      }
      break;
  }
}
