import * as api from "../../../api/configuration";
// import * as passwords from "../../platforms/test-platform/password";

export const Configuration: api.InfraConfigurationExport = [
  {
    configuration: {
      resources: {
        azuread_application: {
          "another": {
            name: "new-app"
          }
        }
      }
    }
  }
] as const;
