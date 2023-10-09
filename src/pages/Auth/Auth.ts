import Handlebars from "handlebars";
import { tmpl } from "./Auth.tmpl";
import "./Auth.less";

export const Auth = () => {
  return Handlebars.compile(tmpl)({});
};
