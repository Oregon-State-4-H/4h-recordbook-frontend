import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function IntroBanner() {
  return (
    <Stack>
      <Box
        id="introBannerPlaceholder"
        sx={{
          background:
            "url(https://record-books.vercel.app/_next/image?url=%2Fassets%2Fphotos%2FFeatured-Photo.jpeg&w=1920&q=75) no-repeat",
          backgroundSize: "cover",
          position: "relative",
          // position: "absolute",
          // top: "0",
          opacity: "0.3",
          zIndex: 800,
        }}
      >
        <Box
          id="bannerTextPlaceholder"
          sx={{
            position: "relative",
            opacity: "0",
            padding: "80px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "100%",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h2"
            width="70vw"
            color="#D73F09"
            sx={{
              width: "100%",
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingTop: "90px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
              fontWeight: "bold",
            }}
          >
            4-H Record Books
          </Typography>

          <Typography
            variant="h6"
            sx={{
              width: "100%",
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "50px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            4-H Record Books 4-H recordkeeping just got a new look! We are
            excited to announce the launch of our new 4-H Record Book platform.
            This new platform will allow 4-H members to complete their record
            books online.
          </Typography>
        </Box>
      </Box>
      <Box
        id="introBanner"
        sx={{
          // position: "relative",
          opacity: "1",
          zIndex: 900,
          position: "absolute",
          top: "0",
        }}
      >
        <Box
          id="bannerText"
          sx={{
            position: "relative",
            opacity: "1",
            padding: "80px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "100%",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h2"
            width="70vw"
            color="#D73F09"
            sx={{
              width: "100%",
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingTop: "90px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
              fontWeight: "bold",
            }}
          >
            4-H Record Books
          </Typography>

          <Typography
            variant="h6"
            sx={{
              width: "100%",
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingBottom: "50px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            4-H Record Books 4-H recordkeeping just got a new look! We are
            excited to announce the launch of our new 4-H Record Book platform.
            This new platform will allow 4-H members to complete their record
            books online.
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
export default IntroBanner;
