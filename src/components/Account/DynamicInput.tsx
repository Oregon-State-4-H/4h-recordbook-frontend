import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { User } from "@/API/User";
import { DayJSTypetoRFC3339 } from "@/components/Date";
import dayjs from "dayjs";
import { formField, isFieldTextOrNumber, isFieldOption } from "@/API/JSON";

interface DynamicInputProps {
  inputFieldJSON: formField;
  setMapState: (value: React.SetStateAction<Map<any, any>>) => void;
  originalToUpdate: User;
}

export default function ResumeCreateModalContent({
  inputFieldJSON,
  setMapState,
  originalToUpdate,
}: DynamicInputProps) {
  const [selected, setSelected] = React.useState("");
  const hasRun = useRef(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    if (type == "number") {
      setMapState((map) => new Map(map.set(name, parseFloat(value))));
    } else {
      setMapState((map) => new Map(map.set(name, value)));
    }
  };

  const originalValueKey: string = inputFieldJSON.name;
  let originalValue: string = "";

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      // set store default value in case user does not change date
      if (inputFieldJSON.type == "date") {
        const defaultDateString = DayJSTypetoRFC3339(dayjs());
        setMapState(
          (map) => new Map(map.set(inputFieldJSON.name, defaultDateString))
        );
      }
    }
  }, [inputFieldJSON.name, inputFieldJSON.type, setMapState]);

  switch (originalValueKey) {
    case "birthdate":
      originalValue = originalToUpdate.birthdate;
      break;
    case "county_name":
      originalValue = originalToUpdate.county_name;
      break;
    case "email":
      originalValue = originalToUpdate.email;
      break;
    case "first_name":
      originalValue = originalToUpdate.first_name;
      break;
    case "last_name_initial":
      originalValue = originalToUpdate.last_name_initial;
      break;
    case "middle_name_initial":
      originalValue = originalToUpdate.middle_name_initial;
      break;
  }

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
              id={inputFieldJSON.label + "InputSection"}
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
              id={inputFieldJSON.label + "InputSection"}
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
              id={inputFieldJSON.label + "InputSection"}
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
      const handleSelect = (event: SelectChangeEvent) => {
        setSelected(event.target.value as string);
        const { name, value } = event.target;
        setMapState((map) => new Map(map.set(name, value)));
      };

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
                labelId={inputFieldJSON.label + "InputSection Label"}
                name={inputFieldJSON.name}
                id={inputFieldJSON.label + "InputSection"}
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
    case "date":
      if (typeof inputFieldJSON.label == "string") {
        if (originalValue == "") {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={inputFieldJSON.label}
                sx={{ width: "100%" }}
                name={inputFieldJSON.name}
                onChange={(newValue) =>
                  setMapState(
                    (map) =>
                      new Map(
                        map.set(
                          inputFieldJSON.name,
                          DayJSTypetoRFC3339(newValue)
                        )
                      )
                  )
                }
              />
            </LocalizationProvider>
          );
        }
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={inputFieldJSON.label}
              sx={{ width: "100%" }}
              name={inputFieldJSON.name}
              defaultValue={dayjs(originalValue)}
              onChange={(newValue) =>
                setMapState(
                  (map) =>
                    new Map(
                      map.set(inputFieldJSON.name, DayJSTypetoRFC3339(newValue))
                    )
                )
              }
            />
          </LocalizationProvider>
        );
      }
      break;
    default:
      break;
  }
}
