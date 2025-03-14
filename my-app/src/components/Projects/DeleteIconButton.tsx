import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteSubpageEntry,
  EndpointByDynamicPathSuffix,
} from "../../API/ProjectAPI";

interface DeleteButtonProps {
  id: string;
  subpage: string;
}

export default function ResumeCardDeleteButton({
  id,
  subpage,
}: DeleteButtonProps) {
  var endpoint: string = EndpointByDynamicPathSuffix(subpage);
  const handleDelete = async () => {
    try {
      const deleteSucceeded = await deleteSubpageEntry(endpoint, id);
      if (deleteSucceeded) {
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <IconButton
      onClick={() => {
        handleDelete();
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}
