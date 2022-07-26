import { patchAPI, postAPI } from "./methods";

// $ EndPoints

const sendCode = async (email: string): Promise<string | undefined> => {
  try {
    return postAPI({ path: "/auth", options: { body: { email } } });
  } catch (err) {
    console.error(err);
  }
};

const getToken = async ({ email, code }: GetTokenParams): Promise<string> => {
  try {
    const res = await postAPI({ path: "/auth/token", options: { body: { email, code } } });

    if (res.token) return res.token;
  } catch (err) {
    console.error(err);
  }
};

const patchMe = async ({ address, full_name }: PatchMeParams): Promise<boolean> => {
  try {
    const res = await patchAPI({ path: "/me", options: { body: { address, full_name } } });

    if (res.message) return true;
  } catch (err) {
    console.error(err);
  }
};

const generateOrder = async ({
  additionalInfo,
  productId,
}: GenerateOrderParams): Promise<{ init_point: string }> => {
  try {
    return postAPI({
      path: `/order?productId=${productId}`,
      options: { body: { additionalInfo } },
      isSecure: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export { sendCode, getToken, patchMe, generateOrder };
