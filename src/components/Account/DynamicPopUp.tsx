import React, { useState, useEffect, useRef } from "react";
// import { getAccessToken } from "@auth0/nextjs-auth0";
import { getAccessToken } from "@/components/DummyUser";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import InputsBySubpage from "@/components/Account/InputsBySubpage";
import { User, updateUser } from "@/API/User";

interface PopUpProps {
  currUser: User;
  handleModalClose: () => void;
  purpose: string;
}

export default function DynamicPopUp({
  purpose,
  currUser,
  handleModalClose,
}: PopUpProps) {
  const [accessToken, setAccessToken] = useState("");
  // map to store key value pairs for body of request
  const [mapState, setMapState] = useState(new Map());
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      if (purpose == "edit") {
        console.log("edit User.\n");
        setMapState((map) => new Map(map.set("birthdate", currUser.birthdate)));
        setMapState(
          (map) => new Map(map.set("county_name", currUser.county_name))
        );
        setMapState((map) => new Map(map.set("email", currUser.email)));
        setMapState(
          (map) => new Map(map.set("first_name", currUser.first_name))
        );
        setMapState(
          (map) =>
            new Map(map.set("last_name_initial", currUser.last_name_initial))
        );
        setMapState(
          (map) =>
            new Map(
              map.set("middle_name_initial", currUser.middle_name_initial)
            )
        );
      }
      hasRun.current = true;
    }
  }, [purpose, currUser]);

  switch (purpose) {
    case "edit":
      // effect to store entry's exsiting key values in map
      // input fields will override exsisting key values when they are changed

      // function to send PUT update request to backend
      const handleUpdate = async () => {
        console.log(JSON.stringify(Object.fromEntries(mapState)));
        const postData = async () => {
          try {
            if (accessToken == "") {
              const token = await getAccessToken();
              setAccessToken(token);
              await updateUser(
                token,
                JSON.stringify(Object.fromEntries(mapState))
              );
              handleModalClose();
            } else {
              await updateUser(
                accessToken,
                JSON.stringify(Object.fromEntries(mapState))
              );
              handleModalClose();
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
          <InputsBySubpage setMapState={setMapState} currUser={currUser} />
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
    default:
      break;
  }
}
