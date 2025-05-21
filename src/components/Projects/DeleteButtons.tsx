import React from "react";
// import { getAccessToken } from "@auth0/nextjs-auth0";
import { getAccessToken } from "@/components/DummyUser";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import {
  AnimalProjectTypes,
  deleteSubpageEntry,
  EndpointByDynamicPathSuffix,
} from "@/API/ProjectAPI";

interface DeleteButtonProps {
  id: string;
  subpage: string;
  setEntries: (updatedEntries: AnimalProjectTypes[]) => void;
  allEntries: AnimalProjectTypes[];
}

async function handleDelete({
  id,
  subpage,
  setEntries,
  allEntries,
}: DeleteButtonProps) {
  try {
    const token = await getAccessToken();
    const endpoint: string = EndpointByDynamicPathSuffix(subpage);
    const deleteSucceeded = await deleteSubpageEntry(token, endpoint, id);
    if (deleteSucceeded) {
      const remainingSections: AnimalProjectTypes[] = allEntries.filter(
        (entry) => entry.id !== id
      );
      setEntries(remainingSections);
    }
  } catch (error) {
    throw error;
  }
}

export function DeleteIconButton({
  id,
  subpage,
  setEntries,
  allEntries,
}: DeleteButtonProps) {
  const currProps: DeleteButtonProps = {
    id: id,
    setEntries: setEntries,
    allEntries: allEntries,
    subpage: subpage,
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
  id,
  subpage,
  setEntries,
  allEntries,
}: DeleteButtonProps) {
  const currProps: DeleteButtonProps = {
    id: id,
    setEntries: setEntries,
    allEntries: allEntries,
    subpage: subpage,
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
