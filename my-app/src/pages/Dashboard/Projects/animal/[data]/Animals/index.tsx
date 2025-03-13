import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import NavBarSignedIn from "../../../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../../../components/MobileBottomNav";
import TitleOnly from "../../../../../../components/Projects/TitleOnly";
import {
  Project,
  isProject,
  fetchProject,
  AnimalProjectTypes,
  AnimalProjectFields,
  DailyFeedProjectFields,
  ExpenseProjectFields,
  FeedProjectFields,
  FeedPurchaseProjectFields,
  SupplyProjectFields,
  Animal,
  DailyFeed,
  Expense,
  Feed,
  FeedPurchase,
  Supply,
  AutoProjectFields,
  AnimalProjectTypeEndpoints,
  fetchSubpageEntriesByProject,
  emptyAnimal,
  Empty,
} from "../../../../../../API/ProjectAPI";
import SubpageCard from "../../../../../../components/Projects/SubpageCard";
import Grid from "@mui/material/Grid2";

export default function Section() {
  const router = useRouter();
  var projectId = "";
  if (router.isReady) {
    projectId = router.asPath
      .substring(0, router.asPath.lastIndexOf("/"))
      .replace("/Dashboard/", "")
      .replace("Projects/animal/", "")
      .replace("/Supplies", "");
    console.log(projectId);
  }

  // states for all subpage entries
  let [allSubpageEntries, setAllSubpageEntries] = useState<Animal[]>([]);
  const [validSubpage, setValidSubpage] = useState(true);
  const [subpageDataLoaded, setSubpageDataLoaded] = useState(false);

  // states for how entry data should be displayed
  const [displayLinks, setDisplayLinks] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);
  const displayAsLinks = () => {
    setDisplayLinks(true);
    setDisplayDetail(false);
  };
  const displayAsDetail = () => {
    setDisplayLinks(false);
    setDisplayDetail(true);
  };

  // state for multipurpose input modal
  const [inputModal, setinputModal] = React.useState(false);
  let [inputModalEntry, setinputModalEntry] = useState<Animal>(emptyAnimal);
  let [inputModalPurpose, setinputModalPurpose] = useState<string>("");
  const handleinputModalClose = () => {
    setinputModal(false);
    setinputModalEntry(emptyAnimal);
    setinputModalPurpose("");
  };
  const handleinputModalOpen = (
    currinputModalEntry: Animal,
    purpose: string
  ) => {
    setinputModal(true);
    setinputModalEntry(currinputModalEntry);
    setinputModalPurpose(purpose);
    handleReadModalClose();
  };

  // state for mobile read detail modal
  const [readModal, setReadModal] = React.useState(false);
  let [readModalEntry, setReadModalEntry] = useState<Animal>(emptyAnimal);
  const handleReadModalClose = () => {
    setReadModal(false);
    setReadModalEntry(emptyAnimal);
  };
  const handleReadModalOpen = (currModalEntry: Animal, purpose: string) => {
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

  useEffect(() => {
    if (!router.isReady) return;

    const getData = async () => {
      var subpageTypeEndpoint = "";
      var subpagePathSuffix = router.asPath.substring(
        router.asPath.lastIndexOf("/") + 1
      );
      switch (subpagePathSuffix) {
        case "Animals":
          subpageTypeEndpoint = AnimalProjectTypeEndpoints.Animal;
          displayAsLinks();
          break;
        case "Expense":
          subpageTypeEndpoint = AnimalProjectTypeEndpoints.Expense;
          displayAsDetail();
          break;
        case "Feeds":
          subpageTypeEndpoint = AnimalProjectTypeEndpoints.Feed;
          displayAsDetail();
          break;
        case "Supplies":
          subpageTypeEndpoint = AnimalProjectTypeEndpoints.Supply;
          displayAsDetail();
          break;
      }

      console.log("subpagePathSuffix: ", subpagePathSuffix);
      console.log("subpageTypeEndpoint: ", subpageTypeEndpoint);
      try {
        const subpageData = await fetchSubpageEntriesByProject<Animal>(
          subpageTypeEndpoint,
          projectId
        );
        setAllSubpageEntries(subpageData);
        setSubpageDataLoaded(true);
      } catch (error) {
        setValidSubpage(false);
        console.log(error);
      }
    };
    getData();
  }, [router.isReady]);

  if (!validSubpage) {
    return (
      <TitleOnly
        title={
          router.asPath.substring(router.asPath.lastIndexOf("/") + 1) +
          " Page Not Fpund"
        }
        cloverLoader={false}
      />
    );
  } else if (!router.isReady || !subpageDataLoaded) {
    return <TitleOnly title="Loading..." cloverLoader={true} />;
  } else if (subpageDataLoaded && validSubpage) {
    console.log("allSubpageEntries: ", allSubpageEntries);

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
          {router.asPath.substring(router.asPath.lastIndexOf("/") + 1)}
        </Typography>
        {displayLinks && (
          <Box>
            {" "}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                width: "100%",
                flexDirection: "column",
                paddingBottom: "50px",
              }}
            >
              {allSubpageEntries &&
                allSubpageEntries.length > 0 &&
                allSubpageEntries.map((item) => (
                  <SubpageCard
                    label={item.name}
                    path={router.asPath + "/" + item.id}
                  />
                ))}
            </Box>
            <Box
              sx={{
                width: "90%",
                display: { xs: "none", md: "block" },
                marginLeft: "5%",
                marginRight: "5%",
                marginTop: "15px",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={0}
                sx={{
                  width: "100%",
                }}
              >
                {allSubpageEntries &&
                  allSubpageEntries.length > 0 &&
                  allSubpageEntries.map((item) => (
                    <Grid size={6}>
                      <SubpageCard
                        label={item.name}
                        path={router.asPath + "/" + item.id}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Box>
        )}
        <MobileBottomNav />
      </Box>
    );
  }
}
