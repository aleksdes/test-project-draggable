import { API_URL } from "~/constants/urls";

const useResponse = async (data = null, options = {}) => {
  let response = {};

  if (options.method !== "GET" && data) {
    if (typeof FormData !== "undefined" && data instanceof FormData) {
      options.body = data;
    } else {
      options.body = JSON.stringify(data);
      options.contentType = "application/json; charset=UTF-8";
    }
  }

  try {
    response = await fetch(API_URL + options.url, {
      credentials: "same-origin",
      headers: {
        ...(options.cookies && {
          Cookie: options.cookies,
        }),
        ...(options.contentType && {
          "Content-Type": options.contentType,
        }),
        ...(options.token && {
          Authorization: `Bearer ${options.token}`,
        }),
        ...(options.userAgent && {
          "User-agent": options.userAgent,
        }),
      },
      method: options.method,
      ...(options.body && {
        body: options.body,
      }),
    });
  } catch (error) {
    response.status = 500;
    console.error(error);
  }

  try {
    response = await response.json();
  } catch (error) {
    console.error(error);
    response.errors = true;
    response.message = "An error occurred on the server. Try again later.";
  }

  return response;
};

class useFetch {
  static delete(url, data = null, opts = {}) {
    return useResponse(data, {
      method: "DELETE",
      url,
      ...opts,
    });
  }

  static get(url, data = null, opts = {}) {
    return useResponse(data, {
      method: "GET",
      url,
      ...opts,
    });
  }

  static patch(url, data = null, opts = {}) {
    return useResponse(data, {
      method: "PATCH",
      url,
      ...opts,
    });
  }

  static post(url, data = null, opts = {}) {
    return useResponse(data, {
      method: "POST",
      url,
      ...opts,
    });
  }

  static put(url, data = null, opts = {}) {
    return useResponse(data, {
      method: "PUT",
      url,
      ...opts,
    });
  }
}

export default useFetch;
