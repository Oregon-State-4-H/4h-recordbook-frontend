import * as React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { SectionAny, isS2 } from "../../API/ResumeAPI";

interface ResumeRowProps {
  resumeEntry: SectionAny;
}

export default function ResumeTableCells({ resumeEntry }: ResumeRowProps) {
  if (isS2(resumeEntry)) {
    return (
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {resumeEntry.year}
        </Typography>
        <Typography variant="h5" component="div">
          {resumeEntry.project_name}
        </Typography>
      </CardContent>
    );
  } else {
    return (
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {resumeEntry.year}
        </Typography>
        <Typography variant="h5" component="div">
          {resumeEntry.nickname}
        </Typography>
      </CardContent>
    );
  }
}
