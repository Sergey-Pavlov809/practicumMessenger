import { AuthAPI } from "../api/AuthAPI";
import { User, ISignUp, ISignIn } from "../types";

import Router from "../routing/Router";
import { StoreApp } from "../core/Store";
import { closeSockets } from "./MessagesControllers";

export const getUserInfo = async () => {
  const userData = await AuthAPI.getUserInfo() as User;

  StoreApp.dispatch({ user: userData });
};

export const signIn = async (data: ISignIn) => {
  try {
    await AuthAPI.postSignIn(data);
    getUserInfo().then();

    Router.go("/messenger");
  } catch (e: any) {
    console.error("sign in", e);
  }
};

export const signUp = async (data: ISignUp) => {
  try {
    await AuthAPI.postSignUp(data);
    getUserInfo().then();

    Router.go("/messenger");
  } catch (e: any) {
    console.error("sign up", e.message);
  }
};

export const logout = async () => {
  try {
    closeSockets();
    await AuthAPI.postLogout();

    StoreApp.dispatch({ user: {} });
    Router.go("/");
  } catch (e: any) {
    console.error("logout", e.message);
  }
};
