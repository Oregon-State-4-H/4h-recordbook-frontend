import React, { useEffect } from "react";
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
import { toDayJSType, DayJSTypetoRFC3339 } from "@/components/Date";
import dayjs from "dayjs";

interface DynamicInputProps {
  inputFieldJSON: { [key: string]: any };
  subpage: string;
  updateMap: (key: string, value: any) => void;
  originalToUpdate: AnimalProjectTypes;
}

export default function ResumeCreateModalContent({
  inputFieldJSON,
  subpage,
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

  switch (subpage) {
    case "Expense":
      if (isExpense(originalToUpdate)) {
        switch (originalValueKey) {
          case "cost":
            originalValue = originalToUpdate.cost.toString();
            break;
          case "date":
            originalValue = originalToUpdate.date;
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
                inputFieldJSON.label + "InputSection" + subpage + "Label"
              }
              name={inputFieldJSON.name}
              id={inputFieldJSON.label + "InputSection" + subpage}
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
    case "date":
      // set store default value in case user does not change date
      useEffect(() => {
        updateMap(inputFieldJSON.name, DayJSTypetoRFC3339(dayjs()));
      }, []);

      if (typeof inputFieldJSON.label == "string") {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={inputFieldJSON.label}
              sx={{ width: "100%" }}
              name={inputFieldJSON.name}
              defaultValue={toDayJSType(originalValue)}
              onChange={(newValue) =>
                updateMap(inputFieldJSON.name, DayJSTypetoRFC3339(newValue))
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
