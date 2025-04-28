"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getAccessToken } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";
import sectionOutline from "@/components/Resume/SectionOutline.json";
import { fetchSectionData, SectionAny, SectionEmpty } from "@/API/ResumeAPI";
import CreateIconButton from "@/components/Resume/CreateIconButton";
import DynamicPopUp from "@/components/Resume/DynamicPopUp";
import ResumeTableRow from "@/components/Resume/TableRow";
import ResumeCard from "@/components/Resume/MobileCard";
import MobileReadPopUp from "@/components/Resume/MobileReadPopUp";
import { StyledTableHeader } from "@/components/StyledTableRow";

export default function Dashboard() {
  const { currNavbarValues, updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const params = useParams<{ tag: string; item: string }>();
  const { data }: any = params;
  let [allSections, setSections] = useState<SectionAny[]>([]);
  let [Title, setTitle] = useState<string>("");
  let [Fields, setFields] = useState<{ [key: string]: string }[]>([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // get section specific values
    switch (data) {
      case "1":
        setTitle(sectionOutline.section1.title);
        setFields(sectionOutline.section1.headers);
        break;
      case "2":
        setTitle(sectionOutline.section2.title);
        setFields(sectionOutline.section2.headers);
        break;
      case "3":
        setTitle(sectionOutline.section3.title);
        setFields(sectionOutline.section3.headers);
        break;
      case "4":
        setTitle(sectionOutline.section4.title);
        setFields(sectionOutline.section4.headers);
        break;
      case "5":
        setTitle(sectionOutline.section5.title);
        setFields(sectionOutline.section5.headers);
        break;
      case "6":
        setTitle(sectionOutline.section6.title);
        setFields(sectionOutline.section6.headers);
        break;
      case "7":
        setTitle(sectionOutline.section7.title);
        setFields(sectionOutline.section7.headers);
        break;
      case "8":
        setTitle(sectionOutline.section8.title);
        setFields(sectionOutline.section8.headers);
        break;
      case "9":
        setTitle(sectionOutline.section9.title);
        setFields(sectionOutline.section9.headers);
        break;
      case "10":
        setTitle(sectionOutline.section10.title);
        setFields(sectionOutline.section10.headers);
        break;
      case "11":
        setTitle(sectionOutline.section11.title);
        setFields(sectionOutline.section11.headers);
        break;
      case "12":
        setTitle(sectionOutline.section12.title);
        setFields(sectionOutline.section12.headers);
        break;
      case "13":
        setTitle(sectionOutline.section13.title);
        setFields(sectionOutline.section13.headers);
        break;
      case "14":
        setTitle(sectionOutline.section14.title);
        setFields(sectionOutline.section14.headers);
        break;
      default:
        setTitle("");
        setFields([]);
        break;
    }

    // Update values of components in layout
    var navbarContextPageValues: NavbarValues = {
      mobileTitle: `Section ${data}`,
      desktopTitle: `Section ${data}`,
      hrefTitle: "/Dashboard",
      mobileTopIcon: "none",
      NavbarLinks: navbarAppLinks,
    };
    updateFunction(navbarContextPageValues);

    // toggle to trigger bookmarks icon to check if page is bookmarked
    updateBookmarks(true);
  }, []);

  // get auth0 jwt and section entries
  useEffect(() => {
    if (accessToken == "") {
      const getSectionData = async () => {
        try {
          const token = await getAccessToken();
          setAccessToken(token);
          const sectionData = await fetchSectionData<SectionAny>(
            token,
            `section${data}`
          );
          setSections(sectionData);
        } catch (error) {
          console.error(error);
        }
      };
      getSectionData();
    }
  }, []);

  const empty: SectionEmpty = {
    id: "",
    section: -1,
    user_id: "",
    created: "",
    updated: "",
  };

  // state for multipurpose input modal
  const [inputModal, setinputModal] = React.useState(false);
  let [inputModalEntry, setinputModalEntry] = useState<SectionAny>(empty);
  let [inputModalPurpose, setinputModalPurpose] = useState<string>("");
  const handleinputModalClose = () => {
    setinputModal(false);
    setinputModalEntry(empty);
    setinputModalPurpose("");
  };
  const handleinputModalOpen = (
    currinputModalEntry: SectionAny,
    purpose: string
  ) => {
    setinputModal(true);
    setinputModalEntry(currinputModalEntry);
    setinputModalPurpose(purpose);
    handleReadModalClose();
  };

  // state for mobile read detail modal
  const [readModal, setReadModal] = React.useState(false);
  let [readModalEntry, setReadModalEntry] = useState<SectionAny>(empty);
  const handleReadModalClose = () => {
    setReadModal(false);
    setReadModalEntry(empty);
  };
  const handleReadModalOpen = (currModalEntry: SectionAny, purpose: string) => {
    setReadModal(true);
    setReadModalEntry(currModalEntry);
    handleinputModalClose();
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

  //goes in body tag, per autogenerated index.html file in public folder
  return (
    <Box className="App">
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "block" },
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {Title}
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
        {/* CreateIconButton returns content in a simularly styled box */}
        <CreateIconButton handleOpen={handleinputModalOpen} />
      </Box>

      {/* desktop view resume entries */}
      <Paper
        sx={{
          width: "90%",
          overflow: "hidden",
          display: { xs: "none", md: "flex" },
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "15px",
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              {/* in the first row of the table, make a cell for each collumn, holding the label */}
              <StyledTableHeader>
                {Fields.map((item, index) => (
                  <TableCell
                    key={index}
                    align="right"
                    sx={{ textAlign: "center", minWidth: 0.5 / Fields.length }}
                  >
                    {item.name}
                  </TableCell>
                ))}
              </StyledTableHeader>
            </TableHead>
            <TableBody>
              {allSections.map((item, index) => (
                <ResumeTableRow
                  key={index}
                  jwt={accessToken}
                  index={index}
                  resumeEntry={item}
                  sectionNumber={data}
                  setSections={setSections}
                  priorEntries={allSections}
                  handleOpen={handleinputModalOpen}
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
        {allSections.length > 0 &&
          allSections.map((item, index) => (
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
              <ResumeCard resumeEntry={item} handleOpen={handleReadModalOpen} />
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
          jwt={accessToken}
          sectionNumber={data}
          setSections={setSections}
          priorEntries={allSections}
          resumeEntry={inputModalEntry}
          handleModalClose={handleinputModalClose}
          purpose={inputModalPurpose}
          handleOpen={handleinputModalOpen}
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
          resumeEntry={readModalEntry}
          handleModalClose={handleReadModalClose}
          handleOpen={handleinputModalOpen}
        />
      </Modal>
    </Box>
  );
}
