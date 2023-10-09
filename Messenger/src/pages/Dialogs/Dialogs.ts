import Handlebars from "handlebars";
import { tmpl } from "./Dialogs.tmpl";
import "./Dialogs.less";

const dialogues = [{ name: "asd" }, { name: "qwe" }, { name: "zxc" }];

export const Dialogs = () => {
  return Handlebars.compile(tmpl)({ dialogues });
};
