import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import ResumeCardDeleteButton from "./ResumeCardDeleteButton";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { SectionAny } from "../../API/ResumeAPI";
import ResumeCardPreviewContent from "./ResumeCardPreviewContent";
import ResumeCardModalContent from "./ResumeCardModalContent";

interface ResumeCardProps {
  resumeEntry: SectionAny;
}

export default function ResumeCard({ resumeEntry }: ResumeCardProps) {
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
        <ResumeCardPreviewContent resumeEntry={resumeEntry} />
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
              <IconButton
                sx={{ position: "absolute", right: "4%", top: "4%" }}
                onClick={handleClose}
                size="small"
              >
                <CloseIcon />
              </IconButton>
              <ResumeCardModalContent resumeEntry={resumeEntry} />
              <CardActions>
                <Button
                  sx={{ width: "50%" }}
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                <ResumeCardDeleteButton id={resumeEntry.id} />
              </CardActions>
            </Card>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
}
