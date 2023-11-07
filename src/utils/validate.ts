import Validator from "./Validator";

const findInputError = (input: HTMLElement) => {
  console.log(input.closest(".input__container"))
  return input.closest(".input__container")?.querySelector(".error");
};

const addError = (
  input: HTMLInputElement,
  error: {
    verify: boolean;
    message: string;
  },
): void => {
  const errorElement = findInputError(input);

  console.log(errorElement)

  if (!error.verify && errorElement) {
    errorElement.textContent = error.message;
    errorElement?.classList.add("error_visible");
  } else {
    console.log("remove")
    errorElement?.classList.remove("error_visible");
  }
};


export const handleSubmit = (event: Event): any  => {
  event.preventDefault();
  const inputValue: any = {};
  const inputList = document.querySelectorAll(".input");

  inputList.forEach((input: any) => {
    inputValue[input.name] = input.value;

    const result = Validator.validate(input.name, input.value);

    if (result) {
      addError(input, result);
    }

  });

  console.log(inputList);

  return inputValue;
};

export const focus = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const errorElement = findInputError(input);

  errorElement?.classList.remove("error_visible");
};

export const blur = (event: Event): void => {
  // eslint-disable-next-line quotes

  const input = event.target as HTMLInputElement;
  const result = Validator.validate(input.name, input.value);

  console.log(result)

  if (result) {
    addError(input, result);
  }
};
