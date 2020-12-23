const accessToken = process.env.NEXT_PUBLIC_DRIBBBLE_TOKEN;
const dribbbleURL = `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`;

export const callGetAllDribbble = async (): Promise<any> => {
  try {
    const res = await fetch(dribbbleURL);
    return await res.json();
  } catch (error) {
    throw new Error(error);
  }
};
