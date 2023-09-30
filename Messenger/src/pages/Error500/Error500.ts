import Handlebars from "handlebars";

import { tmpl } from "./Error500.tmpl";

export const Error500 = () => {
  return Handlebars.compile(tmpl);
};
