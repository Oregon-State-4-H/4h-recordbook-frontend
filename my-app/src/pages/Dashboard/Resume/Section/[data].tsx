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
import NavBarSignedIn from "../../../../components/NavbarSignedIn";
import MobileBottomNav from "../../../../components/MobileBottomNav";
import ResumeCreate from "../../../../components/Resume/CreateIconButton";
import ResumeTableRow from "../../../../components/Resume/TableRow";
import ResumeCard from "../../../../components/Resume/MobileCard";
import DynamicPopUp from "../../../../components/Resume/DynamicPopUp";
import MobileReadPopUp from "../../../../components/Resume/MobileReadPopUp";
import CloverLoader from "../../../../components/CloverLoader";
import sectionOutline from "./SectionOutline.json";
import { fetchSectionData, SectionAny } from "../../../../API/ResumeAPI";
import { Button } from "@mui/material";
import { PDFDownloadButton } from "@/components/PDFDownloadButton";
import PDFPreviewModel from "@/components/Models/PDFPreviewModel";
import { Document } from "@react-pdf/renderer";
import Section1Report from "@/components/Reports/Resume/Section1";
import Section2Report from "@/components/Reports/Resume/Section2";
import Section3Report from "@/components/Reports/Resume/Section3";
import Section4Report from "@/components/Reports/Resume/Section4";
import Section5Report from "@/components/Reports/Resume/Section5";
import Section6Report from "@/components/Reports/Resume/Section6";
import Section7Report from "@/components/Reports/Resume/Section7";
import Section8Report from "@/components/Reports/Resume/Section8";
import Section9Report from "@/components/Reports/Resume/Section9";
import Section10Report from "@/components/Reports/Resume/Section10";
import Section11Report from "@/components/Reports/Resume/Section11";
import Section12Report from "@/components/Reports/Resume/Section12";
import Section13Report from "@/components/Reports/Resume/Section13";
import Section14Report from "@/components/Reports/Resume/Section14";
import {
  fetchSectionData,
  SectionAny,
  SectionEmpty,
} from "../../../../API/ResumeAPI";
import Card from "@mui/material/Card";

export default function Section() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  let [allSections, setSections] = useState<SectionAny[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  var Title: string = "";
  var Fields: { [key: string]: string }[] = [];

  const sectionNumber = router.asPath
    .replace("/Dashboard/", "")
    .replace("/", " ")
    .replace("/", " ")
    .replace("Resume Section ", "");

    const sectionComponents: {[key: string]: (props: any) => React.JSX.Element} = {
      "1": Section1Report,
      "2": Section2Report,
      "3": Section3Report,
      "4": Section4Report,
      "5": Section5Report,
      "6": Section6Report,
      "7": Section7Report,
      "8": Section8Report,
      "9": Section9Report,
      "10": Section10Report,
      "11": Section11Report,
      "12": Section12Report,
      "13": Section13Report,
      "14": Section14Report,
    };

  const PDFDoc: (props: any) => React.JSX.Element = sectionComponents[sectionNumber];

  const sectionPlusNumber = router.asPath
    .replace("/Dashboard/", "")
    .replace("/", " ")
    .replace("/", " ")
    .replace("Resume Section ", "section");

  switch (sectionNumber) {
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

  useEffect(() => {
    if (!router.isReady) return;

    const getData = async () => {
      try {
        const sectionData = await fetchSectionData<SectionAny>(
          sectionPlusNumber
        );
        setSections(sectionData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
    // codes using router.query

    setIsLoading(false);
  }, [router.isReady]);

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
      {router.isReady && (
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "block" },
            Width: "100%",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Section {sectionNumber}:
        </Typography>
      )}
      {router.isReady && (
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
      )}
      
      <Box
        sx={{
          display: { md: "block" },
          Width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <Button onClick={() => setShowPreview(true)}>Preview Section PDF</Button>
      </Box>
      {
        showPreview &&
        <PDFPreviewModel title={"Section " + sectionNumber + " Preview"} handleClose={() => setShowPreview(false)}>
          <Document>
            <PDFDoc tableData={allSections} />
          </Document>
        </PDFPreviewModel>
      }

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
        <ResumeCreate handleOpen={handleinputModalOpen} />
      </Box>
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
                    sx={{ textAlign: "center", minWidth: 0.5 / Fields.length }}
                  >
                    {item.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading &&
                allSections.map((item, index) => (
                  <ResumeTableRow
                    index={index}
                    resumeEntry={item}
                    sectionNumber={sectionNumber}
                    sectionPlusNumber={sectionPlusNumber}
                    setSections={setSections}
                    priorEntries={allSections}
                    handleOpen={handleinputModalOpen}
                  />
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
        {!isLoading &&
          allSections.length > 0 &&
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
          sectionNumber={sectionNumber}
          sectionPlusNumber={sectionPlusNumber}
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
          resumeEntry={readModalEntry}
          handleModalClose={handleReadModalClose}
          handleOpen={handleinputModalOpen}
        />
      </Modal>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CloverLoader />
        </Box>
      )}
      <MobileBottomNav />
    </Box>
  );
}
