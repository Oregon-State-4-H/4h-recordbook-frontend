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
import { AnimalProjectTypes, isExpense } from "../../API/ProjectAPI";
import { DayJSTypetoRFC3339 } from "@/components/Date";
import dayjs from "dayjs";
import { formField, isFieldTextOrNumber, isFieldOption } from "@/API/JSON";

interface DynamicInputProps {
  inputFieldJSON: formField;
  subpage: string;
  setMapState: (value: React.SetStateAction<Map<any, any>>) => void;
  originalToUpdate: AnimalProjectTypes;
}

export default function ResumeCreateModalContent({
  inputFieldJSON,
  subpage,
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

  switch (subpage) {
    case "Expense":
      if (isExpense(originalToUpdate)) {
        switch (originalValueKey) {
          case "cost":
            originalValue = originalToUpdate.cost.toString();
            break;
          case "date":
            originalValue = originalToUpdate.date;
            console.log("originalToUpdate", originalToUpdate);
            console.log("originalToUpdate.date", originalToUpdate.date);
            console.log(
              "day js originalToUpdate.date",
              dayjs(originalToUpdate.date)
            );
            break;
          case "items":
            originalValue = originalToUpdate.items;
            break;
          case "quantity":
            originalValue = originalToUpdate.quantity.toString();
            break;
        }
      }
      break;
    default:
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
              id={inputFieldJSON.label + "InputSection" + subpage}
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
              id={inputFieldJSON.label + "InputSection" + subpage}
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
              id={inputFieldJSON.label + "InputSection" + subpage}
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
                labelId={
                  inputFieldJSON.label + "InputSection" + subpage + "Label"
                }
                name={inputFieldJSON.name}
                id={inputFieldJSON.label + "InputSection" + subpage}
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
