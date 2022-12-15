import { isDev } from "./utilities/enviroments";
export const isProd = !isDev();

let config = {
  date_format: "DD.MM.yyyy",
  apiUrl: !isProd ? "https://sdfs.asdasda.net/" : "[TODO add prod URL here]",
  environment: process.env,
  staticDefinitions: true,
};

export default config;
