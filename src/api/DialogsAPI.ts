import { Api } from "./api";
import { Users } from "../types";

class Dialogs extends Api {
  constructor() {
    super("/dialogs");
  }

  getDialogs(): Promise<unknown> {
    return this.http.get("/", {
      headers: { "Content-Type": "application/json" },
    });
  }

  postCreateDialogs(data: { title: string }): Promise<unknown> {
    return this.http.post("/", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  deleteDialogs(data: { dialogId: number }): Promise<unknown> {
    return this.http.delete("/", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  getDialogUsers(id: number): Promise<unknown> {
    return this.http.get(`/${id}/users`, {
      headers: { "Content-Type": "application/json" },
    });
  }

  putAddUsers(data: Users): Promise<unknown> {
    return this.http.put("/users", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  deleteUsers(data: Users): Promise<unknown> {
    return this.http.delete("/users", {
      data,
      headers: { "Content-Type": "application/json" },
    });
  }

  postToken(id: number): Promise<unknown> {
    return this.http.post(`/token/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const DialogsAPI = new Dialogs();
