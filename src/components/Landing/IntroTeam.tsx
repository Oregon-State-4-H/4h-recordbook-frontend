"use client";

import Typography from "@mui/material/Typography";
import ContactCardsY1 from "./ContactCardsY1";
import ContactCardsY2 from "./ContactCardsY2";

function IntroTeam() {
  const string1: string =
    "Record Books was initially developed as a senior capstone project in 2024 by a group of students at Oregon State University, and development is being continued as a senior capstone project in 2025. Meet each year's team.";
  return (
    <div
      id="teamSection"
      style={{
        border: "70px solid transparent",
        margin: "-70px 0px 0px 0px",
      }}
      // sx={{ flexWrap: "wrap", padding: "15vh", maxWidth: "80%" }}
    >
      <div>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            width: "100%",
          }}
          color="#D73F09"
        >
          Meet the team
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "50px",
          }}
        >
          {string1}
        </Typography>
      </div>
      <div>
        <Typography
          variant="h5"
          color="#D73F09"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "10px",
          }}
        >
          First Year Team (2023-2024)
        </Typography>
        <ContactCardsY1 />

        <Typography
          variant="h5"
          color="#D73F09"
          sx={{
            textAlign: "center",
            width: "100%",
            paddingBottom: "10px",
            paddingTop: "50px",
          }}
        >
          Second Year Team (2023-2024)
        </Typography>
        <ContactCardsY2 />
      </div>
    </div>
  );
}
export default IntroTeam;
