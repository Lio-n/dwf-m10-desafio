import { postAPI } from "./methods";

// $ EndPoints

const sendCode = async (email: string): Promise<string | undefined> => {
  try {
    return postAPI({ path: "/auth", options: { body: { email } } });
  } catch (err) {
    console.error(err);
  }
};

const getToken = async ({ email, code }: { email: string; code: string }): Promise<any> => {
  try {
    const res = await postAPI({ path: "/auth/token", options: { body: { email, code } } });

    if (res.token) return res.token;
  } catch (err) {
    console.error(err);
  }
};

export { sendCode, getToken };
