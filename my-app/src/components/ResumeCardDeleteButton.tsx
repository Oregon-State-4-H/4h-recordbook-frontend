import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteSection,
  fetchSectionData,
  Section1,
  SectionNumbers,
} from "./API/ResumeAPI";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteResumeMobile({ id }: DeleteButtonProps) {
  let [allSections, setSections] = useState<Section1[]>([]);

  const handleDelete = async (sectionID: string) => {
    try {
      const deleteSucceeded = await deleteSection(sectionID);
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
