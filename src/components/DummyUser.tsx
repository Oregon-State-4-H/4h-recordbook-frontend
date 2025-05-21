import { buildBaseUrl } from "@/API/base";

export const getAccessToken = async (): Promise<string> => {
  try {
    const response = await fetch(`${buildBaseUrl()}signin`, {
      method: "POST",
      body: '{"id": "1"}',
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.access_token as string;
  } catch (error) {
    throw error;
  }
};
