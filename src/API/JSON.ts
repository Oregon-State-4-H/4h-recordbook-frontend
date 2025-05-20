export type selectOption = {
  label: string;
  value: string;
};

export type formFieldTextOrNumber = {
  type: string;
  label: string;
  name: string;
  required: string;
  placeholder: string;
};

export type formFieldOption = {
  type: string;
  label: string;
  name: string;
  options: selectOption[];
};

export type formField = formFieldOption | formFieldTextOrNumber;
export type formFields = formField[];

export function isFieldOption(
  formFieldAny: formField
): formFieldAny is formFieldOption {
  return (formFieldAny as formFieldOption).type == "select";
}

export function isFieldTextOrNumber(
  formFieldAny: formField
): formFieldAny is formFieldTextOrNumber {
  return (
    (formFieldAny as formFieldTextOrNumber).type == "text-number" ||
    (formFieldAny as formFieldTextOrNumber).type == "text-long" ||
    (formFieldAny as formFieldTextOrNumber).type == "text"
  );
}
