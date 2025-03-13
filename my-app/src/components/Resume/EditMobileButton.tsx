import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SectionAny } from "../../API/ResumeAPI";

interface ResumeActionButtonProps {
  handleOpen: (currEntry: SectionAny, purpose: string) => void;
  resumeEntry: SectionAny;
}

export default function Section({
  resumeEntry,
  handleOpen,
}: ResumeActionButtonProps) {
  const openModal = () => handleOpen(resumeEntry, "edit");

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
