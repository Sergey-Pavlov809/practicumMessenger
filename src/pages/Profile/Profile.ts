import Handlebars from "handlebars";
import { tmpl } from "./Profile.tmpl";
import "./Profile.less";

const PROFILE_DATA = {
  display_name: "display_name",
  login: "login",
  first_name: "Sergey",
  second_name: "Pavlov",
  age: "16",
  email: "asdqwe@mail.ru",
  avatar: "https://telegram.org/img/t_logo.png",
  phone: "1234143534",
};

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    first_name: PROFILE_DATA.first_name,
    second_name: PROFILE_DATA.second_name,
    display_name: PROFILE_DATA.display_name,
    login: PROFILE_DATA.login,
    email: PROFILE_DATA.email,
    avatarUrl: PROFILE_DATA.avatar,
    phone: PROFILE_DATA.phone,
  });
};
