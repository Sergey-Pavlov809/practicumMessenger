import { expect } from "chai";
import { queryString } from "./queryString";

describe("queryStringify", () => {
  it("корректно работает, если в аргументах пустой объект", () => {
    const res = queryString({});

    expect(res).to.equal("");
  });

  it("корректно работает, если в аргументах не пустой объект", () => {
    const res = queryString({ arg: 1, arg2: 2 });

    expect(res).to.equal("arg=1&arg2=2");
  });
});
