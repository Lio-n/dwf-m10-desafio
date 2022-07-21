import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// const localStorage = typeof window !== `undefined` ? window.localStorage : null;
const { persistAtom } = recoilPersist({
  key: "user_localdata", // this key is using to store data in local storage
});

const userState = atom({
  key: "user",
  default: { email: undefined, full_name: undefined, token: undefined, avatar: undefined },
  effects_UNSTABLE: [persistAtom],
});

const tokenSelector = selector({
  key: "tokenSelector",
  get: async ({ get }) => {
    const { token } = get(userState);
    return token;
  },
  set: ({ set, get }, newValue: string) => {
    set(userState, {
      ...get(userState),
      token: newValue,
    });
  },
});

const emailSelector = selector({
  key: "emailSelector",
  get: ({ get }) => {
    const { email } = get(userState);
    return email;
  },
  set: ({ set, get }, newValue: string) => {
    set(userState, {
      ...get(userState),
      email: newValue,
    });
  },
});

// This atom is used to enable or not Pupop menu.
const useMenu = atom({
  key: "menu",
  default: false,
});

export { useMenu, userState, tokenSelector, emailSelector };
