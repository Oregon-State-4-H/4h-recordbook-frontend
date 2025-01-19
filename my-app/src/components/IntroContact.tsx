import Typography from "@mui/material/Typography";

function IntroContact() {
  return (
    <div
      id="contactSection"
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
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          For any questions or concerns, please contact us at
          4Hrecord.books@oregonstate.edu To report a bug or request a feature,
          please submit an issue on our GitHub.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            maxWidth: "80%",
            paddingLeft: "10%",
            paddingRight: "10%",
          }}
        >
          <a href="https://github.com/Oregon-State-4-H">View on Github</a>
        </Typography>
      </div>
    </div>
  );
}
export default IntroContact;
