import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { AnimalProjectTypes, isExpense } from "../../API/ProjectAPI";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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
    // case "date":
    //   if (typeof inputFieldJSON.label == "string") {
    //     return (
    //       <LocalizationProvider dateAdapter={AdapterDayjs}>
    //         <DemoContainer components={["DatePicker"]}>
    //           <DatePicker
    //             label={inputFieldJSON.label}
    //             defaultValue={originalValue}
    //           />
    //         </DemoContainer>
    //       </LocalizationProvider>
    //     );
    //   }
    //   break;
    default:
      break;
  }
}
