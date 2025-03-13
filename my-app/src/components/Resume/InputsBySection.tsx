import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import sectionOutline from "../../pages/Dashboard/Resume/Section/SectionOutline.json";
import DynamicInput from "../DynamicInput";
import { SectionAny } from "../../API/ResumeAPI";

interface ResumeModalProps {
  sectionNumber: string;
  updateMap: (key: string, value: any) => void;
  resumeEntry: SectionAny;
}

export default function ResumeCreateModalContent({
  sectionNumber,
  updateMap,
  resumeEntry,
}: ResumeModalProps) {
  var Fields: { [key: string]: any }[] = [];

  switch (sectionNumber) {
    case "1":
      Fields = sectionOutline.section1.form;
      break;
    case "2":
      Fields = sectionOutline.section2.form;
      break;
    case "3":
      Fields = sectionOutline.section3.form;
      break;
    case "4":
      Fields = sectionOutline.section4.form;
      break;
    case "5":
      Fields = sectionOutline.section5.form;
      break;
    case "6":
      Fields = sectionOutline.section6.form;
      break;
    case "7":
      Fields = sectionOutline.section7.form;
      break;
    case "8":
      Fields = sectionOutline.section8.form;
      break;
    case "9":
      Fields = sectionOutline.section9.form;
      break;
    case "10":
      Fields = sectionOutline.section10.form;
      break;
    case "11":
      Fields = sectionOutline.section11.form;
      break;
    case "12":
      Fields = sectionOutline.section12.form;
      break;
    case "13":
      Fields = sectionOutline.section13.form;
      break;
    case "14":
      Fields = sectionOutline.section14.form;
      break;
    default:
      break;
  }

  return (
    <CardContent
      sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
    >
      {Fields.map((item) => (
        <DynamicInput
          updateMap={updateMap}
          inputFieldJSON={item}
          sectionNumber={sectionNumber}
          originalToUpdate={resumeEntry}
        />
      ))}
    </CardContent>
  );
}
