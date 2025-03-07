import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBarSignedIn from "../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../components/MobileBottomNav";
import Section9and10Card from "../../../../components/Section9and10Card";
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
import ResumeDeleteButton from "../../../../components/ResumeTableDeleteButton";
import EditIcon from "@mui/icons-material/Edit";
import {
  fetchSectionData,
  Section9,
  SectionNumbers,
} from "../../../../components/API/ResumeAPI";

const Fields = [
  "Year",
  "Nickname",
  "CommunicationType",
  "Topic",
  "TimesGiven",
  "Location",
  "AudienceSize",
  "",
  "",
];

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
  let [allSections, setSections] = useState<Section9[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const section1Data = await fetchSectionData<Section9>(
          SectionNumbers.Section9
        );
        setSections(section1Data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
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
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "block" },
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Section 9: Communications in 4-H
      </Typography>
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
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allSections &&
                allSections.map((item, index) => (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.year}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.nickname}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.communication_type}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.topic}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.times_given}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.location}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.audience_size}
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <ResumeDeleteButton id={item.id} />
                    </TableCell>
                  </StyledTableRow>
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
              <Section9and10Card
                ID={item.id}
                Section={item.section}
                UserID={item.user_id}
                Nickname={item.nickname}
                Year={item.year}
                CommunicationType={item.communication_type}
                Topic={item.topic}
                TimesGiven={item.times_given}
                Location={item.location}
                AudienceSize={item.audience_size}
              />
            </Box>
          ))}
      </Box>
      <MobileBottomNav />
    </Box>
  );
}
