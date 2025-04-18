export interface User {
    id: string,
    first_name: string,
    last_name_initial: string,
    middle_name_initial: string,
    email: string,
    birthdate: string,
    county_name: string,
    created: string,
    updated: string,
}

export const fetchUser = async(): Promise<User> => {

  try {
    const response = await fetch(
      // `${process.env.NEXT_PUBLIC_API_URL}/user`,
      `https://recordbooks-api-dev.azurewebsites.net/signin`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.user as User;
  } catch (error) {
    throw error;
  }

}

export const dummySignIn = async(
  id: string,
): Promise<string> => {
  try {
    
    const response = await fetch(
      // `${process.env.NEXT_PUBLIC_API_URL}/signin`,
      `https://recordbooks-api-dev.azurewebsites.net/signin`,
      {
        method: "POST",
        body: id,
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Unexpected error occurred");
    }
    return data.access_token;
  } catch (error) {
    throw error;
  }
};