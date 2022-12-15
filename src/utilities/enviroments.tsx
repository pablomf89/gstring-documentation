export const isDev = () => {
  let isDevEnviroment: boolean = false;
  if (process && process.env && process.env.REACT_APP_ENV_PREFIX) {
    const env = process.env.REACT_APP_ENV_PREFIX;
    isDevEnviroment = env === "a" || env === "d";
  }
  return isDevEnviroment;
};
