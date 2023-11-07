import { AuthAPI } from "../api/AuthAPI";
import { User, IISignUpData, ISignUpData } from "../types";

import Router from "../routing/Router";
import { StoreApp } from "../core/Store";
import { closeSockets } from "./MessagesControllers";

export const getUserInfo = async () => {
  const userData = await AuthAPI.getUserInfo() as User;

  StoreApp.dispatch({ user: userData });
};

export const signIn = async (data: IISignUpData) => {
  try {
    await AuthAPI.postSignIn(data);
    getUserInfo().then();

    Router.go("/messenger");
  } catch (e: any) {
    console.error("error", e);
  }
};

export const signUp = async (data: ISignUpData) => {
  try {
    await AuthAPI.postSignUp(data);
    getUserInfo().then();

    Router.go("/messenger");
  } catch (e: any) {
    console.error("error", e.message);
  }
};

export const logout = async () => {
  try {
    closeSockets();
    await AuthAPI.postLogout();

    StoreApp.dispatch({ user: {} });
    Router.go("/");
  } catch (e: any) {
    console.error("error", e.message);
  }
};
