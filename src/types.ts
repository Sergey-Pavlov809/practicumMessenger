export interface ISignIn {
  login: string;
  password: string;
}

export interface ISignUp {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface Users {
  users: number[];
  chatId: number;
}

export interface DialogList {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User,
    time: string;
    content: string;
  };
}

export interface DialogUsers {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  role: string;
}

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface IUserProfile {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  oldIPassword: string;
  newIPassword: string;
}

export interface IPassword {
  oldIPassword: string;
  newIPassword: string;
}

export interface Message {
  dialog_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}
