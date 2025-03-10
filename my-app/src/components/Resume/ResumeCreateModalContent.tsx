import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import sectionOutline from "../../pages/Dashboard/Resume/Section/SectionOutline.json";
import DynamicInput from "../DynamicInput";

interface ResumeCreateModalProps {
  sectionNumber: string;
}

export default function ResumeCreateModalContent({
  sectionNumber,
}: ResumeCreateModalProps) {
  var Fields: { [key: string]: any }[] = [];

  switch (sectionNumber) {
    case "1":
      Fields = sectionOutline.section1.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "2":
      Fields = sectionOutline.section2.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "3":
      Fields = sectionOutline.section3.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "4":
      Fields = sectionOutline.section4.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "5":
      Fields = sectionOutline.section5.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "6":
      Fields = sectionOutline.section6.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "7":
      Fields = sectionOutline.section7.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "8":
      Fields = sectionOutline.section8.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "9":
      Fields = sectionOutline.section9.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "10":
      Fields = sectionOutline.section10.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "11":
      Fields = sectionOutline.section11.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "12":
      Fields = sectionOutline.section12.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "13":
      Fields = sectionOutline.section13.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    case "14":
      Fields = sectionOutline.section14.form;
      return (
        <CardContent
          sx={{ backgroundColor: "rgba(255,255,255,0.87)", margin: "20px" }}
        >
          {Fields.map((item) => (
            <DynamicInput inputFieldJSON={item} sectionNumber={sectionNumber} />
          ))}
        </CardContent>
      );
      break;
    default:
      break;
  }
}
