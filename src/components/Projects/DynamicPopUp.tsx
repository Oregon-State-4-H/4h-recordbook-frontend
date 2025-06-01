import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { getAccessToken } from "@auth0/nextjs-auth0";
import CardContent from "@mui/material/CardContent";
import { DynamicInputProject } from "@/components/Projects/DynamicInput";
import InputsBySubpage from "@/components/Projects/InputsBySubpage";
import { OverlayModelCRUD } from "@/components/OverlayModal";
import subpageOutline from "@/components/Projects/SubpageOutline.json";
import { formFields } from "@/API/JSON";
import { DayJSTypetoRFC3339 } from "@/components/Date";
import {
  AnimalProjectTypes,
  isExpense,
  emptyAnimalProjectEntry,
  postSubpageEntry,
  postProject,
  updateSubpageEntry,
  EndpointByDynamicPathSuffix,
  AnimalKeys,
  isAnimal,
  GainKeys,
  Project,
} from "@/API/ProjectAPI";

interface PopUpPropsSubpage {
  subpage: string;
  subpageEntry: AnimalProjectTypes;
  handleModalClose: () => void;
  purpose: string;
  project_id: string;
  setSubpageEntries: (allEntries: AnimalProjectTypes[]) => void;
  priorSubpageEntries: AnimalProjectTypes[];
}

export function DynamicPopUpSubpage({
  purpose,
  subpage,
  subpageEntry,
  handleModalClose,
  project_id,
  setSubpageEntries,
  priorSubpageEntries,
}: PopUpPropsSubpage) {
  const [accessToken, setAccessToken] = useState("");
  // map to store key value pairs for body of request
  const [mapState, setMapState] = useState(new Map());
  const hasRun = useRef(false);
  const [Fields, updateFields] = useState<formFields>([]);

  useEffect(() => {
    if (!hasRun.current) {
      switch (subpage) {
        case "Expense":
          updateFields(subpageOutline.expense.form);
          break;
        case "Animal":
          updateFields(subpageOutline.animal.form);
          break;
        case "Gain":
          updateFields(subpageOutline.gain.form);
          break;
        default:
          break;
      }

      if (purpose == "edit") {
        console.log("subpage for edit: ", subpage);
        switch (subpage) {
          case "Expense":
            if (isExpense(subpageEntry)) {
              console.log("edit Expense.\n");
              setMapState((map) => new Map(map.set("cost", subpageEntry.cost)));
              setMapState((map) => new Map(map.set("date", subpageEntry.date)));
              setMapState(
                (map) => new Map(map.set("items", subpageEntry.items))
              );
              setMapState(
                (map) => new Map(map.set("project_id", subpageEntry.project_id))
              );
              setMapState(
                (map) => new Map(map.set("quantity", subpageEntry.quantity))
              );
            }
            break;
          case "Animal":
            if (isAnimal(subpageEntry)) {
              console.log("edit Animal.\n");
              AnimalKeys.forEach(function (key) {
                // if date is empty set intialize at current date
                if (
                  Fields.find((object) => object.name === key)?.type ==
                    "date" &&
                  subpageEntry[key] == ""
                ) {
                  const defaultDateString = DayJSTypetoRFC3339(dayjs());
                  setMapState(
                    (map: Map<string, number | string>) =>
                      new Map(map.set(key, defaultDateString))
                  );
                } else {
                  setMapState(
                    (map: Map<string, number | string>) =>
                      new Map(map.set(key, subpageEntry[key]))
                  );
                }
              });
            }
            break;
          case "Gain":
            if (isAnimal(subpageEntry)) {
              console.log("edit Gain.\n");
              GainKeys.forEach(function (key) {
                // if date is empty set intialize at current date
                if (
                  Fields.find((object) => object.name === key)?.type ==
                    "date" &&
                  subpageEntry[key] == ""
                ) {
                  const defaultDateString = DayJSTypetoRFC3339(dayjs());
                  setMapState(
                    (map: Map<string, number | string>) =>
                      new Map(map.set(key, defaultDateString))
                  );
                } else {
                  setMapState(
                    (map: Map<string, number | string>) =>
                      new Map(map.set(key, subpageEntry[key]))
                  );
                }
              });
            }
            break;
          default:
            break;
        }
      } else if (purpose == "create") {
        // effect to store entry's values that are not user generated in
        console.log("create subpage entry.\n");
        setMapState((map) => new Map(map.set("project_id", project_id)));
      }
      hasRun.current = true;
    }
  }, [purpose, subpage, subpageEntry, project_id, Fields]);

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
              const entryData = await updateSubpageEntry<AnimalProjectTypes>(
                token,
                endpoint,
                subpageEntry.id,
                JSON.stringify(Object.fromEntries(mapState))
              );
              setSubpageEntries(
                priorSubpageEntries.map((item) =>
                  item.id === entryData.id ? entryData : item
                )
              );
              handleModalClose();
            } else {
              const entryData = await updateSubpageEntry<AnimalProjectTypes>(
                accessToken,
                endpoint,
                subpageEntry.id,
                JSON.stringify(Object.fromEntries(mapState))
              );
              setSubpageEntries(
                priorSubpageEntries.map((item) =>
                  item.id === entryData.id ? entryData : item
                )
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
          handleCRUD={handleUpdate}
          handleClose={handleModalClose}
          title="EDIT"
        >
          <InputsBySubpage
            setMapState={setMapState}
            subpage={subpage}
            subpageEntry={subpageEntry}
          />
        </OverlayModelCRUD>
      );
    case "create":
      // function to send POST create request to backend
      const handleCreate = async () => {
        console.log("handle create function.\n");

        const endpoint: string = EndpointByDynamicPathSuffix(subpage);
        console.log(JSON.stringify(Object.fromEntries(mapState)));
        const postData = async () => {
          try {
            if (accessToken == "") {
              console.log("get fresh access token.\n");

              const token = await getAccessToken();
              setAccessToken(token);
              const entryData = await postSubpageEntry<AnimalProjectTypes>(
                token,
                endpoint,
                JSON.stringify(Object.fromEntries(mapState))
              );
              console.log("post request done.\n");

              setSubpageEntries([...priorSubpageEntries, entryData]);
              console.log("updated state array.\n");

              handleModalClose();
            } else {
              console.log("use exsisting access token.\n");

              const entryData = await postSubpageEntry<AnimalProjectTypes>(
                accessToken,
                endpoint,
                JSON.stringify(Object.fromEntries(mapState))
              );
              console.log("post request done.\n");

              setSubpageEntries([...priorSubpageEntries, entryData]);
              console.log("updated state array.\n");

              handleModalClose();
            }
          } catch (error) {
            console.error(error);
          }
        };
        postData();
        console.log("end handler function.\n");
      };

      return (
        <OverlayModelCRUD
          handleClose={handleModalClose}
          handleCRUD={handleCreate}
          title="CREATE"
        >
          <InputsBySubpage
            setMapState={setMapState}
            subpage={subpage}
            subpageEntry={emptyAnimalProjectEntry}
          />
        </OverlayModelCRUD>
      );
    default:
      break;
  }
}

