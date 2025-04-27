export function buildBaseUrl() {
  // If env variable is "PROD"
  if (process.env.ENV === "PROD") {
    return "";
  }

  // return "https://recordbooks-api-dev.azurewebsites.net/";
  // return "http://localhost:8080/";
  return "https://71670e0d-79ef-4f1d-a370-aa697c91eff4.mock.pstmn.io/";
}
