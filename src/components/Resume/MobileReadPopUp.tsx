import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MobileReadDetail from "./MobileReadDetail";
import EditMobileButton from "./EditMobileButton";
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
    </Card>
  );
}
