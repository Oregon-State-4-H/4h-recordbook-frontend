import * as React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { AnimalProjectTypes, isExpense, isAnimal } from "@/API/ProjectAPI";

interface ResumeRowProps {
  projectSubentry: AnimalProjectTypes;
}

export default function ResumeCardModalContent({
  projectSubentry,
}: ResumeRowProps) {
  if (isExpense(projectSubentry)) {
    return (
      <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {projectSubentry.date}
        </Typography>
        <Typography variant="h5" component="div" marginBottom="20px">
          {projectSubentry.items}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Quantity:
        </Typography>
        <Typography variant="body1" marginBottom="10px">
          {projectSubentry.quantity}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Cost:
        </Typography>
        <Typography variant="body1" marginBottom="10px">
          {projectSubentry.cost}
        </Typography>
      </CardContent>
    );
  }
}
