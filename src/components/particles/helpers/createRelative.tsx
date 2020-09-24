const NEXT_PUBLIC_GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API;
const apiURL = new URL(NEXT_PUBLIC_GRAPHQL_API);
const apiHost = apiURL?.hostname;

export const createRelative = (url: string) => {
  const shouldConvert = url.includes(apiHost);
  if (!shouldConvert) return url;

  const newURL = new URL(url);
  const relativeURL = newURL.toString().substring(newURL.origin.length);

  return relativeURL;
};

export default createRelative;
