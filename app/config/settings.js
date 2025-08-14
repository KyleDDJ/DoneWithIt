//mosh
// import Constants from "expo-constants";

// const settings = {
//   dev: {
//     apiUrl: "http://192.168.226.168:9000/api",
//   },
//   staging: {
//     apiUrl: "http://192.168.226.168:9000/api",
//   },
//   prod: {
//     apiUrl: "http://192.168.226.168:9000/api",
//   },
// };

// const getCurrentSettings = () => {
//   if (_DEV_) return settings.dev;
//   if (Constants.manifest.releaseChannel === "staging") return settings.staging;
//   return settings.prod;
// };

// export default getCurrentSettings;

import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.104:9000/api",
  },
  staging: {
    apiUrl: "https://192.168.1.104:9000/api",
  },
  prod: {
    apiUrl: "https://192.168.1.104:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;

  const releaseChannel = Constants.expoConfig?.releaseChannel;

  if (releaseChannel === "staging") return settings.staging;

  return settings.prod;
};

export default getCurrentSettings;
