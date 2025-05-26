import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MobileReadDetail from "@/components/Projects/MobileReadDetail";
import EditMobileButton from "@/components/Projects/EditMobileButton";
import { ProjectSubEntryDeleteMobileButton } from "@/components/DeleteButtons";
import { AnimalProjectTypes } from "@/API/ProjectAPI";

interface PopUpProps {
  jwt: string;
  projectSubentry: AnimalProjectTypes;
  endpoint: string;
  handleModalClose: () => void;
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  setSubentries: (updatedEntries: AnimalProjectTypes[]) => void;
  allSubentries: AnimalProjectTypes[];
}

export default function MobileReadPopUp({
  jwt,
  projectSubentry,
  endpoint,
  handleModalClose,
  handleOpen,
  setSubentries,
  allSubentries,
}: PopUpProps) {
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
        onClick={handleModalClose}
        size="small"
      >
        <CloseIcon />
      </IconButton>
      <MobileReadDetail projectSubentry={projectSubentry} endpoint={endpoint} />
      <CardActions>
        <EditMobileButton
          handleOpen={handleOpen}
          projectSubentry={projectSubentry}
        />
        <ProjectSubEntryDeleteMobileButton
          jwt={jwt}
          endpoint={endpoint}
          id={projectSubentry.id}
          handleModalClose={handleModalClose}
          setSubentries={setSubentries}
          allSubentries={allSubentries}
        />
      </CardActions>
    </Card>
  );
}
