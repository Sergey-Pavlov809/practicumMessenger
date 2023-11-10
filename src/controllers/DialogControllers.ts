import { DialogsAPI } from "../api/DialogsAPI";
import { DialogList, DialogUsers, Users } from "../types";
import { StoreApp } from "../core/Store";
import { newConnect } from "./MessagesControllers";

export const getDialogs = async () => {
  try {
    const dialogList = await DialogsAPI.getDialogs() as DialogList[];

    dialogList.map(async (dialog) => {
      const { token } = await DialogsAPI.postToken(dialog.id) as any;

      await newConnect(dialog.id, token);
    });

    StoreApp.dispatch({ dialogList });
  } catch (e: any) {
    console.error("get dialogs", e);
  }
};

export const createDialogs = async (data: { title: string }) => {
  try {
    await DialogsAPI.postCreateDialogs(data);

    getDialogs().then();
  } catch (e: any) {
    console.error("create dialogs", e);
  }
};

export const deleteDialog = async (data: { chatId: number }) => {
  await DialogsAPI.deleteDialogs(data);
  getDialogs().then();

  StoreApp.dispatch({ selectedDialog: {} });
};

export const getDialogUsers = async (id: number) => {
  const dialogUsers = await DialogsAPI.getDialogUsers(id) as DialogUsers[];

  StoreApp.dispatch({ dialogUsers });
};

export const addUser = async (data: Users) => {
  await DialogsAPI.putAddUsers(data);
  getDialogUsers(data.chatId).then();
};

export const deleteUser = async (data: Users) => {
  await DialogsAPI.deleteUsers(data);
  getDialogUsers(data.chatId).then();
};
