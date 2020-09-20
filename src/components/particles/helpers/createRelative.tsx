export const createRelative = (url: string) => {
  const NEXT_PUBLIC_GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API;
  const [API] = NEXT_PUBLIC_GRAPHQL_API.split(`/`);
  const shouldConvert = url.includes(API);

  if (!shouldConvert) return url;

  const newURL = new URL(url);
  const relativeURL = newURL.toString().substring(newURL.origin.length);

  return relativeURL;
};

export default createRelative;
