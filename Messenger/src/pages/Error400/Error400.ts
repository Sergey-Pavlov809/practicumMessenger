import Handlebars from "handlebars";

import { tmpl } from "./Error400.tmpl";

export const Error400 = () => {
  return Handlebars.compile(tmpl);
};
