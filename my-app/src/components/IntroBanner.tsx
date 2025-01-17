import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

function IntroBanner() {
  return (
    <Stack sx={{ marginBottom: "30px" }}>
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
        <Container>
          <Box
            id="bannerTextPlaceholder"
            sx={{
              position: "relative",
              opacity: "0",
              paddingTop: "80px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h2"
              width="70vw"
              color="#D73F09"
              sx={{
                paddingTop: "90px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              4-H Record Books
            </Typography>

            <Typography
              variant="h6"
              sx={{
                paddingBottom: "50px",
                textAlign: "center",
              }}
            >
              4-H Record Books 4-H recordkeeping just got a new look! We are
              excited to announce the launch of our new 4-H Record Book
              platform. This new platform will allow 4-H members to complete
              their record books online.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        id="introBanner"
        sx={{
          // position: "relative",
          width: "100%",
          opacity: "1",
          zIndex: 900,
          position: "absolute",
          top: "0",
        }}
      >
        <Container>
          <Box
            id="bannerText"
            sx={{
              position: "relative",
              paddingTop: "80px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: "100%",
              alignContent: "center",
            }}
          >
            <Container>
              <Typography
                variant="h2"
                width="70vw"
                color="#D73F09"
                sx={{
                  paddingTop: "90px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                4-H Record Books
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  paddingBottom: "50px",
                  textAlign: "center",
                }}
              >
                4-H Record Books 4-H recordkeeping just got a new look! We are
                excited to announce the launch of our new 4-H Record Book
                platform. This new platform will allow 4-H members to complete
                their record books online.
              </Typography>
            </Container>
          </Box>
        </Container>
      </Box>
    </Stack>
  );
}
export default IntroBanner;
