import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBarSignedIn from "../../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../../components/MobileBottomNav";
import TitleOnly from "../../../../../components/Projects/TitleOnly";
import {
  Project,
  isProject,
  fetchProject,
} from "../../../../../API/ProjectAPI";
import SubpageCard from "../../../../../components/Projects/SubpageCard";
import Grid from "@mui/material/Grid2";
import { BookmarkHeader } from "@/components/Bookmarks";

export default function Section() {
  const router = useRouter();
  var projectId = "";
  if (router.isReady) {
    projectId = router.asPath
      .replace("/Dashboard/", "")
      .replace("Projects/animal/", "");
  }

  const [validId, setValidId] = useState(true);
  const [projectLoaded, setProjectLoaded] = useState(false);
  let [currProject, setProject] = useState<Project>();

  useEffect(() => {
    if (!router.isReady) return;

    const getData = async () => {
      try {
        const projectData = await fetchProject(projectId);
        if (typeof projectData == "string") {
          setValidId(false);
        } else {
          setProject(projectData);
          setProjectLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [router.isReady]);
  if (!validId) {
    return <TitleOnly title="Project Not Found" cloverLoader={false} />;
  } else if (!router.isReady || !projectLoaded) {
    return <TitleOnly title="Loading..." cloverLoader={true} />;
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
    console.log(currProject);

    return (
      <Box className="App">
        <NavBarSignedIn />

        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("xs")]: { height: "20px" },
            [theme.breakpoints.up("sm")]: { height: "25px" },
            [theme.breakpoints.up("md")]: { height: "30px" },
            [theme.breakpoints.up("lg")]: { height: "35px" },
            [theme.breakpoints.up("xl")]: { height: "40px" },
          })}
        ></Box>
        <BookmarkHeader />
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "block" },
            Width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Project Overview
        </Typography>

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
            Subpages.map((item) => (
              <SubpageCard
                label={item}
                path={router.asPath + "/" + item.replaceAll(" ", "")}
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
              Subpages.map((item) => (
                <Grid size={6}>
                  <SubpageCard
                    label={item}
                    path={router.asPath + "/" + item.replaceAll(" ", "")}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>

        <MobileBottomNav />
      </Box>
    );
  }
}
