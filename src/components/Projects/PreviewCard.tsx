import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Project } from "@/API/ProjectAPI";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: Project;
  path: string;
}

export default function ResumeCardPreviewContent({
  project,
  path,
}: ProjectCardProps) {
  const router = useRouter();

  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        Width: "100%",
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "20px",
      }}
    >
      <Button
        sx={{
          width: "100%",
          padding: "0px",
          textTransform: "none",
        }}
        onClick={() => router.push(path)}
      >
        <Card
          sx={{
            backgroundColor: "rgba(255,255,255,1)",
            borderRadius: 1,
            boxShadow: 5,
            p: 4,
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent>
            <Typography gutterBottom sx={{ fontSize: 14, width: "100%" }}>
              {project.year}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                width: "100%",
                fontWeight: "medium",
                color: "rgba(51, 153, 102, 1)",
              }}
            >
              {project.name}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 12, width: "100%" }}>
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      </Button>
    </Box>
  );
}
