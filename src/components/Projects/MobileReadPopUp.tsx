import React from "react";
import CardActions from "@mui/material/CardActions";
import MobileReadDetail from "@/components/Projects/MobileReadDetail";
import EditMobileButton from "@/components/Projects/EditMobileButton";
import { ProjectSubEntryDeleteMobileButton } from "@/components/DeleteButtons";
import { OverlayModel } from "@/components/Resume/OverlayModal";
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
    <OverlayModel handleClose={handleModalClose}>
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
    </OverlayModel>
  );
}
