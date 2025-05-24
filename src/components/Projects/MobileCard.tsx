import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { AnimalProjectTypes, isExpense } from "@/API/ProjectAPI";
import ResumeCardPreviewContent from "@/components/MobileReadPreview";

interface ResumeCardProps {
  projectSubentry: AnimalProjectTypes;
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
}

export default function ResumeCard({
  projectSubentry,
  handleOpen,
}: ResumeCardProps) {
  const openModal = () => handleOpen(projectSubentry, "read");
  if (isExpense(projectSubentry)) {
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
          <ResumeCardPreviewContent
            year={projectSubentry.date}
            nickname={projectSubentry.items}
          />
          <CardActions>
            <Button onClick={openModal}>View Details</Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}
