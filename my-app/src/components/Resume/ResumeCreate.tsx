import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ResumeCreateModalContent from "./ResumeCreateModalContent";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ResumeCreateProps {
  sectionNumber: string;
}

export default function Section({ sectionNumber }: ResumeCreateProps) {
  const [open, setOpen] = React.useState(false);
  const [openNotification, setNotificationOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNotificationOpen = () => setNotificationOpen(true);
  const handleNotificationClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setNotificationOpen(false);
  };
  const [mapState, setMapState] = useState(new Map());
  const updateMap = (key: string, value: any) => {
    setMapState((map) => new Map(map.set(key, value)));
  };

  const handleCreate = async () => {
    console.log(JSON.stringify(Object.fromEntries(mapState)));
    try {
      var endPoint: string =
        `${process.env.NEXT_PUBLIC_API_URL}/section` + sectionNumber;
      const response = await fetch(endPoint, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(Object.fromEntries(mapState)),
      });
      switch (response.status) {
        case 204:
          handleClose();
          handleNotificationOpen();
          window.location.reload();

          return true;
        case 400:
          throw new Error("Bad Request");
        default:
          throw new Error(`Error: status ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  };

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
        onClick={handleOpen}
        sx={{
          alignSelf: "right",
        }}
      >
        <AddCircleIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
          <Box
            sx={{
              position: "sticky",
              width: "100%",
              top: "0%",
            }}
          >
            <IconButton
              onClick={handleClose}
              size="small"
              sx={{
                position: "absolute",
                right: 0,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <ResumeCreateModalContent
            updateMap={updateMap}
            sectionNumber={sectionNumber}
          />
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
              onClick={() => {
                handleCreate();
              }}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Modal>
      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
      >
        <Alert
          onClose={handleNotificationClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your resume entry has been successfully created!
        </Alert>
      </Snackbar>
    </Box>
  );
}
