import { buildBaseUrl } from "@/API/base";

export interface UserInput {
  birthdate: string;
  county_name: string;
  email: string;
  first_name: string;
  last_name_initial: string;
  middle_name_initial: string;
}

export const emptyUser: User = {
  birthdate: "",
  county_name: "",
  email: "",
  first_name: "",
  last_name_initial: "",
  middle_name_initial: "",
  created: "",
};

export interface User {
  birthdate: string;
  county_name: string;
  email: string;
  first_name: string;
  last_name_initial: string;
  middle_name_initial: string;
  created: string;
}

export const updateUser = async (jwt: string, input: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
      body: input,
    });
    await response;
    if (!response.ok) {
      throw new Error("Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (jwt: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.user as User;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (jwt: string) => {
  try {
    const response = await fetch(`${buildBaseUrl()}user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Adjust if needed
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return true;
  } catch (error) {
    throw error;
  }
};
