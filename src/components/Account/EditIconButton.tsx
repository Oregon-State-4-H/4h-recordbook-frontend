import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { User } from "@/API/User";

interface ResumeActionButtonProps {
  handleOpen: (currEntry: User, purpose: string) => void;
  currUser: User;
}

export default function Section({
  currUser,
  handleOpen,
}: ResumeActionButtonProps) {
  const openModal = () => handleOpen(currUser, "edit");

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
