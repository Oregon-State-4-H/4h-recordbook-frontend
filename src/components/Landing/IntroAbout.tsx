"use client";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function IntroAbout() {
  const blurb: string =
    "4-H Record Books is a logging and report software that tracks a youth's journey through the 4-H program. Record books digitizes current handwritten reports to give youth a new modern approach to record keeping. This software allows youth to log their progress and then automatically generate formatted PDF reports. Record Books allows users to track their 4-H resume and General Animal Science projects.";
  return (
    <div
      id="aboutSection"
      style={{
        border: "70px solid transparent",
        margin: "-70px 0px 0px 0px",
      }}
      // sx={{ flexWrap: "wrap", padding: "15vh", maxWidth: "80%" }}
    >
      {/* <video
          plays
          inline
          src="/assets\photos\phone_preview.webm"
          alt="Mobile Preview Video"
          style={{
            Height: "40vh",
            Width: "40vw",
          }}
        ></video> */}
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            maxWidth: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
          color="#D73F09"
        >
          What is Record Books?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "50px",
          }}
        >
          {blurb}
        </Typography>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            maxWidth: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
          color="#D73F09"
        >
          Addressing a 50 year old problem
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "50px",
          }}
        >
          Youth in 4-H have an old and inefficient tracking system for tracking
          the progress of their 4-H projects. The current process involves youth
          printing and manually filling out report books, some of which are
          almost 50 years old. While some forms have been made into fillable
          PDFs, formatting causes problems when trying to import them into
          editing software. The current system is difficult to manage and can
          often lead to losses of records and valuable project information.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            maxWidth: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
          color="#D73F09"
        >
          Exporting Reports
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "50px",
          }}
        >
          Export your records into preformated PDF reports at any time. The end
          goal would be to have a system that can can generate reports for all
          major 4-H projects categories. Currently, we working to support the
          4-H Resume and General Animal Science projects.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            maxWidth: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
          color="#D73F09"
        >
          Status and Technical Implementation
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          The second year project is a NextJS frontend and a separate Golang
          backend, with support for a few of the many project types that are a
          part of 4-H. Future year projects may include support for more project
          types or a native mobile frontend. The separation of the frontend and
          backend supports the multiyear aspiration of having devoloping a
          native mobile frontend, since the same backend can be reused.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "50px",
          }}
        >
          The second year project's frontend is developed with Google's MUI
          components for stability and responsiveness to varying screen sizes.
          Like the first year project, the second year project follows the
          client server architecture pattern.
        </Typography>
        <Container maxWidth="md">
          <Avatar
            variant="square"
            src="/photos/demo.png"
            alt="Dashboard Mobile and Desktop"
            sx={{ width: "100%", height: "100%", paddingBottom: "50px" }}
          />
        </Container>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            maxWidth: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
          color="#D73F09"
        >
          How to Use 4-H Recordbooks
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "5px",
          }}
        >
          Access to the second year application is coming soon! In the interim,
          the first year application can be accessed at:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          https://record-books.vercel.app/
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "5px",
          }}
        >
          For documentation, please see the user guide accessible at:
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          https://record-books-docs.vercel.app/
        </Typography>
      </div>
    </div>
  );
}
export default IntroAbout;
