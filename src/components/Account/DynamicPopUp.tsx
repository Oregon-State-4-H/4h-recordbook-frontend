import React, { useState, useEffect, useRef } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import InputsBySubpage from "@/components/Account/InputsBySubpage";
import { OverlayModelCRUD } from "@/components/OverlayModal";
import { User, updateUser } from "@/API/UserAPI";

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
        <OverlayModelCRUD
          handleClose={handleModalClose}
          handleCRUD={handleUpdate}
          title="EDIT"
        >
          <InputsBySubpage setMapState={setMapState} currUser={currUser} />
        </OverlayModelCRUD>
      );
    default:
      break;
  }
}
