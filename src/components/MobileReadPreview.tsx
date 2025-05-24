import * as React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

interface ResumeRowProps {
  year: string;
  nickname: string;
}

export default function ResumeCardPreviewContent({
  year,
  nickname,
}: ResumeRowProps) {
  return (
    <CardContent>
      <Typography gutterBottom sx={{ fontSize: 14 }}>
        {year}
      </Typography>
      <Typography variant="h5" component="div">
        {nickname}
      </Typography>
    </CardContent>
  );
}
