// import * as api from "../api/configuration";
import * as passwords from "../../platforms/test-platform/dummy";

export const Configuration = [
  passwords.DummyApp()
] as const;