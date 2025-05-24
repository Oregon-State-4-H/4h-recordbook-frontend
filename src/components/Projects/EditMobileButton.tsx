import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { AnimalProjectTypes } from "@/API/ProjectAPI";

interface ResumeActionButtonProps {
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  projectSubentry: AnimalProjectTypes;
}

export default function Section({
  projectSubentry,
  handleOpen,
}: ResumeActionButtonProps) {
  const openModal = () => handleOpen(projectSubentry, "edit");

  return (
    <Button
      sx={{ width: "50%" }}
      variant="outlined"
      onClick={openModal}
      startIcon={<EditIcon />}
    >
      Edit
    </Button>
  );
}
