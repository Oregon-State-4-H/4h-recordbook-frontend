import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

interface DynamicInputProps {
  inputFieldJSON: { [key: string]: any };
  sectionNumber: string;
  updateMap: (key: string, value: any) => void;
}

export default function ResumeCreateModalContent({
  inputFieldJSON,
  sectionNumber,
  updateMap,
}: DynamicInputProps) {
  const [selected, setSelected] = React.useState("");

  const handleSelect = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
    const { name, value } = event.target;
    updateMap(name, value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    if (type == "number") {
      updateMap(name, parseFloat(value));
    } else {
      updateMap(name, value);
    }
  };

  switch (inputFieldJSON.type) {
    case "text":
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
      return (
        <Box sx={{ width: "100%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {inputFieldJSON.label}
            </InputLabel>
            <Select
              className="formInput"
              fullWidth
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
