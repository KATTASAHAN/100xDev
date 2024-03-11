import { BACKEND_URL, BACKEND_URL_LOCAL } from "../config";
import { Env } from "../types";

const envRouter = (env: Env = "prod") => {
  return env === "local" ? BACKEND_URL_LOCAL : BACKEND_URL;
};

export default envRouter;
