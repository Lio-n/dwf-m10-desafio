import { useIsLogged, useLogout } from "lib/hooks";

const Logout = () => {
  useLogout();
  useIsLogged();

  return <></>;
};

export { Logout };
