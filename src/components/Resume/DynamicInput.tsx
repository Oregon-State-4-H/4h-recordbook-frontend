import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import {
  SectionAny,
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
} from "@/API/ResumeAPI";
import { formField, isFieldOption, isFieldTextOrNumber } from "@/API/JSON";

interface DynamicInputProps {
  inputFieldJSON: formField;
  sectionNumber: string;
  updateMap: (key: string, value: string | number) => void;
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

  const originalValueKey: string = inputFieldJSON.name;
  let originalValue: string = "";

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
          case "scope":
            originalValue = originalToUpdate.scope;
            break;
          case "level":
            originalValue = originalToUpdate.level;
            break;
        }
      }
      break;
    case "5":
      if (isS5(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "leadership_role":
            originalValue = originalToUpdate.leadership_role;
            break;
          case "hours_spent":
            originalValue = originalToUpdate.hours_spent.toString();
            break;
          case "num_people_reached":
            originalValue = originalToUpdate.num_people_reached.toString();
            break;
        }
      }
      break;
    case "6":
      if (isS6(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "organization_name":
            originalValue = originalToUpdate.organization_name;
            break;
          case "leadership_role":
            originalValue = originalToUpdate.leadership_role;
            break;
          case "hours_spent":
            originalValue = originalToUpdate.hours_spent.toString();
            break;
          case "num_people_reached":
            originalValue = originalToUpdate.num_people_reached.toString();
            break;
        }
      }
      break;
    case "7":
      if (isS7(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "club_member_activities":
            originalValue = originalToUpdate.club_member_activities;
            break;
          case "hours_spent":
            originalValue = originalToUpdate.hours_spent.toString();
            break;
          case "num_people_reached":
            originalValue = originalToUpdate.num_people_reached.toString();
            break;
        }
      }
      break;
    case "8":
      if (isS8(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "individual_group_activities":
            originalValue = originalToUpdate.individual_group_activities;
            break;
          case "hours_spent":
            originalValue = originalToUpdate.hours_spent.toString();
            break;
          case "num_people_reached":
            originalValue = originalToUpdate.num_people_reached.toString();
            break;
        }
      }
      break;
    case "9":
      if (isS9(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "communication_type":
            originalValue = originalToUpdate.communication_type;
            break;
          case "topic":
            originalValue = originalToUpdate.topic;
            break;
          case "times_given":
            originalValue = originalToUpdate.times_given.toString();
            break;
          case "location":
            originalValue = originalToUpdate.location;
            break;
          case "audience_size":
            originalValue = originalToUpdate.audience_size.toString();
            break;
        }
      }
      break;
    case "10":
      if (isS10(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "communication_type":
            originalValue = originalToUpdate.communication_type;
            break;
          case "topic":
            originalValue = originalToUpdate.topic;
            break;
          case "times_given":
            originalValue = originalToUpdate.times_given.toString();
            break;
          case "location":
            originalValue = originalToUpdate.location;
            break;
          case "audience_size":
            originalValue = originalToUpdate.audience_size.toString();
            break;
        }
      }
      break;
    case "11":
      if (isS11(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "event_and_level":
            originalValue = originalToUpdate.event_and_level;
            break;
          case "exhibits_or_division":
            originalValue = originalToUpdate.exhibits_or_division;
            break;
          case "ribbon_or_placings":
            originalValue = originalToUpdate.ribbon_or_placings;
            break;
        }
      }
      break;
    case "12":
      if (isS12(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "level":
            originalValue = originalToUpdate.level;
            break;
          case "contest_or_event":
            originalValue = originalToUpdate.contest_or_event;
            break;
          case "recognition_received":
            originalValue = originalToUpdate.recognition_received;
            break;
        }
      }
      break;
    case "13":
      if (isS13(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "recognition_type":
            originalValue = originalToUpdate.recognition_type;
            break;
        }
      }
      break;
    case "14":
      if (isS14(originalToUpdate)) {
        switch (originalValueKey) {
          case "year":
            originalValue = originalToUpdate.year;
            break;
          case "nickname":
            originalValue = originalToUpdate.nickname;
            break;
          case "recognition_type":
            originalValue = originalToUpdate.recognition_type;
            break;
        }
      }
      break;
    default:
      break;
  }

  const [selected, setSelected] = React.useState("");

  const handleSelect = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
    const { name, value } = event.target;
    updateMap(name, value);
  };

  switch (inputFieldJSON.type) {
    case "text":
      if (
        typeof inputFieldJSON.label == "string" &&
        isFieldTextOrNumber(inputFieldJSON)
      ) {
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
      if (
        typeof inputFieldJSON.label == "string" &&
        isFieldTextOrNumber(inputFieldJSON)
      ) {
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
      if (
        typeof inputFieldJSON.label == "string" &&
        isFieldTextOrNumber(inputFieldJSON)
      ) {
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
      if (isFieldOption(inputFieldJSON)) {
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
                  inputFieldJSON.label +
                  "InputSection" +
                  sectionNumber +
                  "Label"
                }
                name={inputFieldJSON.name}
                id={inputFieldJSON.label + "InputSection" + sectionNumber}
                value={selected}
                label={inputFieldJSON.label}
                onChange={handleSelect}
              >
                {inputFieldJSON.options.map((item, index) => (
                  <MenuItem value={item.label} key={index}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      }
      break;
    default:
      break;
  }
}
