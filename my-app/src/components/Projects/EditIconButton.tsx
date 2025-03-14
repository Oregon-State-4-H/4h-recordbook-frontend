import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { AnimalProjectTypes } from "../../API/ProjectAPI";

interface ResumeActionButtonProps {
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  animalProjectEntry: AnimalProjectTypes;
}

export default function Section({
  animalProjectEntry,
  handleOpen,
}: ResumeActionButtonProps) {
  const openModal = () => handleOpen(animalProjectEntry, "edit");

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
