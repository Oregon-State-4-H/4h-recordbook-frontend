import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

interface ActionButtonProps {
  handleOpen: () => void;
}

export default function Section({ handleOpen }: ActionButtonProps) {
  const openModal = () => handleOpen();

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
