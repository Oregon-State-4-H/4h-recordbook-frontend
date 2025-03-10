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
}

export default function ResumeCreateModalContent({
  inputFieldJSON,
  sectionNumber,
}: DynamicInputProps) {
  const [selected, setSelected] = React.useState("");

  const handleSelect = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
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
              fullWidth
              id={inputFieldJSON.label + "InputSection" + sectionNumber}
              label={inputFieldJSON.label}
              helperText={inputFieldJSON.placeholder}
              margin="normal"
              onChange={(e) => setInputValue(e.target.value)}
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
              fullWidth
              id={inputFieldJSON.label + "InputSection" + sectionNumber}
              label={inputFieldJSON.label}
              multiline
              rows={6}
              helperText={inputFieldJSON.placeholder}
              margin="normal"
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
              fullWidth
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
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputFieldJSON.label}
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
