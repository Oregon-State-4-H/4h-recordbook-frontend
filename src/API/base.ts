export function buildBaseUrl() {
  // If env variable is "PROD"
  if (process.env.ENV === "PROD") {
    return "";
  }

  return "https://recordbooks-api-dev.azurewebsites.net/";
}
