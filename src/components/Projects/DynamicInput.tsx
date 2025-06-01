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
import { DayJSTypetoRFC3339 } from "@/components/Date";
import dayjs from "dayjs";
import { formField, isFieldTextOrNumber, isFieldOption } from "@/API/JSON";
import {
  AnimalProjectTypes,
  isExpense,
  isAnimal,
  isAnimalKey,
  isExpenseKey,
  isGainKey,
  Project,
} from "@/API/ProjectAPI";

interface DynamicInputPropsSubpage {
  inputFieldJSON: formField;
  subpage: string;
  setMapState: (
    value: React.SetStateAction<Map<string, string | number>>
  ) => void;
  originalToUpdate: AnimalProjectTypes;
}

interface DynamicInputPropsProject {
  inputFieldJSON: formField;
  setMapState: (
    value: React.SetStateAction<Map<string, string | number>>
  ) => void;
}

export function DynamicInputSubpage({
  inputFieldJSON,
  subpage,
  setMapState,
  originalToUpdate,
}: DynamicInputPropsSubpage) {
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
      if (isExpense(originalToUpdate) && isExpenseKey(originalValueKey)) {
        const originalValueStringOrNumber: string | number =
          originalToUpdate[originalValueKey];

        if (typeof originalValueStringOrNumber == "string") {
          originalValue = originalValueStringOrNumber;
        } else {
          originalValue = originalValueStringOrNumber.toString();
        }
      }
      break;
    case "Animal":
      if (isAnimal(originalToUpdate) && isAnimalKey(originalValueKey)) {
        const originalValueStringOrNumber: string | number =
          originalToUpdate[originalValueKey];

        if (typeof originalValueStringOrNumber == "string") {
          originalValue = originalValueStringOrNumber;
        } else {
          originalValue = originalValueStringOrNumber.toString();
        }
      }
      break;
    case "Gain":
      if (isAnimal(originalToUpdate) && isGainKey(originalValueKey)) {
        const originalValueStringOrNumber: string | number =
          originalToUpdate[originalValueKey];

        if (typeof originalValueStringOrNumber == "string") {
          originalValue = originalValueStringOrNumber;
        } else {
          originalValue = originalValueStringOrNumber.toString();
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
                  <MenuItem value={item.value} key={index}>
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

export function DynamicInputProject({
  inputFieldJSON,
  setMapState,
}: DynamicInputPropsProject) {
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
        console.log(name);
        console.log(value);
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
                  <MenuItem value={item.value} key={index}>
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
