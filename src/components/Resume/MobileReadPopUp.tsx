import React from "react";
import CardActions from "@mui/material/CardActions";
import { OverlayModel } from "@/components/OverlayModal";
import MobileReadDetail from "@/components/Resume/MobileReadDetail";
import EditMobileButton from "@/components/Resume/EditMobileButton";
import { ResumeDeleteMobileButton } from "@/components/DeleteButtons";
import { SectionAny } from "@/API/ResumeAPI";

interface PopUpProps {
  jwt: string;
  resumeEntry: SectionAny;
  handleModalClose: () => void;
  handleOpen: (currEntry: SectionAny, purpose: string) => void;
  setSections: (updatedEntries: SectionAny[]) => void;
  allSections: SectionAny[];
}

export default function MobileReadPopUp({
  jwt,
  resumeEntry,
  handleModalClose,
  handleOpen,
  setSections,
  allSections,
}: PopUpProps) {
  return (
    <OverlayModel handleClose={handleModalClose}>
      <MobileReadDetail resumeEntry={resumeEntry} />
      <CardActions>
        <EditMobileButton handleOpen={handleOpen} resumeEntry={resumeEntry} />
        <ResumeDeleteMobileButton
          jwt={jwt}
          id={resumeEntry.id}
          handleModalClose={handleModalClose}
          setSections={setSections}
          allSections={allSections}
        />
      </CardActions>
    </OverlayModel>
  );
}
