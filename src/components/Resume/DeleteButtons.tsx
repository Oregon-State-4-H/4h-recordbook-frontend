import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSection, SectionAny } from "@/API/ResumeAPI";

interface DeleteButtonProps {
  jwt: string;
  id: string;
  setSections: (updatedEntries: SectionAny[]) => void;
  allSections: SectionAny[];
}

async function handleDelete({
  jwt,
  id,
  setSections,
  allSections,
}: DeleteButtonProps) {
  try {
    const deleteSucceeded = await deleteSection(jwt, id);
    if (deleteSucceeded) {
      const remainingSections: SectionAny[] = allSections.filter(
        (section) => section.id !== id
      );
      setSections(remainingSections);
    }
  } catch (error) {
    throw error;
  }
}

export function DeleteIconButton({
  jwt,
  id,
  setSections,
  allSections,
}: DeleteButtonProps) {
  const currProps: DeleteButtonProps = {
    jwt: jwt,
    id: id,
    setSections: setSections,
    allSections: allSections,
  };

  return (
    <IconButton
      onClick={() => {
        handleDelete(currProps);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export function DeleteMobileButton({
  jwt,
  id,
  setSections,
  allSections,
}: DeleteButtonProps) {
  const currProps: DeleteButtonProps = {
    jwt: jwt,
    id: id,
    setSections: setSections,
    allSections: allSections,
  };

  return (
    <Button
      sx={{ width: "50%" }}
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => {
        handleDelete(currProps);
      }}
    >
      Delete
    </Button>
  );
}
