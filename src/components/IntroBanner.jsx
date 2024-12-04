import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import ColorTheme from "./ColorTheme";

function IntroBanner() {
  return (
    <ThemeProvider theme={ColorTheme}>
      <div
        id="introBanner"
        style={{
          background:
            "url(https://record-books.vercel.app/_next/image?url=%2Fassets%2Fphotos%2FFeatured-Photo.jpeg&w=1920&q=75) no-repeat",
          backgroundSize: "cover",
          position: "relative",
          opacity: "0.3",
        }}
      >
        <div
          id="bannerTextPlaceholder"
          style={{
            background:
              "url(https://record-books.vercel.app/_next/image?url=%2Fassets%2Fphotos%2FFeatured-Photo.jpeg&w=1920&q=75) no-repeat",
            backgroundSize: "cover",
            position: "relative",
            opacity: "0",
            padding: "80px",
            maxWidth: "80%",
          }}
        >
          <Typography
            variant="h2"
            sx={{ textAlign: "center" }}
            style={{
              paddingTop: "90px",
              maxWidth: "100%",
            }}
          >
            4-H Record Books
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            width="70vw"
            style={{
              paddingBottom: "50px",
              maxWidth: "100%",
            }}
          >
            4-H recordkeeping just got a new look! We are excited to announce
            the launch of our new 4-H Record Book platform. This new platform
            will allow 4-H members to complete their record books online.
          </Typography>
        </div>
      </div>
      <div
        id="bannerText"
        style={{
          position: "absolute",
          top: "0",
          padding: "80px",
          maxWidth: "80%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center" }}
          color="#D73F09"
          style={{
            paddingTop: "90px",
            maxWidth: "100%",
          }}
        >
          4-H Record Books
        </Typography>
        <Typography
          variant="h6"
          sx={{ textAlign: "center" }}
          width="70vw"
          style={{
            paddingBottom: "50px",
            maxWidth: "100%",
          }}
        >
          4-H recordkeeping just got a new look! We are excited to announce the
          launch of our new 4-H Record Book platform. This new platform will
          allow 4-H members to complete their record books online.
        </Typography>
      </div>
    </ThemeProvider>
  );
}
export default IntroBanner;
