import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import InputsBySubpage from "./InputsBySubpage";
import {
  AnimalProjectTypes,
  isExpense,
  emptyAnimalProjectEntry,
} from "../../API/ProjectAPI";

interface PopUpProps {
  subpage: string;
  // setSections: (allEntries: AnimalProjectTypes[]) => void;
  priorEntries: AnimalProjectTypes[];
  subpageEntry: AnimalProjectTypes;
  handleModalClose: () => void;
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  purpose: string;
}

export default function DynamicPopUp({
  purpose,
  subpage,
  subpageEntry,
  // setSections,
  priorEntries,
  handleModalClose,
  handleOpen,
}: PopUpProps) {
  // map to store key value pairs for body of request
  const [mapState, setMapState] = useState(new Map());
  const updateMap = (key: string, value: any) => {
    setMapState((map) => new Map(map.set(key, value)));
  };

  switch (purpose) {
    case "edit":
      // effect to store entry's exsiting key values in map
      // input fields will override exsisting key values when they are changed
      useEffect(() => {
        switch (subpage) {
          case "1":
            if (isExpense(subpageEntry)) {
              updateMap("cost", subpageEntry.cost);
              updateMap("date", subpageEntry.date);
              updateMap("items", subpageEntry.items);
              updateMap("project_id", subpageEntry.project_id);
              updateMap("quantity", subpageEntry.quantity);
            }
            break;
          default:
            break;
        }
      }, []);

      // function to send PUT update request to backend
      const handleUpdate = async () => {
        // console.log(JSON.stringify(Object.fromEntries(mapState)));
        // const postData = async () => {
        //   try {
        //     const sectionData = await updateSection<AnimalProjectTypes>(
        //       sectionPlusNumber,
        //       subpageEntry.id,
        //       JSON.stringify(Object.fromEntries(mapState))
        //     );
        //     console.log(sectionData);
        //     setSections(
        //       priorEntries.map((item) =>
        //         item.id === sectionData.id ? sectionData : item
        //       )
        //     );
        //     handleModalClose();
        //     // handleNotificationOpen();
        //   } catch (error) {
        //     console.error(error);
        //   }
        // };
        // postData();
      };

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
              EDIT
            </Typography>
            <IconButton
              onClick={handleModalClose}
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
          <InputsBySubpage
            updateMap={updateMap}
            subpage={subpage}
            subpageEntry={subpageEntry}
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
      );
    case "create":
      // function to send POST create request to backend
      const handleCreate = async () => {
        // console.log(JSON.stringify(Object.fromEntries(mapState)));
        // const postData = async () => {
        //   try {
        //     const sectionData = await postSection<AnimalProjectTypes>(
        //       sectionPlusNumber,
        //       JSON.stringify(Object.fromEntries(mapState))
        //     );
        //     console.log(sectionData);
        //     setSections([...priorEntries, sectionData]);
        //     handleModalClose();
        //     // handleNotificationOpen();
        //   } catch (error) {
        //     console.error(error);
        //   }
        // };
        // postData();
      };

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
              CREATE
            </Typography>
            <IconButton
              onClick={handleModalClose}
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
          <InputsBySubpage
            updateMap={updateMap}
            subpage={subpage}
            subpageEntry={emptyAnimalProjectEntry}
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
      );
    default:
      break;
  }
}
