import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBarSignedIn from "../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../components/MobileBottomNav";
import Section1Card from "../../../../components/Section1Card";
import ResumeDeleteButton from "../../../../components/ResumeTableDeleteButton";
import ResumeCreate1 from "../../../../components/ResumeCreate1";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import sectionOutline from "./sectionOutline.json";
import {
  fetchSectionData,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  SectionNumbers,
  SectionData,
  SectionAny,
} from "../../../../components/API/ResumeAPI";

const StyledTableRow = styled(TableRow)(({}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  "&:nth-of-type(odd):hover": {
    backgroundColor: "rgba(255,255,255,0.98)",
  },
  "&:nth-of-type(even):hover": {
    backgroundColor: "rgba(255,255,255,0.98)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Section() {
  const router = useRouter();

  const sectionname = router.asPath
    .replace("/Dashboard/", "")
    .replace("/", " ")
    .replace("/", " ")
    .replace("Resume Section ", "Section");

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

  console.log("path outside of use effect: ", router.asPath);
  console.log("sectionnumber outside of use effect: ", sectionnumber);
  console.log("sectionplusnumber outside of use effect: ", sectionplusnumber);

  var Title: string = "";
  var SectionSuffix: string = "";
  var Fields: { [key: string]: string }[] = [];
  switch (sectionnumber) {
    case "1":
      console.log("case1!!!");
      Title = sectionOutline.section1.title;
      Fields = sectionOutline.section1.headers;
      SectionSuffix = SectionNumbers.Section1;
      break;
    case "2":
      Title = sectionOutline.section2.title;
      Fields = sectionOutline.section2.headers;
      SectionSuffix = SectionNumbers.Section2;
      break;
    case "3":
      Title = sectionOutline.section3.title;
      Fields = sectionOutline.section3.headers;
      SectionSuffix = SectionNumbers.Section3;
      break;
    case "4":
      Title = sectionOutline.section4.title;
      Fields = sectionOutline.section4.headers;
      SectionSuffix = SectionNumbers.Section4;
      break;
    case "5":
      Title = sectionOutline.section5.title;
      Fields = sectionOutline.section5.headers;
      SectionSuffix = SectionNumbers.Section5;
      break;
    case "6":
      Title = sectionOutline.section6.title;
      Fields = sectionOutline.section6.headers;
      SectionSuffix = SectionNumbers.Section6;
      break;
    case "7":
      Title = sectionOutline.section7.title;
      Fields = sectionOutline.section7.headers;
      SectionSuffix = SectionNumbers.Section7;
      break;
    case "8":
      Title = sectionOutline.section8.title;
      Fields = sectionOutline.section8.headers;
      SectionSuffix = SectionNumbers.Section8;
      break;
    case "9":
      Title = sectionOutline.section9.title;
      Fields = sectionOutline.section9.headers;
      SectionSuffix = SectionNumbers.Section9;
      break;
    case "10":
      Title = sectionOutline.section10.title;
      Fields = sectionOutline.section10.headers;
      SectionSuffix = SectionNumbers.Section10;
      break;
    case "11":
      Title = sectionOutline.section11.title;
      Fields = sectionOutline.section11.headers;
      SectionSuffix = SectionNumbers.Section11;
      break;
    case "12":
      Title = sectionOutline.section12.title;
      Fields = sectionOutline.section12.headers;
      SectionSuffix = SectionNumbers.Section12;
      break;
    case "13":
      Title = sectionOutline.section13.title;
      Fields = sectionOutline.section13.headers;
      SectionSuffix = SectionNumbers.Section13;
      break;
    case "14":
      Title = sectionOutline.section14.title;
      Fields = sectionOutline.section14.headers;
      SectionSuffix = SectionNumbers.Section14;
      break;
    default:
      Title = "";
      Fields = [];
      break;
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
            <TableBody></TableBody>
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
      ></Box>
      <MobileBottomNav />
    </Box>
  );
}
