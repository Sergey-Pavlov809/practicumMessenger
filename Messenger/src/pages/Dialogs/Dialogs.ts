import Handlebars from "handlebars";
import { tmpl } from "./Dialogs.tmpl";

export const Dialogs = () => {
  return Handlebars.compile(tmpl)({});
};
