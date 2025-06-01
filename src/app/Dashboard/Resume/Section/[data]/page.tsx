"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { getAccessToken } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Button } from "@mui/material";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";
import { useResume, ResumeValues } from "@/context/ResumeContext";
import sectionOutline from "@/components/Resume/SectionOutline.json";
import { fetchSectionData, SectionAny, SectionEmpty } from "@/API/ResumeAPI";
import CreateIconButton from "@/components/Resume/CreateIconButton";
import DynamicPopUp from "@/components/Resume/DynamicPopUp";
import ResumeTableRow from "@/components/Resume/TableRow";
import ResumeCard from "@/components/Resume/MobileCard";
import MobileReadPopUp from "@/components/Resume/MobileReadPopUp";
import { StyledTableHeader } from "@/components/StyledTableRow";
import PDFPreviewModel from "@/components/Reports/PDFPreviewModal";
import { getUser, User } from "@/API/UserAPI";
import Section1 from "@/components/Reports/Resume/Section1";
import Section2 from "@/components/Reports/Resume/Section2";
import Section3 from "@/components/Reports/Resume/Section3";
import Section4 from "@/components/Reports/Resume/Section4";
import Section5 from "@/components/Reports/Resume/Section5";
import Section6 from "@/components/Reports/Resume/Section6";
import Section7 from "@/components/Reports/Resume/Section7";
import Section8 from "@/components/Reports/Resume/Section8";
import Section9 from "@/components/Reports/Resume/Section9";
import Section10 from "@/components/Reports/Resume/Section10";
import Section11 from "@/components/Reports/Resume/Section11";
import Section12 from "@/components/Reports/Resume/Section12";
import Section13 from "@/components/Reports/Resume/Section13";
import Section14 from "@/components/Reports/Resume/Section14";
import { Document, PDFDownloadLink } from "@react-pdf/renderer";

const sectionComponents = {
  "1": Section1,
  "2": Section2,
  "3": Section3,
  "4": Section4,
  "5": Section5,
  "6": Section6,
  "7": Section7,
  "8": Section8,
  "9": Section9,
  "10": Section10,
  "11": Section11,
  "12": Section12,
  "13": Section13,
  "14": Section14,
};

type SectionKey = keyof typeof sectionComponents;

function isSectionKey(key: string): key is SectionKey {
  return key in sectionComponents;
}

