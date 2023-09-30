import Handlebars from "handlebars";

import { tmpl } from "./Auth.tmpl";

export const Auth = () => {
  console.log();
  return Handlebars.compile(tmpl)({});
};
