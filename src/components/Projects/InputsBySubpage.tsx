import React from "react";
import CardContent from "@mui/material/CardContent";
import subpageOutline from "@/components/Projects/SubpageOutline.json";
import DynamicInput from "./DynamicInput";
import { AnimalProjectTypes } from "@/API/ProjectAPI";
import { formFields } from "@/API/JSON";

interface ResumeModalProps {
  subpage: string;
  updateMap: (key: string, value: number | string) => void;
  subpageEntry: AnimalProjectTypes;
}

export default function ResumeCreateModalContent({
  subpage,
  updateMap,
  subpageEntry,
}: ResumeModalProps) {
  let Fields: formFields = [];

  switch (subpage) {
    case "Expense":
      Fields = subpageOutline.expense.form;
      break;
    default:
      break;
  }

  return (
    <CardContent
      sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
    >
      {Fields.map((item, index) => (
        <DynamicInput
          key={index}
          subpage={subpage}
          updateMap={updateMap}
          inputFieldJSON={item}
          originalToUpdate={subpageEntry}
        />
      ))}
    </CardContent>
  );
}
