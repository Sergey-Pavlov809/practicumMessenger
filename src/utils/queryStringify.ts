export type RequestData = Record<string, string | number>;

export function queryStringify(data: RequestData) {
  if (!data) return "";
  return Object.entries(data).reduce((acc, [key, value], index, arr) => {
    return `${acc}${key}=${value}${index < arr.length - 1 ? "&" : ""}`;
  }, "?");
}

/**
 * 
 * type StringIndexed = Record<string, any>;

const obj: StringIndexed = {
    key: 1,
    key2: 'test',
    key3: false,
    key4: true,
    key5: [1, 2, 3],
    key6: {a: 1},
    key7: {b: {d: 2}},
};

function queryStringify(data: StringIndexed, parentKey = ""): string | never {
  if (!data || typeof data !== "object") {
    throw new Error("input must be an object");
  }

  const params: string[] = [];

  for (const key in data) {
    if (Array.isArray(data[key])) {

      data[key].forEach((item: any, index: number) => {
        const paramKey = parentKey
          ? `${parentKey}[${encodeURIComponent(key)}][${index}]`
          : `${encodeURIComponent(key)}[${index}]`;
        params.push(`${paramKey}=${encodeURIComponent(item)}`);
      });
    } else if (typeof data[key] === "object") {

      const paramKey = parentKey
        ? `${parentKey}[${encodeURIComponent(key)}]`
        : encodeURIComponent(key);
      const nestedParams = queryStringify(data[key], paramKey);
      params.push(nestedParams);
    } else {

      const paramKey = parentKey
        ? `${parentKey}[${encodeURIComponent(key)}]`
        : encodeURIComponent(key);
      params.push(`${paramKey}=${encodeURIComponent(data[key])}`);
    }
  }

  return params.join("&");
}
 */