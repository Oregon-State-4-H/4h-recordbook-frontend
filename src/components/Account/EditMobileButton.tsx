import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import { User } from "@/API/UserAPI";

interface ResumeActionButtonProps {
  handleOpen: (currEntry: User, purpose: string) => void;
  projectSubentry: User;
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
