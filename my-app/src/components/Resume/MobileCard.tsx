import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import EditMobileButton from "./EditMobileButton";
import DeleteMobileButton from "./DeleteMobileButton";
import CloseIcon from "@mui/icons-material/Close";
import { SectionAny } from "../../API/ResumeAPI";
import ResumeCardPreviewContent from "./MobileReadPreview";
import ResumeCardModalContent from "./MobileReadDetail";

interface ResumeCardProps {
  resumeEntry: SectionAny;
  handleOpen: (currEntry: SectionAny, purpose: string) => void;
}

export default function ResumeCard({
  resumeEntry,
  handleOpen,
}: ResumeCardProps) {
  const openModal = () => handleOpen(resumeEntry, "read");

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: 1,
          boxShadow: 5,
          p: 4,
        }}
      >
        <ResumeCardPreviewContent resumeEntry={resumeEntry} />
        <CardActions>
          <Button onClick={openModal}>View Details</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
