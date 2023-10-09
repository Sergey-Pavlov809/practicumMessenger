import Handlebars from "handlebars";
import { tmpl } from "./Profile.tmpl";
import "./Profile.less";

const PROFILE_DATA = {
  f_name: "Sergey",
  s_name: "Pavlov",
  age: "16",
  email: "asdqwe@mail.ru",
};

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    name: PROFILE_DATA.f_name,
    surname: PROFILE_DATA.s_name,
    email: PROFILE_DATA.email,
  });
};
