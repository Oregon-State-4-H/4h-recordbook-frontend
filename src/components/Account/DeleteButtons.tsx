import React from "react";
// import { getAccessToken } from "@auth0/nextjs-auth0";
import { getAccessToken } from "@/components/DummyUser";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { deleteUser } from "@/API/UserAPI";
import { redirect } from "next/navigation";

async function handleDelete() {
  try {
    const token = await getAccessToken();
    const deleteSucceeded = await deleteUser(token);
    if (deleteSucceeded) {
      redirect("/auth/logout");
    }
  } catch (error) {
    throw error;
  }
}

export function DeleteIconButton() {
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

export function DeleteMobileButton() {
  return (
    <Button
      sx={{ width: "50%" }}
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => {
        handleDelete();
      }}
    >
      Delete
    </Button>
  );
}
