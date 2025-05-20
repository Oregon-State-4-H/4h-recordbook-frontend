"use client";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

function ContactCards() {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 3 }}
    >
      <Container>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Container maxWidth="sm" sx={{ paddingTop: "10%" }}>
            <Container maxWidth="sm">
              <Avatar
                // src="/photos/byron_profile.jpeg"
                alt="Aiden Freeman"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Container>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Aiden Freeman
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                Backend Developer
              </Typography>
            </CardContent>
          </Container>
        </Card>
      </Container>
      <Container>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Container maxWidth="sm" sx={{ paddingTop: "10%" }}>
            <Container maxWidth="sm">
              <Avatar
                // src="/photos/michelle_profile.jpeg"
                alt="Joy Jin"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Container>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Joy Jin
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                Frontend Developer
              </Typography>
            </CardContent>
          </Container>
        </Card>
      </Container>
      <Container>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Container maxWidth="sm" sx={{ paddingTop: "10%" }}>
            <Container maxWidth="sm">
              <Avatar
                sx={{ width: "100%", height: "100%" }}
                // src="/photos/javier_profile.jpeg"
                alt="Zachary Wallace"
              ></Avatar>
            </Container>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Zachary Wallace
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                Backend Developer
              </Typography>
            </CardContent>
          </Container>
        </Card>
      </Container>
    </Stack>
  );
}
export default ContactCards;
