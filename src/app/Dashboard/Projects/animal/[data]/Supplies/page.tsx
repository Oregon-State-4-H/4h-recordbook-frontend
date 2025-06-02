"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
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
import ProjectTableRow from "@/components/Projects/TableRow";
import CreateButton from "@/components/CreateIconButton";
import { DynamicPopUpSubpage } from "@/components/Projects/DynamicPopUp";
import { MobileCardDetail } from "@/components/Projects/MobileCard";
import MobileReadPopUp from "@/components/Projects/MobileReadPopUp";
import subpageOutline from "@/components/Projects/SubpageOutline.json";
import {
  Supply,
  AnimalProjectTypes,
  fetchSubpageEntriesByProject,
  emptySupply,
  fetchProject,
} from "@/API/ProjectAPI";

export default function AnimalSupplies() {
  const hasRun = useRef(false);
  const hasRun2 = useRef(false);

  const { updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const { data } = useParams<{ data: string }>();
  const [validId, setValidId] = useState(true);
  const [accessToken, setAccessToken] = useState("");

  // states for all subpage entries
  const [allSubpageEntries, setAllSubpageEntries] = useState<
    AnimalProjectTypes[]
  >([]);
  const [subpageDataLoaded, setSubpageDataLoaded] = useState(false);

  // state for multipurpose input modal
  const [inputModal, setinputModal] = React.useState(false);
  const [inputModalEntry, setinputModalEntry] =
    useState<AnimalProjectTypes>(emptySupply);
  const [inputModalPurpose, setinputModalPurpose] = useState<string>("");

  // state for mobile read detail modal
  const [readModal, setReadModal] = React.useState(false);
  const [readModalEntry, setReadModalEntry] =
    useState<AnimalProjectTypes>(emptySupply);

  const handleReadModalClose = () => {
    setReadModal(false);
    setReadModalEntry(emptySupply);
  };

  const handleinputModalClose = () => {
    setinputModal(false);
    setinputModalEntry(emptySupply);
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
              const subpageData = await fetchSubpageEntriesByProject<Supply>(
                token,
                "supply",
                data
              );
              if (typeof subpageData != "string") {
                setAllSubpageEntries(subpageData);
                setSubpageDataLoaded(true);
                // toggle to trigger bookmarks icon to check if page is bookmarked
                updateBookmarks(true);
              }
            }
          } else {
            // check if project id is valid
            const projectData = await fetchProject(accessToken, data);
            if (typeof projectData == "string") {
              // backend returns "item not found string" when project id is invalid
              setValidId(false);
              setSubpageDataLoaded(true);
            } else {
              const subpageData = await fetchSubpageEntriesByProject<Supply>(
                accessToken,
                "supply",
                data
              );
              if (typeof subpageData != "string") {
                setAllSubpageEntries(subpageData);
                setSubpageDataLoaded(true);
                // toggle to trigger bookmarks icon to check if page is bookmarked
                updateBookmarks(true);
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  });

  // when page is loaded, update title
  useEffect(() => {
    if (!hasRun2.current && subpageDataLoaded) {
      hasRun2.current = true;

      if (validId) {
        const navbarContextPageValues: NavbarValues = {
          mobileTitle: "Supply",
          desktopTitle: "Project Supply",
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
  if (validId && subpageDataLoaded) {
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
          <CreateButton
            handleOpen={() => {
              handleinputModalOpen(emptySupply, "create");
            }}
          />
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
                  {subpageOutline.supply.headers.map((item, index) => (
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
                    jwt={accessToken}
                    key={index}
                    index={index}
                    projectEntry={item}
                    subpage="Supply"
                    handleOpen={handleinputModalOpen}
                    handleModalClose={handleReadModalClose}
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
                <MobileCardDetail
                  jwt={accessToken}
                  endpoint="supply"
                  projectSubentry={item}
                  handleModalClose={handleReadModalClose}
                  handleOpen={handleinputModalOpen}
                  setSubentries={setAllSubpageEntries}
                  allSubentries={allSubpageEntries}
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
          <DynamicPopUpSubpage
            subpage="Supply"
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
            endpoint="supply"
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
