import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import NavBarSignedIn from "../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../components/MobileBottomNav";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import { Project, fetchProject } from "../../../API/ProjectAPI";

export default function Section() {
  const router = useRouter();
  const projectId = router.asPath
    .replace("/Dashboard/", "")
    .replace("Project/", "");

  const [validId, setValidId] = useState(true);
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
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [router.isReady]);

  if (!router.isReady) {
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

        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "block" },
            Width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Loading ...
        </Typography>

        <MobileBottomNav />
      </Box>
    );
  }

  if (validId) {
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

        <MobileBottomNav />
      </Box>
    );
  } else {
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

        <Typography
          variant="h4"
          sx={{
            Width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Project Not Found
        </Typography>

        <MobileBottomNav />
      </Box>
    );
  }
}
