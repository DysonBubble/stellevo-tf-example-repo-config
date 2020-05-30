// import * as api from "../../api/configuration";
import * as test_platform from "../../platforms/test-platform";

export const Configuration = [
  {
    configuration: test_platform.DummyApp(),
    prefix: "my-prefix-"
  }
] as const;
