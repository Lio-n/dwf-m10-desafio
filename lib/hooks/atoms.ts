import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "token_localdata", // this key is using to store data in local storage
});

const tokenState: RecoilState<string | undefined> = atom({
  key: "token",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// This atom is used to enable or not Pupop menu.
const useMenu: RecoilState<boolean> = atom({
  key: "menu",
  default: false,
});

export { useMenu, tokenState };
