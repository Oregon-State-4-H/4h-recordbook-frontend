import React from "react";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    // navigate(-1);
    router.back();
  };

  return (
    <IconButton aria-label="back" onClick={handleGoBack}>
      <ArrowBackIcon />
    </IconButton>
  );
}

export default BackButton;
