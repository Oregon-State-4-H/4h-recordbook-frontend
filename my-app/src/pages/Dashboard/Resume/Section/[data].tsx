import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import NavBarSignedIn from "../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../components/MobileBottomNav";
import ResumeCreate1 from "../../../../components/ResumeCreate1";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ResumeTableRow from "../../../../components/Resume/ResumeTableRow";
import ResumeCard from "../../../../components/Resume/ResumeCard";
import sectionOutline from "./sectionOutline.json";
import { fetchSectionData, SectionAny } from "../../../../API/ResumeAPI";

export default function Section() {
  const router = useRouter();
  const [isPageReady, setIsPageReady] = useState(false);
  let [allSections, setSections] = useState<SectionAny[]>([]);
  var Title: string = "";
  var Fields: { [key: string]: string }[] = [];

  const sectionnumber = router.asPath
    .replace("/Dashboard/", "")
    .replace("/", " ")
    .replace("/", " ")
    .replace("Resume Section ", "");

  const sectionplusnumber = router.asPath
    .replace("/Dashboard/", "")
    .replace("/", " ")
    .replace("/", " ")
    .replace("Resume Section ", "section");

  switch (sectionnumber) {
    case "1":
      Title = sectionOutline.section1.title;
      Fields = sectionOutline.section1.headers;
      break;
    case "2":
      Title = sectionOutline.section2.title;
      Fields = sectionOutline.section2.headers;
      break;
    case "3":
      Title = sectionOutline.section3.title;
      Fields = sectionOutline.section3.headers;
      break;
    case "4":
      Title = sectionOutline.section4.title;
      Fields = sectionOutline.section4.headers;
      break;
    case "5":
      Title = sectionOutline.section5.title;
      Fields = sectionOutline.section5.headers;
      break;
    case "6":
      Title = sectionOutline.section6.title;
      Fields = sectionOutline.section6.headers;
      break;
    case "7":
      Title = sectionOutline.section7.title;
      Fields = sectionOutline.section7.headers;
      break;
    case "8":
      Title = sectionOutline.section8.title;
      Fields = sectionOutline.section8.headers;
      break;
    case "9":
      Title = sectionOutline.section9.title;
      Fields = sectionOutline.section9.headers;
      break;
    case "10":
      Title = sectionOutline.section10.title;
      Fields = sectionOutline.section10.headers;
      break;
    case "11":
      Title = sectionOutline.section11.title;
      Fields = sectionOutline.section11.headers;
      break;
    case "12":
      Title = sectionOutline.section12.title;
      Fields = sectionOutline.section12.headers;
      break;
    case "13":
      Title = sectionOutline.section13.title;
      Fields = sectionOutline.section13.headers;
      break;
    case "14":
      Title = sectionOutline.section14.title;
      Fields = sectionOutline.section14.headers;
      break;
    default:
      Title = "";
      Fields = [];
      break;
  }

  useEffect(() => {
    if (!router.isReady) return;

    const getData = async () => {
      try {
        const sectionData = await fetchSectionData<SectionAny>(
          sectionplusnumber
        );
        setSections(sectionData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    // codes using router.query

    setIsPageReady(true);
  }, [router.isReady]);

  if (!isPageReady) {
    return <div>Loading...</div>;
  }

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
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "block" },
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Section {sectionnumber}:
      </Typography>
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
      <ResumeCreate1 />
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
              <TableRow>
                {Fields.map((item, index) => (
                  <TableCell
                    key={index}
                    align="right"
                    style={{ minWidth: 0.5 / Fields.length }}
                    sx={{ textAlign: "center" }}
                  >
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* for each resume entry, make a row in the table */}
              {allSections &&
                allSections.map((item, index) => (
                  <ResumeTableRow index={index} resumeEntry={item} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          width: "100%",
          flexDirection: "column",
          paddingBottom: "50px",
        }}
      >
        {allSections &&
          allSections.length > 0 &&
          allSections.map((item, index) => (
            <Box
              sx={{
                flex: 1,
                position: "relative",
                Width: "80%",
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: "20px",
              }}
            >
              <ResumeCard resumeEntry={item} />
            </Box>
          ))}
      </Box>
      <MobileBottomNav />
    </Box>
  );
}
