import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import MobileReadDetail from "@/components/Projects/MobileReadDetail";
import EditMobileButton from "@/components/Projects/EditMobileButton";
import { ProjectSubEntryDeleteMobileButton } from "@/components/DeleteButtons";
import Button from "@mui/material/Button";
import { AnimalProjectTypes, isExpense, isSupply } from "@/API/ProjectAPI";
import MobileCardPreviewContent from "@/components/MobileReadPreview";

interface MobileCardProps {
  projectSubentry: AnimalProjectTypes;
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  subpage: string;
}

export function MobileCard({
  projectSubentry,
  handleOpen,
  subpage,
}: MobileCardProps) {
  const openModal = () => handleOpen(projectSubentry, "read");
  switch (subpage) {
    case "Expense":
      if (isExpense(projectSubentry)) {
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
              <MobileCardPreviewContent
                year={projectSubentry.date}
                nickname={projectSubentry.items}
              />
              <CardActions>
                <Button onClick={openModal}>View Details</Button>
              </CardActions>
            </Card>
          </Box>
        );
      }
      break;
    case "Supply":
      if (isSupply(projectSubentry)) {
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
              <MobileCardPreviewContent
                year={"Start Value: " + projectSubentry.start_value.toString()}
                nickname={projectSubentry.description}
              />
              <CardActions>
                <Button onClick={openModal}>View Details</Button>
              </CardActions>
            </Card>
          </Box>
        );
      }
      break;
  }
}

interface MobileCardDetailProps {
  jwt: string;
  projectSubentry: AnimalProjectTypes;
  endpoint: string;
  handleModalClose: () => void;
  handleOpen: (currEntry: AnimalProjectTypes, purpose: string) => void;
  setSubentries: (updatedEntries: AnimalProjectTypes[]) => void;
  allSubentries: AnimalProjectTypes[];
}

export function MobileCardDetail({
  jwt,
  projectSubentry,
  endpoint,
  handleModalClose,
  handleOpen,
  setSubentries,
  allSubentries,
}: MobileCardDetailProps) {
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
        <MobileReadDetail projectSubentry={projectSubentry} endpoint="supply" />
        <EditMobileButton
          handleOpen={handleOpen}
          projectSubentry={projectSubentry}
        />
        <ProjectSubEntryDeleteMobileButton
          jwt={jwt}
          endpoint={endpoint}
          id={projectSubentry.id}
          handleModalClose={handleModalClose}
          setSubentries={setSubentries}
          allSubentries={allSubentries}
        />
      </Card>
    </Box>
  );
}
