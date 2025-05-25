import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import MobileReadDetail from "@/components/Projects/MobileReadDetail";
import EditMobileButton from "@/components/Projects/EditMobileButton";
import Container from "@mui/material/Container";
import { AnimalProjectTypes } from "@/API/ProjectAPI";
import { ProjectSubEntryDeleteMobileButton } from "@/components/DeleteButtons";

interface PopUpProps {
  jwt: string;
  projectSubentry: AnimalProjectTypes;
  endpoint: string;
  handleOpenInput: (currEntry: AnimalProjectTypes, purpose: string) => void;
  deleteButton: boolean;
}

export default function MobileReadPopUp({
  jwt,
  projectSubentry,
  endpoint,
  handleOpenInput,
  deleteButton,
}: PopUpProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleDeleteAnimal = () => {
    router.push(pathname.substring(0, pathname.lastIndexOf("/")));
  };

  const doNothing = () => {};

  return (
    <Card
      sx={{
        flex: 1,
        position: "relative",
        Width: "100%",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 1,
        boxShadow: 5,
      }}
    >
      <Container>
        <MobileReadDetail
          projectSubentry={projectSubentry}
          endpoint={endpoint}
        />
        <CardActions>
          <EditMobileButton
            handleOpen={handleOpenInput}
            projectSubentry={projectSubentry}
          />
          {deleteButton && (
            <ProjectSubEntryDeleteMobileButton
              jwt={jwt}
              endpoint={endpoint}
              id={projectSubentry.id}
              handleModalClose={handleDeleteAnimal}
              setSubentries={doNothing}
              allSubentries={[]}
            />
          )}
        </CardActions>
      </Container>
    </Card>
  );
}
