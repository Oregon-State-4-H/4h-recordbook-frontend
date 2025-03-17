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
import NavBarSignedIn from "../../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../../components/MobileBottomNav";
import TitleOnly from "../../../../../components/Projects/TitleOnly";
import ProjectTableRow from "../../../../../components/Projects/TableRow";
import CreateButton from "../../../../../components/Projects/CreateIconButton";
import { BookmarkHeader } from "@/components/Bookmarks";
import DynamicPopUp from "@/components/Projects/DynamicPopUp";
import { EndpointByDynamicPathSuffix } from "@/API/ProjectAPI";
import subpageOutline from "../../SubpageOutline.json";

import {
  Expense,
  AnimalProjectTypes,
  fetchSubpageEntriesByProject,
  emptyExpense,
} from "../../../../../API/ProjectAPI";
import SubpageCard from "../../../../../components/Projects/SubpageCard";
import Grid from "@mui/material/Grid2";

export default function Section() {
  const router = useRouter();
  var projectId = "";
  if (router.isReady) {
    projectId = router.asPath
      .substring(0, router.asPath.lastIndexOf("/"))
      .replace("/Dashboard/", "")
      .replace("Projects/animal/", "")
      .replace("/Supplies", "");
    console.log(projectId);
  }

  // states for all subpage entries
  let [allSubpageEntries, setAllSubpageEntries] = useState<Expense[]>([]);
  const [validSubpage, setValidSubpage] = useState(true);
  const [subpageDataLoaded, setSubpageDataLoaded] = useState(false);

  // states for how entry data should be displayed
  const [displayLinks, setDisplayLinks] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);
  const displayAsLinks = () => {
    setDisplayLinks(true);
    setDisplayDetail(false);
  };
  const displayAsDetail = () => {
    setDisplayLinks(false);
    setDisplayDetail(true);
  };

  // state for multipurpose input modal
  const [inputModal, setinputModal] = React.useState(false);
  let [inputModalEntry, setinputModalEntry] =
    useState<AnimalProjectTypes>(emptyExpense);
  let [inputModalPurpose, setinputModalPurpose] = useState<string>("");
  const handleinputModalClose = () => {
    setinputModal(false);
    setinputModalEntry(emptyExpense);
    setinputModalPurpose("");
  };
  const handleinputModalOpen = (
    currinputModalEntry: AnimalProjectTypes,
    purpose: string
  ) => {
    setinputModal(true);
    setinputModalEntry(currinputModalEntry);
    setinputModalPurpose(purpose);
  };

  // state for multipurpose snackbar alert
  const [alert, setAlert] = React.useState(false);
  let [alertText, setAlertText] = useState<String>("");
  const handleAlertClose = () => {
    setAlert(false);
    setAlertText("");
  };
  const handleAlertOpen = (currAlertText: string) => {
    setAlert(true);
    setAlertText(currAlertText);
  };

  useEffect(() => {
    if (!router.isReady) return;

    const getData = async () => {
      var subpagePathSuffix = router.asPath.substring(
        router.asPath.lastIndexOf("/") + 1
      );
      var subpageTypeEndpoint: string =
        EndpointByDynamicPathSuffix(subpagePathSuffix);
      console.log("subpagePathSuffix: ", subpagePathSuffix);
      console.log("subpageTypeEndpoint: ", subpageTypeEndpoint);
      try {
        const subpageData = await fetchSubpageEntriesByProject<Expense>(
          subpageTypeEndpoint,
          projectId
        );
        setAllSubpageEntries(subpageData);
        setSubpageDataLoaded(true);
      } catch (error) {
        setValidSubpage(false);
        console.log(error);
      }
    };
    getData();
  }, [router.isReady]);

  if (!validSubpage) {
    return (
      <TitleOnly
        title={
          router.asPath.substring(router.asPath.lastIndexOf("/") + 1) +
          " Page Not Found"
        }
        cloverLoader={false}
      />
    );
  } else if (!router.isReady || !subpageDataLoaded) {
    return <TitleOnly title="Loading..." cloverLoader={true} />;
  } else if (subpageDataLoaded && validSubpage) {
    console.log(allSubpageEntries);

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
          {router.asPath.substring(router.asPath.lastIndexOf("/") + 1)}
        </Typography>
        <Box
          sx={{
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* first box is placeholder for component that will have preview and download resume pdf */}
          <Box
            sx={{
              width: "50%",
              margin: "0px",
              padding: "0px",
            }}
          ></Box>
          <CreateButton handleOpen={handleinputModalOpen} />
        </Box>
        <Paper
          sx={{
            width: "90%",
            overflow: "hidden",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "15px",
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                {/* in the first row of the table, make a cell for each collumn, holding the label */}
                <TableRow>
                  {subpageOutline.expense.headers.map((item, index) => (
                    <TableCell
                      key={index}
                      align="right"
                      sx={{
                        textAlign: "center",
                        minWidth: 0.5 / allSubpageEntries.length,
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {allSubpageEntries.map((item, index) => (
                  <ProjectTableRow
                    index={index}
                    projectEntry={item}
                    subpage={router.asPath.substring(
                      router.asPath.lastIndexOf("/") + 1
                    )}
                    handleOpen={handleinputModalOpen}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Modal
          open={inputModal}
          onClose={handleinputModalClose}
          aria-labelledby="input-modal-title"
          aria-describedby="input-modal-description"
        >
          <DynamicPopUp
            subpage={router.asPath.substring(
              router.asPath.lastIndexOf("/") + 1
            )}
            // setSections={setAllSubpageEntries}
            priorEntries={allSubpageEntries}
            subpageEntry={inputModalEntry}
            handleModalClose={handleinputModalClose}
            purpose={inputModalPurpose}
            handleOpen={handleinputModalOpen}
            project_id={projectId}
          />
        </Modal>
        <MobileBottomNav />
      </Box>
    );
  }
}
