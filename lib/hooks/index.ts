import { getAPI } from "lib/api/methods";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { tokenState, useMenu } from "./atoms";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useEnableMenu = () => useRecoilState(useMenu);

const useMe = (): UserData => {
  const { data, error } = useSWR({ path: "/me", isSecure: true }, getAPI);
  if (data?.email) return data;
};

// # Get Product By Query
const useGetProductsByQuery = ({
  query,
  offset = 0,
}: useGetProductsByQueryParams): SearchResponse => {
  const { data, error } = useSWRImmutable({ path: `/search?q=${query}&offset=${offset}` }, getAPI);

  if (data?.results) return data;
};

// # Get Product By Order
const useGetOrders = () => {
  const { data, error } = useSWRImmutable({ path: `/me/orders`, isSecure: true }, getAPI);

  if (data?.orders) return data.orders;
};

// # Feactured Products
const useFeacturedProducts = (): Product[] => {
  const { data } = useSWRImmutable({ path: "/search?q=c&limit=3" }, getAPI);
  if (data?.results) return data.results;
};

const useLogout = (): boolean => {
  const setToken = useSetToken();

  if (typeof window == "undefined") return;

  localStorage.removeItem("token_localdata");
  setToken(undefined);
};

const useIsLogged = () => {
  const token = useGetToken();
  const router = useRouter();

  useEffect(() => {
    if (!token) router.push("/");
  }, [token]);
};

// # TOKEN
const useToken = () => useRecoilState(tokenState);
const useGetToken = () => useRecoilValue(tokenState);
const useSetToken = () => useSetRecoilState(tokenState);

export {
  useMe,
  useEnableMenu,
  useFeacturedProducts,
  useGetProductsByQuery,
  useToken,
  useGetToken,
  useSetToken,
  useLogout,
  useGetOrders,
  useIsLogged,
};
