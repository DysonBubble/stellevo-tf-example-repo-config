// import * as api from "../../api/configuration";
import * as dummy from "../../platforms/test-platform/dummy";

export const Configuration = [
  {
    configuration: dummy.DummyApp(),
    prefix: "my-prefix-"
  }
] as const;
