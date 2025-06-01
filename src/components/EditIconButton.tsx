import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

interface ActionButtonProps {
  handleOpen: () => void;
}

export default function Section(props: ActionButtonProps) {
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
        onClick={props.handleOpen}
        sx={{
          alignSelf: "right",
        }}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}
