const BASE_URL = "https://reqres.in/api";

type urlConfType = {
  login: string;
  users: string;
};
const _urlConf: urlConfType = {
  login: "/login",
  users: "/users",
};

export const urlConf = new Proxy<urlConfType>(_urlConf, {
  get: (target: any, key: string): string => {
    let url = target[key];
    url = url.startsWith("/") ? `${BASE_URL}${url}` : `${BASE_URL}/${url}`;
    return url;
  },
});
