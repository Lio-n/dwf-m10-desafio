const API_BASE_URL = "https://dwf-m9-desafio.vercel.app/api";

const fetchAPI = async ({ path, options, isSecure = false }: fetchAPIParams) => {
  const url = API_BASE_URL + path;

  options = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    ...options,
  };

  if (isSecure) {
    const token = getSavedToken();

    if (!token) throw "No token in the localStorage";

    options.headers["Authorization"] = `Bearer ${token}`;
  }

  if (options.body) options.body = JSON.stringify(options.body);

  // console.log({ fetch: { url, options } });

  const res = await fetch(url, options);
  // console.log("🚀 methods.ts: ", res);

  if (res.status.toString().startsWith("4"))
    throw { message: "Hubo un error en la funcion fetchAPI()", status: res.status };

  return await res.json();
};

// $ Methods ♥（＞ω・)ノ
// * POST
const postAPI = ({ path, options, isSecure = false }: fetchAPIParams) => {
  return fetchAPI({
    path,
    options: {
      method: "post",
      ...options,
    },
    isSecure,
  });
};

// * GET
const getAPI = ({ path, options, isSecure = false }: fetchAPIParams) => {
  return fetchAPI({
    path,
    options: {
      ...options,
    },
    isSecure,
  });
};

const getSavedToken = (): string => {
  const localdata = localStorage.getItem("user_localdata");
  const { token } = JSON.parse(localdata as any).user;
  return token;
};

export { getAPI, postAPI, getSavedToken, fetchAPI };