interface PopUpPropsProject {
  handleModalClose: () => void;
  setAllProjects: (allProjects: Project[]) => void;
  priorProjects: Project[];
}

export function DynamicPopUpProject({
  handleModalClose,
  setAllProjects,
  priorProjects,
}: PopUpPropsProject) {
  const [accessToken, setAccessToken] = useState("");
  // map to store key value pairs for body of request
  const [mapState, setMapState] = useState(new Map());
  const Fields = subpageOutline.project.form;

  // function to send POST create request to backend
  const handleCreate = async () => {
    console.log("handle create function.\n");
    console.log(JSON.stringify(Object.fromEntries(mapState)));
    const postData = async () => {
      try {
        if (accessToken == "") {
          console.log("get fresh access token.\n");

          const token = await getAccessToken();
          setAccessToken(token);
          const entryData = await postProject(
            token,
            JSON.stringify(Object.fromEntries(mapState))
          );
          console.log("post request done.\n");

          setAllProjects([...priorProjects, entryData]);
          console.log("updated state array.\n");

          handleModalClose();
        } else {
          console.log("use exsisting access token.\n");

          const entryData = await postProject(
            accessToken,
            JSON.stringify(Object.fromEntries(mapState))
          );
          console.log("post request done.\n");

          setAllProjects([...priorProjects, entryData]);
          console.log("updated state array.\n");

          handleModalClose();
        }
      } catch (error) {
        console.error(error);
      }
    };
    postData();
    console.log("end handler function.\n");
  };

  return (
    <OverlayModelCRUD
      handleClose={handleModalClose}
      handleCRUD={handleCreate}
      title="CREATE"
    >
      <CardContent
        sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
      >
        {Fields.map((item, index) => (
          <DynamicInputProject
            key={index}
            setMapState={setMapState}
            inputFieldJSON={item}
          />
        ))}
      </CardContent>
    </OverlayModelCRUD>
  );
}
