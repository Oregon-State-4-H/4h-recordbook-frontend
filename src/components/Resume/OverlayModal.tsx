"use client";

import React, { PropsWithChildren } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
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

interface OverlayModelCRUDProps {
  handleClose: () => void;
  handleCRUD: () => void;
  title: string;
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

export function OverlayModelCRUD(
  props: PropsWithChildren<OverlayModelCRUDProps>
) {
  return (
    <Card
      sx={{
        maxWidth: "95vw",
        minWidth: { xs: "300px", md: "30vw" },
        maxHeight: "90vh",
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 1,
        boxShadow: 5,
        p: 4,
        overflowY: "scroll",
        padding: "0px",
        margin: "0px",
      }}
    >
      <CardActions
        sx={{
          width: "100%",
          position: "sticky",
          top: "0%",
          backgroundColor: "rgba(255,255,255,1)",
          zIndex: "1000",
        }}
      >
        <Typography
          sx={{
            paddingTop: "4px",
            width: "100%",
            textAlign: "center",
            color: "rgba(51, 153, 102, 1)",
          }}
          variant="h5"
        >
          {props.title}
        </Typography>
        <IconButton
          onClick={props.handleClose}
          size="small"
          sx={{
            position: "absolute",
            right: 15,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </CardActions>
      {props.children}
      <CardActions
        sx={{
          width: "100%",
          position: "sticky",
          bottom: "0%",
          backgroundColor: "rgba(255,255,255,1)",
          zIndex: "1000",
        }}
      >
        <Button
          sx={{
            width: "50%",
            right: "25%",
            left: "25%",
            marginBottom: "10px",
          }}
          variant="outlined"
          onClick={props.handleCRUD}
        >
          Submit
        </Button>
      </CardActions>
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
