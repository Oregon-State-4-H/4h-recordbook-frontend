import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ResumeModalContent from "./ResumeModalContent";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import {
  SectionAny,
  updateSection,
  isS1,
  isS2,
  isS3,
  isS4,
  isS5,
  isS6,
  isS7,
  isS8,
  isS9,
  isS10,
  isS11,
  isS12,
  isS13,
  isS14,
} from "../../API/ResumeAPI";

interface ResumeCreateProps {
  sectionNumber: string;
  sectionPlusNumber: string;
  setSections: (allEntries: SectionAny[]) => void;
  priorEntries: SectionAny[];
  resumeEntry: SectionAny;
}

export default function Section({
  sectionNumber,
  resumeEntry,
  sectionPlusNumber,
  setSections,
  priorEntries,
}: ResumeCreateProps) {
  // state for edit modal
  const [open, setOpen] = React.useState(false);

  // state for success alert component
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

  // map to store key value pairs for body of PUT request
  const [mapState, setMapState] = useState(new Map());
  const updateMap = (key: string, value: any) => {
    setMapState((map) => new Map(map.set(key, value)));
  };

  // effect to store entry's exsiting key values in map
  // input fields will override exsisting key values when they are changed
  useEffect(() => {
    switch (sectionNumber) {
      case "1":
        if (isS1(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("club_leader", resumeEntry.club_leader);
          updateMap("club_name", resumeEntry.club_name);
          updateMap("grade", resumeEntry.grade);
          updateMap("num_in_club", resumeEntry.num_in_club);
          updateMap("meetings_held", resumeEntry.meetings_held);
          updateMap("meetings_attended", resumeEntry.meetings_attended);
        }
        break;
      case "2":
        if (isS2(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("project_name", resumeEntry.project_name);
          updateMap("project_scope", resumeEntry.project_scope);
        }
        break;
      case "3":
        if (isS3(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("activity_kind", resumeEntry.activity_kind);
          updateMap("things_learned", resumeEntry.things_learned);
          updateMap("level", resumeEntry.level);
        }
        break;
      case "4":
        if (isS4(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("activity_kind", resumeEntry.activity_kind);
          updateMap("scope", resumeEntry.scope);
          updateMap("level", resumeEntry.level);
        }
        break;
      case "5":
        if (isS5(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("leadership_role", resumeEntry.leadership_role);
          updateMap("hours_spent", resumeEntry.hours_spent);
          updateMap("num_people_reached", resumeEntry.num_people_reached);
        }
        break;
      case "6":
        if (isS6(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("organization_name", resumeEntry.organization_name);
          updateMap("leadership_role", resumeEntry.leadership_role);
          updateMap("hours_spent", resumeEntry.hours_spent);
          updateMap("num_people_reached", resumeEntry.num_people_reached);
        }
        break;
      case "7":
        if (isS7(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap(
            "club_member_activities",
            resumeEntry.club_member_activities
          );
          updateMap("hours_spent", resumeEntry.hours_spent);
          updateMap("num_people_reached", resumeEntry.num_people_reached);
        }
        break;
      case "8":
        if (isS8(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap(
            "individual_group_activities",
            resumeEntry.individual_group_activities
          );
          updateMap("hours_spent", resumeEntry.hours_spent);
          updateMap("num_people_reached", resumeEntry.num_people_reached);
        }
        break;
      case "9":
        if (isS9(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("communication_type", resumeEntry.communication_type);
          updateMap("topic", resumeEntry.topic);
          updateMap("times_given", resumeEntry.times_given);
          updateMap("location", resumeEntry.location);
          updateMap("audience_size", resumeEntry.audience_size);
        }
        break;
      case "10":
        if (isS10(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("communication_type", resumeEntry.communication_type);
          updateMap("topic", resumeEntry.topic);
          updateMap("times_given", resumeEntry.times_given);
          updateMap("location", resumeEntry.location);
          updateMap("audience_size", resumeEntry.audience_size);
        }
        break;
      case "11":
        if (isS11(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("event_and_level", resumeEntry.event_and_level);
          updateMap("exhibits_or_division", resumeEntry.exhibits_or_division);
          updateMap("ribbon_or_placings", resumeEntry.ribbon_or_placings);
        }
        break;
      case "12":
        if (isS12(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("level", resumeEntry.level);
          updateMap("contest_or_event", resumeEntry.contest_or_event);
          updateMap("recognition_received", resumeEntry.recognition_received);
        }
        break;
      case "13":
        if (isS13(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("recognition_type", resumeEntry.recognition_type);
        }
        break;
      case "14":
        if (isS14(resumeEntry)) {
          updateMap("year", resumeEntry.year);
          updateMap("nickname", resumeEntry.nickname);
          updateMap("recognition_type", resumeEntry.recognition_type);
        }
        break;
      default:
        break;
    }
  }, []);

  // function to send PUT update request to backend
  const handleUpdate = async () => {
    console.log(JSON.stringify(Object.fromEntries(mapState)));
    const postData = async () => {
      try {
        const sectionData = await updateSection<SectionAny>(
          sectionPlusNumber,
          resumeEntry.id,
          JSON.stringify(Object.fromEntries(mapState))
        );
        console.log(sectionData);
        setSections(
          priorEntries.map((item) =>
            item.id === sectionData.id ? sectionData : item
          )
        );
        handleClose();
        handleNotificationOpen();
      } catch (error) {
        console.error(error);
      }
    };
    postData();
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
        <EditIcon />
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
              EDIT
            </Typography>
            <IconButton
              onClick={handleClose}
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
          <ResumeModalContent
            updateMap={updateMap}
            sectionNumber={sectionNumber}
            resumeEntry={resumeEntry}
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
                handleUpdate();
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
          Your resume entry has been successfully updated!
        </Alert>
      </Snackbar>
    </Box>
  );
}
