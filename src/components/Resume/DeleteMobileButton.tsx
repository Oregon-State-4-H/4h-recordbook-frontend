import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSection, Section1 } from "@/API/ResumeAPI";

interface DeleteButtonProps {
  jwt: string;
  id: string;
}

export default function ResumeCardDeleteButton({ jwt, id }: DeleteButtonProps) {
  let [allSections, setSections] = useState<Section1[]>([]);

  const handleDelete = async (sectionID: string) => {
    try {
      const deleteSucceeded = await deleteSection(jwt, sectionID);
      if (deleteSucceeded) {
        setSections((prevSections) =>
          prevSections.filter((section) => section.id !== sectionID)
        );
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Button
      sx={{ width: "50%" }}
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => {
        handleDelete(id);
      }}
    >
      Delete
    </Button>
  );
}
