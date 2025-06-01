"use client";

import React, { useEffect, useRef, useState } from "react";
import { getAccessToken } from "@auth0/nextjs-auth0";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import MenuOfSections from "@/components/Resume/MenuOfSections";
import { Button } from "@mui/material";
import {
  useNavbar,
  NavbarValues,
  navbarAppLinks,
} from "@/context/NavbarContext";
import { useBookmark } from "@/context/BookmarkContext";
import sectionOutline from "@/components/Resume/SectionOutline.json";
import PDFPreviewModel from "@/components/Reports/PDFPreviewModal";
import PDFFile from "@/components/Reports/Resume/Resume";
import { getUser, User } from "@/API/UserAPI";
import { fetchResume, ResumeSections } from "@/API/ResumeAPI";
import { useResume } from "@/context/ResumeContext";
import { Document, PDFDownloadLink } from "@react-pdf/renderer";

const SectionsData = [
  {
    category: "Involvement Summary",
    section_number_1: "1",
    section_number_2: "2",
    section_description_1: sectionOutline.section1.title,
    section_description_2: sectionOutline.section2.title,
  },
  {
    category: "Participation",
    section_number_1: "3",
    section_number_2: "4",
    section_description_1: sectionOutline.section3.title,
    section_description_2: sectionOutline.section4.title,
  },
  {
    category: "Leadership",
    section_number_1: "5",
    section_number_2: "6",
    section_description_1: sectionOutline.section5.title,
    section_description_2: sectionOutline.section6.title,
  },
  {
    category: "Citizenship/Community Service",
    section_number_1: "7",
    section_number_2: "8",
    section_description_1: sectionOutline.section7.title,
    section_description_2: sectionOutline.section8.title,
  },
  {
    category: "Communications",
    section_number_1: "9",
    section_number_2: "10",
    section_description_1: sectionOutline.section9.title,
    section_description_2: sectionOutline.section10.title,
  },
  {
    category: "Contests/Competitions",
    section_number_1: "11",
    section_number_2: "12",
    section_description_1: sectionOutline.section11.title,
    section_description_2: sectionOutline.section12.title,
  },
  {
    category: "Recognitions",
    section_number_1: "13",
    section_number_2: "14",
    section_description_1: sectionOutline.section13.title,
    section_description_2: sectionOutline.section14.title,
  },
];

export default function Dashboard() {
  const { updateFunction } = useNavbar();
  const { updateBookmarks } = useBookmark();
  const hasRun = useRef(false);
  const hasRun2 = useRef(false);
  const [user, setUser] = useState<User>();
  const [showPreview, setShowPreview] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const EmptyDoc = <Document />;
  const [currDoc, setCurrDoc] = useState(EmptyDoc);
  const { updateResume, SAll, SAllPopulated } = useResume();
  const setPDFData = (resumeData: ResumeSections, userData: User) => {
    updateResume({ ResumeData: resumeData, section: "0" });
    setUser(userData);

    console.log(resumeData);
    console.log(userData);
    if (typeof userData != "undefined") {
      const NewDoc = <PDFFile userData={userData} resumeData={resumeData} />;
      setCurrDoc(NewDoc);
    }
  };

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      const navbarContextPageValues: NavbarValues = {
        mobileTitle: "Resume",
        desktopTitle: "My 4-H Resume",
        hrefTitle: "/Dashboard",
        NavbarLinks: navbarAppLinks,
      };
      updateFunction(navbarContextPageValues);

      // toggle to trigger bookmarks icon to check if page is bookmarked
      updateBookmarks(true);
    }
  }, [updateFunction, updateBookmarks]);

  // get user and resume data for resume preview/download
  const getPDFData = () => {
    if (!hasRun2.current) {
      hasRun2.current = true;

      console.log(SAllPopulated);
      const getData = async () => {
        try {
          if (accessToken == "") {
            if (!SAllPopulated) {
              const token = await getAccessToken();
              setAccessToken(token);
              const userData = await getUser(token);
              const resumeData = await fetchResume(token);
              setPDFData(resumeData, userData);
            } else {
              const token = await getAccessToken();
              setAccessToken(token);
              const userData = await getUser(token);
              setPDFData(SAll, userData);
            }
          } else {
            if (!SAllPopulated) {
              const userData = await getUser(accessToken);
              const resumeData = await fetchResume(accessToken);
              setPDFData(resumeData, userData);
            } else {
              const userData = await getUser(accessToken);
              setPDFData(SAll, userData);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      getData();
    }
  };

  //goes in body tag, per autogenerated index.html file in public folder
  return (
    <Box className="App">
      <Box
        sx={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Stack spacing={2} direction="row">
          {/* first box is placeholder for component that will have preview and download resume pdf */}
          <Button
            variant="outlined"
            onClick={() => {
              getPDFData();
              setShowPreview(true);
            }}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            Preview Resume
          </Button>

          {typeof user != "undefined" && SAllPopulated ? (
            <Button variant="outlined">
              <PDFDownloadLink
                document={currDoc}
                fileName={"My 4-H Resume.pdf"}
              >
                {({ loading }) =>
                  loading ? "Loading document..." : "Download Resume"
                }
              </PDFDownloadLink>
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                getPDFData();
              }}
            >
              Generate Download
            </Button>
          )}

          {showPreview && typeof user != "undefined" && SAllPopulated && (
            <Modal
              open={showPreview && currDoc != EmptyDoc}
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
          {/* CreateIconButton returns content in a simularly styled box */}
        </Stack>
      </Box>
      <Toolbar
        disableGutters
        sx={{
          display: { xs: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            {SectionsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  position: "relative",
                  padding: "20px",
                  Width: "80%",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  paddingBottom: "50px",
                }}
              >
                <MenuOfSections
                  category={item.category}
                  section_number_1={item.section_number_1}
                  section_number_2={item.section_number_2}
                  section_description_1={item.section_description_1}
                  section_description_2={item.section_description_2}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {SectionsData.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "29%",
                justifyContent: "center",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              <MenuOfSections
                category={item.category}
                section_number_1={item.section_number_1}
                section_number_2={item.section_number_2}
                section_description_1={item.section_description_1}
                section_description_2={item.section_description_2}
              />
            </Box>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
}
