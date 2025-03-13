import React, { useEffect, useState } from "react";
import NavBarSignedIn from "../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../components/MobileBottomNav";
import ResumeMenus from "../../../components/Resume/MenuOfSections";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { fetchResume, ResumeSections } from "@/API/ResumeAPI";
import PDFPreviewModel from "@/components/Models/PDFPreviewModel";
import PDFFile from "@/components/Reports/Resume/Resume";
import { fetchUser, User } from "@/API/UserAPI";
import { PDFDownloadButton } from "@/components/PDFDownloadButton";
import { BookmarkHeader } from "@/components/BookmarkButton";

const Sections = [
  {
    category: "Involvement Summary",
    section_number_1: "1",
    section_number_2: "2",
    section_description_1: "Involvement",
    section_description_2: "4-H Project/Program Summary",
  },
  {
    category: "Participation",
    section_number_1: "3",
    section_number_2: "4",
    section_description_1: "Activities/Events",
    section_description_2: "Other Community Activities/Events",
  },
  {
    category: "Leadership",
    section_number_1: "5",
    section_number_2: "6",
    section_description_1: "",
    section_description_2: "Other Organizations",
  },
  {
    category: "Citizenship/Community Service",
    section_number_1: "7",
    section_number_2: "8",
    section_description_1: "Participation",
    section_description_2: "Other Participation",
  },
  {
    category: "Communications",
    section_number_1: "9",
    section_number_2: "10",
    section_description_1: "",
    section_description_2: "Other Organizations",
  },
  {
    category: "Contests/Competitions",
    section_number_1: "11",
    section_number_2: "12",
    section_description_1: "Participation",
    section_description_2: "Other Participation",
  },
  {
    category: "Recognitions",
    section_number_1: "13",
    section_number_2: "14",
    section_description_1: "",
    section_description_2: "Other",
  },
];

function Resume() {
  const [showPreview, setShowPreview] = useState(false);
  const [user, setUser] = useState<User>();
  const [resume, setResume] = useState<ResumeSections>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getResume = async () => {
      try {
        const resumeData = await fetchResume();
        setResume(resumeData);
      } catch (error) {
        console.error(error);
      }
    };
    getResume();
  }, []);

  //goes in body tag, per autogenerated index.html file in public folder
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

      <Box>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "block" },
            Width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          My Resume
        </Typography>
      </Box>
      <Box
        sx={{
          display: { md: "block" },
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <Button onClick={() => setShowPreview(true)}>Preview Resume</Button>
        <PDFDownloadButton
          text="Download Resume"
          document={<PDFFile userData={user} resumeData={resume} />}
          fileName={"My 4-H Resume.pdf"}
        />
      </Box>

      {showPreview && (
        <PDFPreviewModel
          title="My 4-H Resume Preview"
          handleClose={() => setShowPreview(false)}
        >
          <PDFFile userData={user} resumeData={resume} />
        </PDFPreviewModel>
      )}

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
            {Sections.map((item, index) => (
              <Box
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
                <ResumeMenus
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
          {Sections.map((item, index) => (
            <Box
              sx={{
                width: "29%",
                justifyContent: "center",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              <ResumeMenus
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
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          height: "25px",
        }}
      ></Box>
      <MobileBottomNav />
    </Box>
  );
}

export default Resume;
