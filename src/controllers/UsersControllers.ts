import { UsersApi } from "../api/UsersAPI";
import { IPassword, User, IUserProfile } from "../types";
import Router from "../routing/Router";
import { StoreApp } from "../core/Store";

export const changeIUserProfile = async (data: IUserProfile) => {
  try {
    const user = await UsersApi.putIUserProfile(data) as User;

    StoreApp.dispatch({ user: user });
    Router.go("/settings");

  } catch (e: any) {
    console.error("change user profile", e);
  }
};

export const changeUserAvatar = async (data: FormData) => {
  try {
    const user = await UsersApi.putUserAvatar(data) as User;
    StoreApp.dispatch({ user: user });

  } catch (e: any) {
    console.error("change user avatar", e);
  }
};

export const changeUserIPassword = async (data: IPassword) => {
  try {
    await UsersApi.putUserIPassword(data);
  } catch (e: any) {
    console.error("change user password", e);
  }
};

export const searchUser = async (data: { login: string }) => {
  const users = await UsersApi.postSearchUser(data) as User[];

  StoreApp.dispatch({ foundUsers: users });
};
