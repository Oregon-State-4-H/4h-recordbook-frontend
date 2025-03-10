import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  createSection1,
  fetchSectionData,
  Section1,
  SectionNumbers,
} from "../../API/ResumeAPI";

interface SectionProps {
  ID: string;
  Nickname: string;
  Section: number;
  Year: string;
  Grade: number;
  ClubName: string;
  NumInClub: number;
  ClubLeader: string;
  MeetingsHeld: number;
  MeetingsAttended: number;
  UserID: string;
}

export default function Section() {
  let [allSections, setSections] = useState<Section1[]>([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreate = async ({
    Nickname,
    Year,
    Grade,
    ClubName,
    NumInClub,
    ClubLeader,
    MeetingsHeld,
    MeetingsAttended,
  }: SectionProps) => {
    try {
      const createSucceeded = await createSection1(sectionID);
      if (createSucceeded) {
        setSections((prevSections) =>
          prevSections.filter((section) => section.id !== sectionID)
        );
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Box>
      <IconButton onClick={handleOpen}>
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
            onClick={handleClose}
            size="small"
          >
            <CloseIcon />
          </IconButton>
          <CardActions>
            <Button
              sx={{ width: "50%", marginLeft: "25%", marginRight: "25%" }}
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
    </Box>
  );
}
