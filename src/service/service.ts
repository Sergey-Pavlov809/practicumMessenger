enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options = {
  method: METHODS;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
};

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

function queryStringify(data: object) {
  if (!data) return "";

  const result = [];
  for (const key in data) {
    result.push(`${key}=${data[key as keyof object]}`);
  }
  return `?${result.join("&")}`;
}

export class HTTPTransport {
  get: HTTPMethod = (url, options) =>
    this.request(url, {
      ...options,
      method: METHODS.GET,
      data: queryStringify(options?.data),
    }).catch((err) => console.log(err));

  post: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.POST }).catch((err) =>
      console.log(err)
    );

  put: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.PUT }).catch((err) =>
      console.log(err)
    );

  delete: HTTPMethod = (url, options) =>
    this.request(url, { ...options, method: METHODS.DELETE }).catch((err) =>
      console.log(err)
    );

  request = (url: string, options: Options) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (options.method === METHODS.GET) {
        xhr.open(options.method, url + options.data);
      } else {
        xhr.open(options.method, url);
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (
        options.method === METHODS.GET ||
        options.method === METHODS.DELETE ||
        !options.data
      ) {
        xhr.send();
      } else {
        xhr.send(options.data);
      }
    });
  };
}
