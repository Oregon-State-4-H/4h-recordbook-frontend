import NavBarSignedIn from "../../components/NavbarSignedIn";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import MobileBottomNav from "../../components/MobileBottomNav";

function Projects() {
  // const [typeProjects, setTypeProjects] = React.useState("Current Projects");

  // const handleChange = (event, newTypeProjects) => {
  //   setTypeProjects(newTypeProjects);
  // };

  // const toggleChildren = [
  //   <ToggleButton
  //     value="All Projects"
  //     allDisplay="block"
  //     currentDisplay="none"
  //     key="all"
  //   >
  //     All Projects
  //   </ToggleButton>,
  //   <ToggleButton
  //     value="Current Project"
  //     allDisplay="none"
  //     currentDisplay="block"
  //     key="current"
  //   >
  //     Current Projects
  //   </ToggleButton>,
  // ];

  // const control = {
  //   value: typeProjects,
  //   allDisplay: typeProjects,
  //   currentDisplay: typeProjects,
  //   onChange: handleChange,
  //   exclusive: true,
  // };

  // // function to get current projects below
  // // fetch api function adapted from the following two resources:
  // // https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le
  // // https://www.pluralsight.com/resources/blog/guides/fetch-data-from-a-json-file-in-a-react-app
  // let [allCurrentProjects, setCurrentProjects] = useState(null);

  // // mock Postman server URL is as follows: https://7f5430c6-f0d3-4a3c-80e6-781aef7a7602.mock.pstmn.io
  // useEffect(() => {
  //   fetch("https://7f5430c6-f0d3-4a3c-80e6-781aef7a7602.mock.pstmn.io/projects")
  //     .then((response) => response.json())
  //     .then((data) => setCurrentProjects(data.CurrentProjects));
  // }, []);

  // function to get all projects below
  let [allProjects, setProjects] = useState(null);

  // mock Postman server URL is as follows: https://7f5430c6-f0d3-4a3c-80e6-781aef7a7602.mock.pstmn.io
  useEffect(() => {
    fetch("https://7f5430c6-f0d3-4a3c-80e6-781aef7a7602.mock.pstmn.io/project")
      .then((response) => response.json())
      .then((data) => setProjects(data.allProjects));
  }, []);

  //goes in body tag, per autogenerated index.html file in public folder
  return (
    <Box className="App">
      <NavBarSignedIn />
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("xs")]: { height: "30px" },
          [theme.breakpoints.up("sm")]: { height: "35px" },
          [theme.breakpoints.up("md")]: { height: "40px" },
          [theme.breakpoints.up("lg")]: { height: "45px" },
          [theme.breakpoints.up("xl")]: { height: "50px" },
        })}
      ></Box>
      <Typography
        variant="h4"
        sx={{
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          marginBotton: "20px",
        }}
      >
        Projects
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
        }}
      ></Typography>
      {/* <Container maxWidth="xs">
        <ToggleButtonGroup
          size="large"
          fullWidth
          {...control}
          aria-label="Large sizes"
          style={{
            textAlign: "center",
          }}
        >
          {toggleChildren}
        </ToggleButtonGroup>
      </Container> */}

      <Typography
        variant="h5"
        color="#339966"
        sx={{
          Width: "100%",
          textAlign: "center",
          paddingBotton: "70px",
        }}
      >
        {/* Currently Showing {control.value} */}
        Currently Showing All Projects
      </Typography>
      <Container>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          spacing={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }}
          sx={{ flexWrap: "wrap" }}
        >
          {allProjects &&
            allProjects.length > 0 &&
            allProjects.map((item) => (
              <Box sx={{ minWidth: "30%", padding: "15px" }}>
                <Container
                  sx={{
                    padding: "15px",
                    textAlign: "center",
                    backgroundColor: "#f7fbf9",
                  }}
                >
                  <h3>{item.ProjectName}</h3>
                  <h4>({item.Year})</h4>
                </Container>
              </Box>
            ))}
        </Stack>
      </Container>
      <MobileBottomNav />
    </Box>
  );
}

export default Projects;
