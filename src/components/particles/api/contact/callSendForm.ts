export const callSendForm = async (body: URLSearchParams): Promise<boolean> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE + `/api/contact`, { method: `POST`, body });
    const status = res.status;
    const isSuccess = status === 200;
    return isSuccess;
  } catch (error) {
    throw new Error(error);
  }
};
