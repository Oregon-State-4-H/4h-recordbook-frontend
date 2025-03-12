import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {
  SectionAny,
  SectionEmpty,
  isS1,
  isS2,
  isS3,
  isS4,
  isS5,
  isS6,
  isS7,
  isS8,
  isS9,
  isS10,
  isS11,
  isS12,
  isS13,
  isS14,
} from "../API/ResumeAPI";

interface DynamicInputProps {
  inputFieldJSON: { [key: string]: any };
  sectionNumber: string;
  updateMap: (key: string, value: any) => void;
  originalToUpdate: SectionAny;
}

export default function ResumeCreateModalContent({
  inputFieldJSON,
  sectionNumber,
  updateMap,
  originalToUpdate,
}: DynamicInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    if (type == "number") {
      updateMap(name, parseFloat(value));
    } else {
      updateMap(name, value);
    }
  };

  var originalValueKey: string = inputFieldJSON.name;
  var originalValue: string = "";

  switch (sectionNumber) {
    case "1":
      if (isS1(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "club_leader":
            originalValue = originalToUpdate.club_leader;
            break;
          case "club_name":
            originalValue = originalToUpdate.club_name;
            break;
          case "grade":
            originalValue = originalToUpdate.grade.toString();
            break;
          case "num_in_club":
            originalValue = originalToUpdate.num_in_club.toString();
            break;
          case "meetings_held":
            originalValue = originalToUpdate.meetings_held.toString();
            break;
          case "meetings_attended":
            originalValue = originalToUpdate.meetings_attended.toString();
            break;
        }
      }
      break;
    case "2":
      if (isS2(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "project_name":
            originalValue = originalToUpdate.project_name;
            break;
          case "project_scope":
            originalValue = originalToUpdate.project_scope;
            break;
        }
      }
      break;
    case "3":
      if (isS3(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "activity_kind":
            originalValue = originalToUpdate.activity_kind;
            break;
          case "things_learned":
            originalValue = originalToUpdate.things_learned;
            break;
          case "level":
            originalValue = originalToUpdate.level;
            break;
        }
      }
      break;
    case "4":
      if (isS4(originalToUpdate)) {
      }
      break;
    case "5":
      if (isS5(originalToUpdate)) {
      }
      break;
    case "6":
      if (isS6(originalToUpdate)) {
      }
      break;
    case "7":
      if (isS7(originalToUpdate)) {
      }
      break;
    case "8":
      if (isS8(originalToUpdate)) {
      }
      break;
    case "9":
      if (isS9(originalToUpdate)) {
      }
      break;
    case "10":
      if (isS10(originalToUpdate)) {
      }
      break;
    case "11":
      if (isS11(originalToUpdate)) {
      }
      break;
    case "12":
      if (isS12(originalToUpdate)) {
      }
      break;
    case "13":
      if (isS13(originalToUpdate)) {
      }
      break;
    case "14":
      if (isS14(originalToUpdate)) {
      }
      break;
    default:
      break;
  }

  switch (inputFieldJSON.type) {
    case "text":
      if (typeof inputFieldJSON.label == "string") {
        // case for create
        return (
          <Box
            component="form"
            sx={{ width: "100%" }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="formInput"
              defaultValue={originalValue}
              fullWidth
              name={inputFieldJSON.name}
              id={inputFieldJSON.label + "InputSection" + sectionNumber}
              label={inputFieldJSON.label}
              helperText={inputFieldJSON.placeholder}
              margin="normal"
              onChange={handleInputChange}
            />
          </Box>
        );
      }
      break;
    case "text-long":
      if (typeof inputFieldJSON.label == "string") {
        return (
          <Box
            component="form"
            sx={{ width: "100%" }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="formInput"
              defaultValue={originalValue}
              fullWidth
              name={inputFieldJSON.name}
              id={inputFieldJSON.label + "InputSection" + sectionNumber}
              label={inputFieldJSON.label}
              multiline
              rows={6}
              helperText={inputFieldJSON.placeholder}
              margin="normal"
              onChange={handleInputChange}
            />
          </Box>
        );
      }
      break;
    case "number":
      if (typeof inputFieldJSON.label == "string") {
        return (
          <Box
            component="form"
            sx={{ width: "100%" }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="formInput"
              defaultValue={originalValue}
              fullWidth
              name={inputFieldJSON.name}
              id={inputFieldJSON.label + "InputSection" + sectionNumber}
              label={inputFieldJSON.label}
              type="number"
              helperText={inputFieldJSON.placeholder}
              margin="normal"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              onChange={handleInputChange}
            />
          </Box>
        );
      }
      break;
    case "select":
      const [selected, setSelected] = React.useState("");

      const handleSelect = (event: SelectChangeEvent) => {
        setSelected(event.target.value as string);
        const { name, value } = event.target;
        updateMap(name, value);
      };

      return (
        <Box sx={{ width: "100%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {inputFieldJSON.label}
            </InputLabel>
            <Select
              className="formInput"
              fullWidth
              defaultValue={originalValue}
              labelId={
                inputFieldJSON.label + "InputSection" + sectionNumber + "Label"
              }
              name={inputFieldJSON.name}
              id={inputFieldJSON.label + "InputSection" + sectionNumber}
              value={selected}
              label={inputFieldJSON.label}
              onChange={handleSelect}
            >
              {inputFieldJSON.options.map((item: any) => (
                <MenuItem value={item.label}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      );
      break;
    default:
      break;
  }
}
