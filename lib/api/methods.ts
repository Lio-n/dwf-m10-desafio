const API_BASE_URL = "https://dwf-m9-desafio.vercel.app/api";

const fetchAPI = async ({ path, options, isSecure = false }: FetchAPIParams) => {
  const url = API_BASE_URL + path;

  options = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    ...options,
  };

  if (isSecure) {
    const { token } = getSavedToken();

    if (!token) throw "No token in the localStorage";

    options.headers["Authorization"] = `Bearer ${token}`;
  }

  if (options.body) options.body = JSON.stringify(options.body);

  const res = await fetch(url, options);

  if (res.status.toString().startsWith("4"))
    throw { message: "Hubo un error en la funcion fetchAPI()", status: res.status };

  return await res.json();
};

// $ Methods ♥（＞ω・)ノ
// * POST
const postAPI = ({ path, options, isSecure = false }: FetchAPIParams) => {
  return fetchAPI({
    path,
    options: {
      method: "POST",
      ...options,
    },
    isSecure,
  });
};

// * GET
const getAPI = ({ path, options, isSecure = false }: FetchAPIParams) => {
  return fetchAPI({
    path,
    options: {
      ...options,
    },
    isSecure,
  });
};

// * PATCH
const patchAPI = ({ path, options, isSecure = true }: FetchAPIParams) => {
  return fetchAPI({
    path,
    options: {
      method: "PATCH",
      ...options,
    },
    isSecure,
  });
};

const getSavedToken = (): { token: string } => {
  const json = localStorage.getItem("token_localdata");
  return JSON.parse(json);
};

export { getAPI, postAPI, patchAPI, getSavedToken, fetchAPI };
