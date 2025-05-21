"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { useParams, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import TitleOnly from "@/components/TitleOnly";
import {
  Project,
  isProject,
  fetchAllProjects,
  fetchProject,
} from "@/API/ProjectAPI";
import SubpageCard from "@/components/Projects/SubpageCard";
import Grid from "@mui/material/Grid";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";
import { useProject } from "@/context/ProjectContext";

export default function ProjectDetail() {
  const { updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const params = useParams<{ tag: string; item: string }>();
  const { data }: any = params;
  const [validId, setValidId] = useState(true);
  const [projectLoaded, setProjectLoaded] = useState(false);
  let [currProject, setProject] = useState<Project>();
  const [accessToken, setAccessToken] = useState("");
  const { updateProjects, currProjectValues, populated } = useProject();
  const pathname = usePathname();
  const hasRun = useRef(false);

  useEffect(() => {
    const getData = async () => {
      try {
        // if the array of all projects is not populated, get project from backend
        if (!populated) {
          console.log("not populated, setting accessToken");
          if (accessToken == "") {
            const token = await getAccessToken();
            setAccessToken(token);
            const projectData = await fetchAllProjects(token);
            updateProjects(projectData);
            var foundProject = projectData.find(
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
            var foundProject = projectData.find(
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
          var foundProject = currProjectValues.find(
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
    };
    getData();
  }, []);

  // when page is loaded, update title
  useEffect(() => {
    if (!hasRun.current && projectLoaded && validId && isProject(currProject)) {
      const navbarContextPageValues: NavbarValues = {
        mobileTitle: "Project Overview",
        desktopTitle: "Project Overview",
        hrefTitle: "/Dashboard",
        mobileTopIcon: "none",
        NavbarLinks: navbarAppLinks,
      };
      updateFunction(navbarContextPageValues);

      // toggle to trigger bookmarks icon to check if page is bookmarked
      updateBookmarks(true);
      hasRun.current = true;
    }
  });

  //goes in body tag, per autogenerated index.html file in public folder
  if (!validId) {
    return <TitleOnly title="Project Not Found" cloverLoader={false} />;
  } else if (projectLoaded && validId && isProject(currProject)) {
    var Subpages: string[] = [];
    switch (currProject.type) {
      case "animal":
        Subpages = [
          "Animals",
          "Feed Record",
          "Feed Inventory",
          "Expense",
          "Supplies",
        ];
        break;
      default:
        break;
    }

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
          </Grid>
        </Box>
      </Box>
    );
  }
}
