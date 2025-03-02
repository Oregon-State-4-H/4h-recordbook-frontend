import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface CardProps {
  ID: string;
  Nickname: string;
  Section: number;
  Year: string;
  Grade: number;
  ClubName: string;
  NumInClub: number;
  ClubLeader: string;
  MeetingsHeld: number;
  MeetingsAttended: number;
  UserID: string;
}

export default function Section1Card({
  ID,
  Nickname,
  Year,
  Grade,
  ClubName,
  NumInClub,
  ClubLeader,
  MeetingsHeld,
  MeetingsAttended,
}: CardProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: 1,
          boxShadow: 5,
          p: 4,
        }}
      >
        <CardContent>
          <Typography gutterBottom sx={{ fontSize: 14 }}>
            {Year}
          </Typography>
          <Typography variant="h5" component="div">
            {Nickname}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen}>View Details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card
              sx={{
                maxWidth: "90%",
                minWidth: 275,
                backgroundColor: "rgba(255,255,255,1)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: 1,
                boxShadow: 5,
                p: 4,
              }}
            >
              <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
                <Typography gutterBottom sx={{ fontSize: 14 }}>
                  {Year}
                </Typography>
                <Typography variant="h5" component="div" marginBottom="20px">
                  {Nickname}
                </Typography>
                <Typography variant="body2" color="text.disabled">
                  Grade:
                </Typography>
                <Typography variant="body1" marginBottom="10px">
                  {Grade}
                </Typography>
                <Typography variant="body2" color="text.disabled">
                  Name of Club/Group
                </Typography>
                <Typography variant="body1" marginBottom="10px">
                  {ClubName}
                </Typography>
                <Typography variant="body2" color="text.disabled">
                  Number in Club/Group
                </Typography>
                <Typography variant="body1" marginBottom="10px">
                  {NumInClub}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleClose} size="small">
                  Close
                </Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
}
