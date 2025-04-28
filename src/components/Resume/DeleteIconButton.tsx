import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSection, Section1 } from "../../API/ResumeAPI";

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
    <IconButton
      onClick={() => {
        handleDelete(id);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}
