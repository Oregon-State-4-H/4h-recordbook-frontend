import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBarSignedIn from "../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../components/MobileBottomNav";
import Section7Card from "../../../../components/Section7Card";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { fetchSectionData, Section7, SectionNumbers } from "../API/ResumeAPI";

const Fields = [
  "Year",
  "Nickname",
  "Club Member Activities",
  "Hours Spent",
  "Number of People Reached",
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
  let [allSections, setSections] = useState<Section7[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const section1Data = await fetchSectionData<Section7>(
          SectionNumbers.Section7
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
        Section 7: Citizenship/Community Service in 4-H
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
                      {item.club_member_activities}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.hours_spent}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.num_people_reached}
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
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
              <Section7Card
                ID={item.id}
                Section={item.section}
                UserID={item.user_id}
                Nickname={item.nickname}
                Year={item.year}
                ClubMemberActivities={item.club_member_activities}
                HoursSpent={item.hours_spent}
                NumPeopleReached={item.num_people_reached}
              />
            </Box>
          ))}
      </Box>
      <MobileBottomNav />
    </Box>
  );
}
