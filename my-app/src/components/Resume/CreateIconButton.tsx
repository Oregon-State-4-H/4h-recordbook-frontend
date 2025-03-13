import React, { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { SectionEmpty, postSection, SectionAny } from "../../API/ResumeAPI";

interface ResumeActionButtonProps {
  handleOpen: (currEntry: SectionAny, purpose: string) => void;
}

export default function Section({ handleOpen }: ResumeActionButtonProps) {
  const empty: SectionEmpty = {
    id: "",
    section: -1,
    user_id: "",
    created: "",
    updated: "",
  };

  const openModal = () => handleOpen(empty, "create");

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
        <AddCircleIcon />
      </IconButton>
    </Box>
  );
}
