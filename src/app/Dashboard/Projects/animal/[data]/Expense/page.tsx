"use client";

import React, { useState, useEffect, useRef } from "react";
// import { getAccessToken } from "@auth0/nextjs-auth0";
import { getAccessToken } from "@/components/DummyUser";
import { useParams, usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import TitleOnly from "@/components/TitleOnly";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";
import { useProject } from "@/context/ProjectContext";
import ProjectTableRow from "@/components/Projects/TableRow";
import CreateButton from "@/components/Projects/CreateIconButton";
import DynamicPopUp from "@/components/Projects/DynamicPopUp";
import MobileCard from "@/components/Projects/MobileCard";
import MobileReadPopUp from "@/components/Projects/MobileReadPopUp";
import subpageOutline from "@/components/Projects/SubpageOutline.json";
import {
  Expense,
  AnimalProjectTypes,
  fetchSubpageEntriesByProject,
  emptyExpense,
  fetchProject,
} from "@/API/ProjectAPI";

export default function AnimalExpenses() {
  const hasRun = useRef(false);

  const { updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const { data } = useParams<{ data: string }>();
  const [validId, setValidId] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const { updateProjects, currProjectValues, populated } = useProject();
  const pathname = usePathname();

  // states for all subpage entries
  let [allSubpageEntries, setAllSubpageEntries] = useState<
    AnimalProjectTypes[]
  >([]);
  const [subpageDataLoaded, setSubpageDataLoaded] = useState(false);

  // state for multipurpose input modal
  const [inputModal, setinputModal] = React.useState(false);
  let [inputModalEntry, setinputModalEntry] =
    useState<AnimalProjectTypes>(emptyExpense);
  let [inputModalPurpose, setinputModalPurpose] = useState<string>("");

  // state for mobile read detail modal
  const [readModal, setReadModal] = React.useState(false);
  const [readModalEntry, setReadModalEntry] =
    useState<AnimalProjectTypes>(emptyExpense);

  const handleReadModalClose = () => {
    setReadModal(false);
    setReadModalEntry(emptyExpense);
  };

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
    handleReadModalClose();
  };

  const handleReadModalOpen = (currModalEntry: AnimalProjectTypes) => {
    setReadModal(true);
    setReadModalEntry(currModalEntry);
    handleinputModalClose();
  };

  useEffect(() => {
    if (!hasRun.current) {
      const getData = async () => {
        hasRun.current = true;

        try {
          // if the array of all projects is not populated, get project from backend
          if (accessToken == "") {
            const token = await getAccessToken();
            setAccessToken(token);

            // check if project id is valid
            const projectData = await fetchProject(token, data);
            if (typeof projectData == "string") {
              // backend returns "item not found string" when project id is invalid
              setValidId(false);
              setSubpageDataLoaded(true);
            } else {
              const subpageData = await fetchSubpageEntriesByProject<Expense>(
                token,
                "expense",
                data
              );
              setAllSubpageEntries(subpageData);
              setSubpageDataLoaded(true);
              // toggle to trigger bookmarks icon to check if page is bookmarked
              updateBookmarks(true);
            }
          } else {
            // check if project id is valid
            const projectData = await fetchProject(accessToken, data);
            if (typeof projectData == "string") {
              // backend returns "item not found string" when project id is invalid
              setValidId(false);
              setSubpageDataLoaded(true);
            } else {
              const subpageData = await fetchSubpageEntriesByProject<Expense>(
                accessToken,
                "expense",
                data
              );
              setAllSubpageEntries(subpageData);
              setSubpageDataLoaded(true);
              // toggle to trigger bookmarks icon to check if page is bookmarked
              updateBookmarks(true);
            }
          }
        } catch (error) {
          console.log(error);
        }
      };
      var navbarContextPageValues: NavbarValues = {
        mobileTitle: "Project Expense",
        desktopTitle: "Project Expense",
        hrefTitle: "/Dashboard",
        mobileTopIcon: "none",
        NavbarLinks: navbarAppLinks,
      };

      updateFunction(navbarContextPageValues);
      getData();
    }
  });

  //goes in body tag, per autogenerated index.html file in public folder
  if (!validId) {
    console.log("Invalid project id else statement");
    return <TitleOnly title="Project Not Found" cloverLoader={false} />;
  } else if (validId && subpageDataLoaded) {
    return (
      <Box className="App">
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
            display: { xs: "none", md: "flex" },
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
                    key={index}
                    index={index}
                    projectEntry={item}
                    subpage="Expense"
                    handleOpen={handleinputModalOpen}
                    priorEntries={allSubpageEntries}
                    setEntries={setAllSubpageEntries}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* mobile view resume entries */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            width: "100%",
            flexDirection: "column",
            paddingBottom: "50px",
          }}
        >
          {allSubpageEntries.length > 0 &&
            allSubpageEntries.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  position: "relative",
                  Width: "80%",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  paddingBottom: "20px",
                }}
              >
                <MobileCard
                  projectSubentry={item}
                  handleOpen={handleReadModalOpen}
                />
              </Box>
            ))}
        </Box>
        <Modal
          open={inputModal}
          onClose={handleinputModalClose}
          aria-labelledby="input-modal-title"
          aria-describedby="input-modal-description"
        >
          <DynamicPopUp
            subpage="Expense"
            subpageEntry={inputModalEntry}
            handleModalClose={handleinputModalClose}
            purpose={inputModalPurpose}
            project_id={data}
            setSubpageEntries={setAllSubpageEntries}
            priorSubpageEntries={allSubpageEntries}
          />
        </Modal>
        <Modal
          open={readModal}
          onClose={handleReadModalClose}
          aria-labelledby="read-modal-title"
          aria-describedby="read-modal-description"
        >
          <MobileReadPopUp
            jwt={accessToken}
            endpoint="expense"
            projectSubentry={readModalEntry}
            handleModalClose={handleReadModalClose}
            handleOpen={handleinputModalOpen}
            setSubentries={setAllSubpageEntries}
            allSubentries={allSubpageEntries}
          />
        </Modal>
      </Box>
    );
  }
}
