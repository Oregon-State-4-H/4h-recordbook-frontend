import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
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
    <Box
      sx={{
        width: "50%",
        margin: "0px",
        padding: "0px",
        display: "flex",
        flexDirection: "row-reverse",
      }}
    >
      <IconButton
        onClick={openModal}
        sx={{
          alignSelf: "right",
        }}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}
