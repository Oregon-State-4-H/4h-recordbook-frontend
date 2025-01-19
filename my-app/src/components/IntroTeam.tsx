import Typography from "@mui/material/Typography";
import ContactCardsY1 from "./ContactCardsY1";
import ContactCardsY2 from "./ContactCardsY2";

function IntroTeam() {
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
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
          color="#D73F09"
        >
          Meet the team
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
          Record Books was initially developed as a senior capstone project in
          2024 by a group of students at Oregon State University, and
          development is being continued as a senior capstone project in 2025.
          Meet each year's team.
        </Typography>
      </div>
      <div>
        <Typography
          variant="h5"
          color="#D73F09"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "50px",
          }}
        >
          First Year Team (2023-2024)
          <ContactCardsY1 />
        </Typography>
        <Typography
          variant="h5"
          color="#D73F09"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "50px",
          }}
        >
          Second Year Team (2023-2024)
          <ContactCardsY2 />
        </Typography>
      </div>
    </div>
  );
}
export default IntroTeam;
