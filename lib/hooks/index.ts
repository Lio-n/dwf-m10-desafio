import { getAPI } from "lib/api/methods";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { emailSelector, tokenSelector, useMenu, userState } from "./atoms";

const useEnableMenu = () => useRecoilState(useMenu);

const useMe = () => useSWR({ path: "/me", isSecure: true }, getAPI);

const useGetProductsByQuery = ({ query, offset = 0 }) => {
  console.log("🚀 ~ Atom: ", query);
  const { data, error } = useSWRImmutable({ path: `/search?q=${query}&offset=${offset}` }, getAPI);

  if (data?.results) {
    console.log("🚀 ~ Data: ", data);
    return data;
  }
};

// # Feactured Products
const useFeacturedProducts = () => {
  const { data } = useSWRImmutable({ path: "/search?q=c&limit=3" }, getAPI);
  if (data?.results) return data.results;
};

// $ User STATE
export const useUser = () => useRecoilState(userState);
export const useSetUser = () => useSetRecoilState(userState);
export const useGetUser = () => useRecoilValue(userState);

// # TOKEN
export const useGetToken = () => useRecoilValue(tokenSelector);
export const useSetToken = () => useSetRecoilState(tokenSelector);

// # EMAIL
export const useGetEmail = () => useRecoilValue(emailSelector);
export const useSetEmail = () => useSetRecoilState(emailSelector);

export { useMe, useEnableMenu, useFeacturedProducts, useGetProductsByQuery };
