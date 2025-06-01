import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

interface ProjectCardProps {
  label: string;
  handleClick: () => void;
}

export default function ResumeCardPreviewContent({
  label,
  handleClick,
}: ProjectCardProps) {
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
        onClick={handleClick}
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
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              width: "100%",
              fontWeight: "medium",
              color: "rgba(51, 153, 102, 1)",
              textAlign: "center",
            }}
          >
            {label}
          </Typography>
        </Card>
      </Button>
    </Box>
  );
}
