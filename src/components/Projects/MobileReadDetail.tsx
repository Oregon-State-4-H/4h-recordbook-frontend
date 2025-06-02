import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import subpageOutline from "@/components/Projects/SubpageOutline.json";
import { toDDMMYY } from "@/components/Date";
import {
  AnimalProjectTypes,
  isExpense,
  isAnimal,
  AnimalKeys,
  GainKeys,
  isSupply,
  SupplyKeys,
} from "@/API/ProjectAPI";
import { formFields } from "@/API/JSON";

interface ResumeRowProps {
  projectSubentry: AnimalProjectTypes;
  endpoint: string;
}

export default function ResumeCardModalContent({
  projectSubentry,
  endpoint,
}: ResumeRowProps) {
  let Fields: formFields = [];

  switch (true) {
    case isExpense(projectSubentry):
      Fields = subpageOutline.expense.form;
      break;
    case isSupply(projectSubentry):
      Fields = subpageOutline.supply.form;
      break;
    case isAnimal(projectSubentry) && endpoint == "animal":
      Fields = subpageOutline.animal.form;
      break;
    case isAnimal(projectSubentry) && endpoint == "gain":
      Fields = subpageOutline.gain.form;
      break;
    default:
      break;
  }

  if (isExpense(projectSubentry)) {
    return (
      <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {projectSubentry.date}
        </Typography>
        <Typography variant="h5" component="div" marginBottom="20px">
          {projectSubentry.items}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Quantity:
        </Typography>
        <Typography variant="body1" marginBottom="10px">
          {projectSubentry.quantity}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Cost:
        </Typography>
        <Typography variant="body1" marginBottom="10px">
          {projectSubentry.cost}
        </Typography>
      </CardContent>
    );
  } else if (isAnimal(projectSubentry) && endpoint == "animal") {
    return (
      <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
        {AnimalKeys.map((key) => (
          <Box key={key}>
            <Typography variant="body2" color="text.disabled">
              {Fields.find((object) => object.name === key)?.label}
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {/* projectSubentry[key] is the value of the key in the object */}
              {/* the logic pertaining to date is to display a human readable string instead of any RFC3339 date string */}
              {Fields.find((object) => object.name === key)?.type == "date" &&
              typeof projectSubentry[key] == "string"
                ? toDDMMYY(projectSubentry[key])
                : projectSubentry[key]}
            </Typography>
          </Box>
        ))}
      </CardContent>
    );
  } else if (isAnimal(projectSubentry) && endpoint == "gain") {
    return (
      <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
        {GainKeys.map((key) => (
          <Box key={key}>
            <Typography variant="body2" color="text.disabled">
              {Fields.find((object) => object.name === key)?.label}
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {/* projectSubentry[key] is the value of the key in the object */}
              {/* the logic pertaining to date is to display a human readable string instead of any RFC3339 date string */}
              {Fields.find((object) => object.name === key)?.type == "date" &&
              typeof projectSubentry[key] == "string"
                ? toDDMMYY(projectSubentry[key])
                : projectSubentry[key]}
            </Typography>
          </Box>
        ))}
      </CardContent>
    );
  } else if (isSupply(projectSubentry) && endpoint == "supply") {
    return (
      <CardContent sx={{ backgroundColor: "rgba(255,255,255,0.87)" }}>
        {SupplyKeys.map((key) => (
          <Box key={key}>
            <Typography variant="body2" color="text.disabled">
              {Fields.find((object) => object.name === key)?.label}
            </Typography>
            <Typography variant="body1" marginBottom="10px">
              {/* projectSubentry[key] is the value of the key in the object */}
              {/* the logic pertaining to date is to display a human readable string instead of any RFC3339 date string */}
              {Fields.find((object) => object.name === key)?.type == "date" &&
              typeof projectSubentry[key] == "string"
                ? toDDMMYY(projectSubentry[key])
                : projectSubentry[key]}
            </Typography>
          </Box>
        ))}
      </CardContent>
    );
  }
}
