"use client";

import React, { createContext, useContext, useState } from "react";
import { Project } from "@/API/ProjectAPI";

export interface ProjectProp {
  currProjectValues: Project[];
  populated: boolean;
  updateProjects: (values: Project[]) => void;
}

export const bookmarkContextDefaultProp: ProjectProp = {
  currProjectValues: [],
  populated: false,
  updateProjects: () => {},
};

export const ProjectContext = createContext<ProjectProp>(
  bookmarkContextDefaultProp
);

export function useProject() {
  return useContext(ProjectContext);
}

type Props = {
  children: React.ReactNode;
};

export function ProjectProvider({ children }: Props) {
  const [currProjectContext, setCurrProjectContext] = useState<Project[]>([]);
  const [isPopulated, setIsPopulated] = useState<boolean>(false);

  const update = (updatedNavBarValues: Project[]) => {
    setCurrProjectContext(updatedNavBarValues);
    setIsPopulated(true);
  };

  const value: ProjectProp = {
    currProjectValues: currProjectContext,
    populated: isPopulated,
    updateProjects: update,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}
