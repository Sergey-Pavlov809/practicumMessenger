import Handlebars from "handlebars";

import { tmpl } from "./Registration.tmpl";

export const Registration = () => {
  return Handlebars.compile(tmpl)({});
};
