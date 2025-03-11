import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
                src="/photos/byron_profile.jpeg"
                alt="Byron Ojua-Nice"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Container>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Byron Ojua-Nice
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Project Manager, Documentation, Swiss Army Knife
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
                src="/photos/michelle_profile.jpeg"
                alt="Michelle Nguyen"
                sx={{ width: "100%", height: "100%" }}
              ></Avatar>
            </Container>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Michelle Nguyen
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                UI Design, Frontend Developer
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
                src="/photos/javier_profile.jpeg"
                alt="Javier Garcia Ramirez"
              ></Avatar>
            </Container>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Javier Garcia Ramirez
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Backend Developer, Database Manager
              </Typography>
            </CardContent>
          </Container>
        </Card>
      </Container>
    </Stack>
  );
}
export default ContactCards;
