import React, { useState, useEffect } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import InputsBySubpage from "./InputsBySubpage";
import {
  AnimalProjectTypes,
  isExpense,
  emptyAnimalProjectEntry,
  postSubpageEntry,
  updateSubpageEntry,
  EndpointByDynamicPathSuffix,
} from "@/API/ProjectAPI";

interface PopUpProps {
  subpage: string;
  subpageEntry: AnimalProjectTypes;
  handleModalClose: () => void;
  purpose: string;
  project_id: string;
}

export default function DynamicPopUp({
  purpose,
  subpage,
  subpageEntry,
  handleModalClose,
  project_id,
}: PopUpProps) {
  const [accessToken, setAccessToken] = useState("");
  // map to store key value pairs for body of request
  const [mapState, setMapState] = useState(new Map());
  const updateMap = (key: string, value: string | number) => {
    setMapState((map) => new Map(map.set(key, value)));
  };

  useEffect(() => {
    if (purpose == "edit") {
      console.log("subpage for edit: ", subpage);
      switch (subpage) {
        case "Expense":
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
    } else if (purpose == "create") {
      // effect to store entry's values that are not user generated in
      updateMap("project_id", project_id);
    }
  }, [purpose, subpage, subpageEntry, project_id]);

  switch (purpose) {
    case "edit":
      // effect to store entry's exsiting key values in map
      // input fields will override exsisting key values when they are changed

      // function to send PUT update request to backend
      const handleUpdate = async () => {
        const endpoint: string = EndpointByDynamicPathSuffix(subpage);
        console.log(JSON.stringify(Object.fromEntries(mapState)));
        const postData = async () => {
          try {
            if (accessToken == "") {
              const token = await getAccessToken();
              setAccessToken(token);
              await updateSubpageEntry<AnimalProjectTypes>(
                token,
                endpoint,
                subpageEntry.id,
                JSON.stringify(Object.fromEntries(mapState))
              );
            } else {
              await updateSubpageEntry<AnimalProjectTypes>(
                accessToken,
                endpoint,
                subpageEntry.id,
                JSON.stringify(Object.fromEntries(mapState))
              );
            }
          } catch (error) {
            console.error(error);
          }
        };
        postData();
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
        const endpoint: string = EndpointByDynamicPathSuffix(subpage);
        console.log(JSON.stringify(Object.fromEntries(mapState)));
        const postData = async () => {
          try {
            if (accessToken == "") {
              const token = await getAccessToken();
              setAccessToken(token);
              await postSubpageEntry<AnimalProjectTypes>(
                token,
                endpoint,
                JSON.stringify(Object.fromEntries(mapState))
              );
              handleModalClose();
              window.location.reload();
            } else {
              await postSubpageEntry<AnimalProjectTypes>(
                accessToken,
                endpoint,
                JSON.stringify(Object.fromEntries(mapState))
              );
              handleModalClose();
              window.location.reload();
            }
          } catch (error) {
            console.error(error);
          }
        };
        postData();
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
