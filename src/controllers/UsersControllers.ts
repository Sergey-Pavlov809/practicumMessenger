import { UsersApi } from "../api/UsersAPI";
import { ISetNewPassword, User, Profile } from "../types";
import Router from "../routing/Router";
import { StoreApp } from "../core/Store";

export const changeProfile = async (data: Profile) => {
  try {
    const user = await UsersApi.putProfile(data) as User;

    StoreApp.dispatch({ user: user });
    Router.go("/settings");

  } catch (e: any) {
    console.error("error", e);
  }
};

export const changeUserAvatar = async (data: FormData) => {
  try {
    const user = await UsersApi.putUserAvatar(data) as User;
    StoreApp.dispatch({ user: user });

  } catch (e: any) {
    console.error("error", e);
  }
};

export const changeUserPassword = async (data: ISetNewPassword) => {
  try {
    await UsersApi.putUserPassword(data);
  } catch (e: any) {
    console.error("error", e);
  }
};

export const searchUser = async (data: { login: string }) => {
  const users = await UsersApi.postSearchUser(data) as User[];

  StoreApp.dispatch({ foundUsers: users });
};
