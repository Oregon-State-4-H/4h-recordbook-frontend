export type subpageOutline = {
  title: string;
  frontend_path_seg: string;
  desktop_display: string;
  mobile_display: string;
  create: subpageFunctionOutline;
  update: subpageFunctionOutline[];
  get_all: subpageFunctionOutline;
  get_one: subpageFunctionOutline;
  display: subpageFunctionOutline;
};

export type subpageFunctionOutline = {
  label: string;
  backend_path: string;
  fields: {
    name: string;
    key: string;
    input_type: string;
  }[];
};

export const subpageFunctionEmpty: subpageFunctionOutline = {
  label: "",
  backend_path: "",
  fields: [],
};

export const subpageEmpty: subpageOutline = {
  title: "",
  frontend_path_seg: "",
  desktop_display: "",
  mobile_display: "",
  create: subpageFunctionEmpty,
  update: [],
  get_all: subpageFunctionEmpty,
  get_one: subpageFunctionEmpty,
  display: subpageFunctionEmpty,
};
