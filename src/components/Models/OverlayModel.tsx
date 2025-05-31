"use client";

import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

/**
 * OverlayModel component
 * @param {JSX.Element} children - The child elements to be displayed in the model
 * @param {function} handleClose - The function to close the model
 * @param {object} frameStyles - The styles for the model frame
 */

interface OverlayModelProps {
  handleClose: () => void;
}

export function OverlayModel(props: PropsWithChildren<OverlayModelProps>) {
  return (
    <Card
      sx={{
        maxWidth: "90%",
        minWidth: 275,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 1,
        boxShadow: 5,
        p: 4,
      }}
    >
      <IconButton
        sx={{ position: "absolute", right: "4%", top: "4%" }}
        onClick={props.handleClose}
        size="small"
      >
        <CloseIcon />
      </IconButton>
      {props.children}
    </Card>
  );
}

export function OverlayModelPDF(props: PropsWithChildren<OverlayModelProps>) {
  return (
    <Card
      sx={{
        width: "90vw",
        height: "90vh",
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 1,
        boxShadow: 5,
        p: 4,
      }}
    >
      <IconButton
        sx={{ position: "absolute", right: "4%", top: "4%" }}
        onClick={props.handleClose}
        size="small"
      >
        <CloseIcon />
      </IconButton>
      {props.children}
    </Card>
  );
}
