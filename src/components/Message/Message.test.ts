import { expect } from "chai";
import { Message } from ".";

describe("Message", () => {
  it("Корректное отображение текста", () => {
    const message = new Message({ text: "Message" });

    const element = message.element as HTMLElement;

    console.log(element.textContent)

    expect(element.textContent).to.eq("\n\nMessage\n");
  });
});