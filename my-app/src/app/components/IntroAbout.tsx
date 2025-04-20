import Typography from "@mui/material/Typography";

function IntroAbout() {
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
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
          color="#D73F09"
        >
          What is Record Books?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "50px",
          }}
        >
          4-H Record Books is a logging and report software that tracks a
          youth's journey through the 4-H program. Record books digitizes
          current handwritten reports to give youth a new modern approach to
          record keeping. This software allows youth to log their progress and
          then automatically generate formatted PDF reports. Record Books allows
          users to track their 4-H resume and General Animal Science projects.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
          color="#D73F09"
        >
          Addressing a 50 year old problem
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
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
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
          color="#D73F09"
        >
          Exporting Reports
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "50px",
          }}
        >
          Export your records into preformated PDF reports at any time. The end
          goal would be to have a system that can can generate reports for all
          major 4-H projects categories. Currently, we working to support the
          4-H Resume and General Animal Science projects.
        </Typography>
      </div>
    </div>
  );
}
export default IntroAbout;
