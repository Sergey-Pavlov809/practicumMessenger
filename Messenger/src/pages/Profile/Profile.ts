import Handlebars from "handlebars";
import { tmpl } from "./Profile.tmpl";
import "./Profile.less";

const PROFILE_DATA = {
  f_name: "Sergey",
  s_name: "Pavlov",
  age: "16",
  email: "asdqwe@mail.ru",
  avatarUrl: "https://telegram.org/img/t_logo.png",
  phone: "1234143534",
};

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    name: PROFILE_DATA.f_name,
    surname: PROFILE_DATA.s_name,
    email: PROFILE_DATA.email,
    avatarUrl: PROFILE_DATA.avatarUrl,
    phone: PROFILE_DATA.phone,
  });
};
