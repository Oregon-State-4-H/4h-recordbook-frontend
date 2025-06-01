import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSection, SectionAny } from "@/API/ResumeAPI";
import {
  deleteSubpageEntry,
  AnimalProjectTypes,
  deleteProject,
  Project,
} from "@/API/ProjectAPI";

export interface ProjectDeleteButtonProps {
  jwt: string;
  id: string;
  handleRedirect: () => void;
  setProjects: (updatedProjects: Project[]) => void;
  allProjects: Project[];
}

export async function projectHandleDelete({
  jwt,
  id,
  handleRedirect,
  setProjects,
  allProjects,
}: ProjectDeleteButtonProps) {
  try {
    const deleteSucceeded = await deleteProject(jwt, id);
    if (deleteSucceeded) {
      handleRedirect();
      const remainingProjects: Project[] = allProjects.filter(
        (project) => project.id !== id
      );
      setProjects(remainingProjects);
    }
  } catch (error) {
    throw error;
  }
}

interface ResumeDeleteButtonProps {
  jwt: string;
  id: string;
  handleModalClose: () => void;
  setSections: (updatedEntries: SectionAny[]) => void;
  allSections: SectionAny[];
}

async function resumeHandleDelete({
  jwt,
  id,
  handleModalClose,
  setSections,
  allSections,
}: ResumeDeleteButtonProps) {
  try {
    const deleteSucceeded = await deleteSection(jwt, id);
    if (deleteSucceeded) {
      const remainingSections: SectionAny[] = allSections.filter(
        (section) => section.id !== id
      );
      setSections(remainingSections);
      handleModalClose();
    }
  } catch (error) {
    throw error;
  }
}

export function ResumeDeleteIconButton({
  jwt,
  id,
  handleModalClose,
  setSections,
  allSections,
}: ResumeDeleteButtonProps) {
  const currProps: ResumeDeleteButtonProps = {
    jwt: jwt,
    id: id,
    handleModalClose: handleModalClose,
    setSections: setSections,
    allSections: allSections,
  };

  return (
    <IconButton
      onClick={() => {
        resumeHandleDelete(currProps);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export function ResumeDeleteMobileButton({
  jwt,
  id,
  handleModalClose,
  setSections,
  allSections,
}: ResumeDeleteButtonProps) {
  const currProps: ResumeDeleteButtonProps = {
    jwt: jwt,
    id: id,
    handleModalClose: handleModalClose,
    setSections: setSections,
    allSections: allSections,
  };

  return (
    <Button
      sx={{ width: "50%" }}
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => {
        resumeHandleDelete(currProps);
      }}
    >
      Delete
    </Button>
  );
}

interface ProjectSubEntryDeleteButtonProps {
  jwt: string;
  endpoint: string;
  id: string;
  handleModalClose: () => void;
  setSubentries: (updatedEntries: AnimalProjectTypes[]) => void;
  allSubentries: AnimalProjectTypes[];
}

async function projectSubentryHandleDelete({
  jwt,
  id,
  endpoint,
  handleModalClose,
  setSubentries,
  allSubentries,
}: ProjectSubEntryDeleteButtonProps) {
  try {
    const deleteSucceeded = await deleteSubpageEntry(jwt, endpoint, id);
    if (deleteSucceeded) {
      const remainingSubentries: AnimalProjectTypes[] = allSubentries.filter(
        (section) => section.id !== id
      );
      setSubentries(remainingSubentries);
      handleModalClose();
    }
  } catch (error) {
    throw error;
  }
}

export function ProjectSubEntryDeleteIconButton({
  jwt,
  id,
  endpoint,
  handleModalClose,
  setSubentries,
  allSubentries,
}: ProjectSubEntryDeleteButtonProps) {
  const currProps: ProjectSubEntryDeleteButtonProps = {
    jwt: jwt,
    id: id,
    handleModalClose: handleModalClose,
    endpoint: endpoint,
    setSubentries: setSubentries,
    allSubentries: allSubentries,
  };

  return (
    <IconButton
      onClick={() => {
        projectSubentryHandleDelete(currProps);
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export function ProjectSubEntryDeleteMobileButton({
  jwt,
  id,
  endpoint,
  handleModalClose,
  setSubentries,
  allSubentries,
}: ProjectSubEntryDeleteButtonProps) {
  const currProps: ProjectSubEntryDeleteButtonProps = {
    jwt: jwt,
    endpoint: endpoint,
    handleModalClose: handleModalClose,
    id: id,
    setSubentries: setSubentries,
    allSubentries: allSubentries,
  };

  return (
    <Button
      sx={{ width: "50%" }}
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={() => {
        projectSubentryHandleDelete(currProps);
      }}
    >
      Delete
    </Button>
  );
}
