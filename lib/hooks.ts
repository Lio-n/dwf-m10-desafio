import { atom, selector, useRecoilState } from "recoil";

export const useMenu = atom({
  key: "menu",
  default: false,
});

export const useEnableMenu = () => useRecoilState(useMenu);
