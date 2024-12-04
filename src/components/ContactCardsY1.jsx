import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import ColorTheme from "./ColorTheme";

function ContactCards() {
  return (
    <ThemeProvider theme={ColorTheme}>
      <div
        styles={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/photos/byron_profile.jpeg"
          width={400}
          height={400}
          sx={{
            flex: 1,
            position: "relative",
          }}
        />
        <img
          src="/assets/photos/michelle_profile.jpeg"
          width={400}
          height={400}
          sx={{
            flex: 2,
            position: "relative",
          }}
        />
        <img
          src="/assets/photos/javier_profile.jpeg"
          width={400}
          height={400}
          sx={{
            flex: 3,
            position: "relative",
          }}
        />
      </div>
    </ThemeProvider>
  );
}
export default ContactCards;