export default function Dashboard() {
  const { data } = useParams<{ data: string }>();
  const hasRun1 = useRef(false);
  const hasRun2 = useRef(false);
  const hasRun3 = useRef(false);
  const hasRun4 = useRef(false);
  const { updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const { updateResume, Sections } = useResume();
  const [user, setUser] = useState<User>();
  const [showPreview, setShowPreview] = useState(false);
  const [Title, setTitle] = useState<string>("");
  const [Fields, setFields] = useState<{ [key: string]: string }[]>([]);
  const [accessToken, setAccessToken] = useState("");
  const [allSectionEntries, setSectionEntries] = useState<SectionAny[]>(
    Sections[data].SectionData
  );
  const EmptyDoc = <Document />;
  const [currDoc, setCurrDoc] = useState(EmptyDoc);

  // set section specific JSON for title and Headers
  useEffect(() => {
    if (!hasRun1.current) {
      hasRun1.current = true;
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
    }
  }, [data]);

  // get section specific data
  useEffect(() => {
    if (!hasRun2.current) {
      hasRun2.current = true;

      // get auth0 jwt and section entries
      const getSectionData = async () => {
        try {
          console.log("section number string: ", data);
          console.log(
            "data exsists for section?",
            Sections[data].SectionPopulated
          );
          if (accessToken == "") {
            const token = await getAccessToken();
            setAccessToken(token);
            if (!Sections[data].SectionPopulated) {
              const sectionData = await fetchSectionData<SectionAny>(
                token,
                `section${data}`
              );
              setSections(sectionData);
            }
          } else {
            if (!Sections[data].SectionPopulated) {
              const sectionData = await fetchSectionData<SectionAny>(
                accessToken,
                `section${data}`
              );
              setSections(sectionData);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      getSectionData();
    }
  });

  // get user and resume data for resume preview/download
  useEffect(() => {
    if (!hasRun3.current) {
      hasRun3.current = true;

      const getData = async () => {
        try {
          if (accessToken == "") {
            const token = await getAccessToken();
            setAccessToken(token);

            const userData = await getUser(token);
            setUser(userData);

            const resumeData = await fetchSectionData<SectionAny>(
              token,
              "section" + data
            );
            updateResume({ ResumeData: resumeData, section: "0" });
          } else {
            const userData = await getUser(accessToken);
            setUser(userData);

            const resumeData = await fetchSectionData<SectionAny>(
              accessToken,
              "section" + data
            );
            updateResume({ ResumeData: resumeData, section: "0" });
          }
        } catch (error) {
          console.error(error);
        }
      };
      getData();
    }
  });

  // Update title in Navbar
  useEffect(() => {
    if (!hasRun4.current) {
      hasRun4.current = true;
      // Update values of components in layout
      const navbarContextPageValues: NavbarValues = {
        mobileTitle: `Section ${data}`,
        desktopTitle: `Section ${data}`,
        hrefTitle: "/Dashboard",
        NavbarLinks: navbarAppLinks,
      };
      updateFunction(navbarContextPageValues);
      // toggle to trigger bookmarks icon to check if page is bookmarked
      updateBookmarks(true);
    }
  });

  const setSections = (SectionEntries: SectionAny[]) => {
    setSectionEntries(SectionEntries);
    const newResumeValues: ResumeValues = {
      ResumeData: SectionEntries,
      section: data,
    };
    updateResume(newResumeValues);

    if (isSectionKey(data)) {
      const PDFDoc = sectionComponents[data];
      const NewDoc = (
        <Document>
          <PDFDoc tableData={SectionEntries} />
        </Document>
      );
      setCurrDoc(NewDoc);
    }
  };

  const empty: SectionEmpty = {
    id: "",
    section: -1,
    user_id: "",
    created: "",
    updated: "",
  };

  // state for multipurpose input modal
  const [inputModal, setinputModal] = React.useState(false);
  const [inputModalEntry, setinputModalEntry] = useState<SectionAny>(empty);
  const [inputModalPurpose, setinputModalPurpose] = useState<string>("");

  // state for mobile read detail modal
  const [readModal, setReadModal] = React.useState(false);
  const [readModalEntry, setReadModalEntry] = useState<SectionAny>(empty);

  const handleReadModalClose = () => {
    setReadModal(false);
    setReadModalEntry(empty);
  };
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

  const handleReadModalOpen = (currModalEntry: SectionAny) => {
    setReadModal(true);
    setReadModalEntry(currModalEntry);
    handleinputModalClose();
  };

  const handlePDFModalOpen = () => {
    handleinputModalClose();
    handleReadModalClose();
    setShowPreview(true);
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
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Stack spacing={2} direction="row">
          {/* first box is placeholder for component that will have preview and download resume pdf */}
          <Button
            onClick={handlePDFModalOpen}
            variant="outlined"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            Preview Section PDF
          </Button>
          {typeof user != "undefined" && Sections[data].SectionPopulated && (
            <Button variant="outlined">
              <PDFDownloadLink
                document={currDoc}
                fileName={"Resume Section " + data + ".pdf"}
              >
                {({ loading }) =>
                  loading ? "Loading document..." : "Download Section PDF"
                }
              </PDFDownloadLink>
            </Button>
          )}

          {showPreview &&
            typeof user != "undefined" &&
            Sections[data].SectionPopulated && (
              <Modal
                open={showPreview}
                onClose={() => setShowPreview(false)}
                aria-labelledby="preview-modal-title"
                aria-describedby="preview-modal-description"
              >
                <PDFPreviewModel
                  handleClose={() => setShowPreview(false)}
                  doc={currDoc}
                />
              </Modal>
            )}
        </Stack>

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
                    sx={{
                      textAlign: "center",
                      minWidth: 0.5 / Fields.length,
                    }}
                  >
                    {item.name}
                  </TableCell>
                ))}
              </StyledTableHeader>
            </TableHead>
            <TableBody>
              {allSectionEntries.map((item, index) => (
                <ResumeTableRow
                  key={index}
                  jwt={accessToken}
                  index={index}
                  handleModalClose={handleinputModalClose}
                  resumeEntry={item}
                  setSections={setSections}
                  priorEntries={allSectionEntries}
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
        {allSectionEntries.length > 0 &&
          allSectionEntries.map((item, index) => (
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
          sectionNumber={data}
          setSections={setSections}
          priorEntries={allSectionEntries}
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
          setSections={setSections}
          allSections={allSectionEntries}
        />
      </Modal>
    </Box>
  );
}
