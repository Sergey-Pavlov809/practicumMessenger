import { Api } from "./api";
import { Profile, ISetNewPassword } from "../types";

class Users extends Api {
  constructor() {
    super("/user");
  }

  putProfile(data: Profile): Promise<unknown> {
    return this.http.put("/profile", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  putUserAvatar(data: FormData): Promise<unknown> {
    return this.http.put("/profile/avatar", {
      data,
    });
  }

  putUserPassword(data: ISetNewPassword): Promise<unknown> {
    return this.http.put("/password", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  postSearchUser(data: { login: string }): Promise<unknown> {
    return this.http.post("/search", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const UsersApi = new Users();
