import { Api } from "./api";
import { IISignUpData, ISignUpData } from "../types";

class Auth extends Api {
  constructor() {
    super("/auth");
  }

  postSignUp(data: ISignUpData): Promise<unknown> {
    return this.http.post("/signup", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  postSignIn(data: IISignUpData): Promise<unknown> {
    return this.http.post("/signin", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  getUserInfo(): Promise<unknown> {
    return this.http.get("/user", {
      headers: { "Content-Type": "application/json" },
    });
  }

  postLogout(): Promise<unknown> {
    return this.http.post("/logout", {
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const AuthAPI = new Auth();
