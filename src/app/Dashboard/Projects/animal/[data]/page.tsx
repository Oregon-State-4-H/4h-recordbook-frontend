"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { useParams, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import {
  Project,
  isProject,
  fetchAllProjects,
  fetchProject,
} from "@/API/ProjectAPI";
import SubpageCard from "@/components/LinkCard";
import ButtonCard from "@/components/ButtonCard";
import Grid from "@mui/material/Grid";
import {
  projectHandleDelete,
  ProjectDeleteButtonProps,
} from "@/components/DeleteButtons";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";
import { useProject } from "@/context/ProjectContext";

export default function ProjectDetail() {
  const router = useRouter();
  const { updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const { data } = useParams<{ data: string }>();
  const [validId, setValidId] = useState(true);
  const [projectLoaded, setProjectLoaded] = useState(false);
  const [currProject, setProject] = useState<Project>();
  const [accessToken, setAccessToken] = useState("");
  const { updateProjects, currProjectValues, populated } = useProject();
  const pathname = usePathname();
  const hasRun1 = useRef(false);
  const hasRun2 = useRef(false);

  useEffect(() => {
    if (!hasRun1.current) {
      const getData = async () => {
        try {
          // if the array of all projects is not populated, get project from backend
          if (!populated) {
            if (accessToken == "") {
              console.log("not populated, setting accessToken");
              const token = await getAccessToken();
              setAccessToken(token);
              const projectData = await fetchAllProjects(token);
              updateProjects(projectData);
              const foundProject = projectData.find(
                (element) => element.id == data
              );
              if (typeof foundProject != "undefined") {
                setProject(foundProject);
                setProjectLoaded(true);
              }
              // if project not found in array, double check backend
              else {
                const projectData = await fetchProject(token, data);
                if (typeof projectData == "string") {
                  setValidId(false);
                  setProjectLoaded(true);
                } else {
                  setProject(projectData);
                  setProjectLoaded(true);
                }
              }
            } else {
              const projectData = await fetchAllProjects(accessToken);
              updateProjects(projectData);
              const foundProject = projectData.find(
                (element) => element.id == data
              );
              if (typeof foundProject != "undefined") {
                setProject(foundProject);
                setProjectLoaded(true);
              }
              // if project not found in array, double check backend
              else {
                const projectData = await fetchProject(accessToken, data);
                if (typeof projectData == "string") {
                  setValidId(false);
                  setProjectLoaded(true);
                } else {
                  setProject(projectData);
                  setProjectLoaded(true);
                }
              }
            }
          }
          // else the array of all projects is populated, search for project in array
          else {
            if (accessToken == "") {
              const token = await getAccessToken();
              setAccessToken(token);
            }
            const foundProject = currProjectValues.find(
              (element) => element.id == data
            );
            if (typeof foundProject != "undefined") {
              setProject(foundProject);
              setProjectLoaded(true);
            }
            // if project not found in array, double check backend
            else {
              if (accessToken == "") {
                const token = await getAccessToken();
                setAccessToken(token);
                const projectData = await fetchProject(token, data);
                if (typeof projectData == "string") {
                  setValidId(false);
                } else {
                  setProject(projectData);
                  setProjectLoaded(true);
                }
              } else {
                const projectData = await fetchProject(accessToken, data);
                if (typeof projectData == "string") {
                  setValidId(false);
                } else {
                  setProject(projectData);
                  setProjectLoaded(true);
                }
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        hasRun1.current = true;
      };
      getData();
    }
  });

  // when page is loaded, update title
  useEffect(() => {
    if (!hasRun2.current && projectLoaded) {
      hasRun2.current = true;

      if (validId) {
        const navbarContextPageValues: NavbarValues = {
          mobileTitle: "Overview",
          desktopTitle: "Project Overview",
          hrefTitle: "/Dashboard",
          NavbarLinks: navbarAppLinks,
        };
        updateFunction(navbarContextPageValues);

        // toggle to trigger bookmarks icon to check if page is bookmarked
        updateBookmarks(true);
      } else {
        const navbarContextPageValues: NavbarValues = {
          mobileTitle: "Not Found",
          desktopTitle: "Project Not Found",
          hrefTitle: "/Dashboard",
          NavbarLinks: navbarAppLinks,
        };
        updateFunction(navbarContextPageValues);

        // toggle to trigger bookmarks icon to check if page is bookmarked
        updateBookmarks(true);
      }
    }
  });

  //goes in body tag, per autogenerated index.html file in public folder
  if (projectLoaded && validId && isProject(currProject) && accessToken != "") {
    const Subpages = [
      "Animals",
      "Feed Record",
      "Feed Inventory",
      "Expense",
      "Supplies",
    ];

    const deleteProps: ProjectDeleteButtonProps = {
      jwt: accessToken,
      id: data,
      setProjects: updateProjects,
      allProjects: currProjectValues,
      handleRedirect: () => router.push("/Dashboard/Projects"),
    };

    return (
      <Box className="App">
        {/* For every subpage, generate a clickable card */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            width: "100%",
            flexDirection: "column",
            paddingBottom: "50px",
          }}
        >
          {Subpages &&
            Subpages.length > 0 &&
            Subpages.map((item, index) => (
              <SubpageCard
                key={index}
                label={item}
                path={pathname + "/" + item.replaceAll(" ", "")}
              />
            ))}
          <ButtonCard
            key={Subpages.length}
            label="Delete Project"
            handleClick={() => {
              projectHandleDelete(deleteProps);
            }}
          />
        </Box>
        <Box
          sx={{
            width: "90%",
            display: { xs: "none", md: "block" },
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "15px",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={0}
            sx={{
              width: "100%",
            }}
          >
            {Subpages &&
              Subpages.length > 0 &&
              Subpages.map((item, index) => (
                <Grid size={6} key={index}>
                  <SubpageCard
                    label={item}
                    path={pathname + "/" + item.replaceAll(" ", "")}
                  />
                </Grid>
              ))}
            <Grid size={6} key={Subpages.length}>
              <ButtonCard
                key={Subpages.length}
                label="Delete Project"
                handleClick={() => {
                  projectHandleDelete(deleteProps);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}
