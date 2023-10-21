export function loginValidator(login: string): string {
  if (!login) return "Не введен логин";

  if (login.length < 3 || login.length > 20) {
    return "Некорректная длинна";
  }

  const regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(login)) {
    return "Содержит недопустимые символы";
  }

  if (/^\d+$/.test(login)) {
    return "Содержит недопустимые символы";
  }

  return "";
}

export function passwordValidator(password: string): string {
  if (!password) return "false";

  if (password.length < 8 || password.length > 40) {
    return "Некорректная длинна";
  }

  if (password.toLocaleLowerCase() === password)
    return "Должна быть хоты бы одна большая буква";

  return "";
}

export function nameValidator(name: string): string {
  const regex = /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z\-]*$/;

  if (!regex.test(name)) {
    return "Некорректное имя";
  }

  return "";
}

export function emailValidator(email: string): string {
  const emailPattern: RegExp =
    /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailPattern.test(email)) return "Некорректный емэйл";

  return "";
}

export function phoneValidator(phone: string): string {
  const pattern: RegExp = /^\+?\d{10,15}$/;

  if (!pattern.test(phone)) return "Некорректный номер";

  return "";
}

export function messageValidator(message: string): string {
  if (message.length === 0) return "пустое сообщение";

  return "";
}
