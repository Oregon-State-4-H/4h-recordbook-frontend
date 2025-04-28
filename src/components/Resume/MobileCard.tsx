import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { SectionAny } from "@/API/ResumeAPI";
import ResumeCardPreviewContent from "@/components/Resume/MobileReadPreview";

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
