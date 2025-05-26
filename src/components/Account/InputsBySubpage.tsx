import React from "react";
import CardContent from "@mui/material/CardContent";
import Outline from "@/components/Account/Outline.json";
import DynamicInput from "@/components/Account/DynamicInput";
import { User } from "@/API/UserAPI";
import { formFields } from "@/API/JSON";

interface ResumeModalProps {
  setMapState: (
    value: React.SetStateAction<Map<string, string | number>>
  ) => void;
  currUser: User;
}

export default function ResumeCreateModalContent({
  setMapState,
  currUser,
}: ResumeModalProps) {
  const Fields: formFields = Outline.form;

  return (
    <CardContent
      sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
    >
      {Fields.map((item, index) => (
        <DynamicInput
          key={index}
          setMapState={setMapState}
          inputFieldJSON={item}
          originalToUpdate={currUser}
        />
      ))}
    </CardContent>
  );
}
