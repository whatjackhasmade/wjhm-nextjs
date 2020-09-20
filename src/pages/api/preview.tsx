import { NextApiRequest, NextApiResponse } from 'next';
import { requestor } from 'wjhm';

import { PAGE_BY_URI } from 'wjhm';
import { POST_BY_SLUG } from 'wjhm';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = req?.query?.secret;
  const slug = req?.query?.slug;
  const type = req?.query?.type;
  const uri = req?.query?.uri;

  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  const validSecret = secret !== process.env.WORDPRESS_PREVIEW_SECRET;
  if (!validSecret) return res.status(401).json({ message: `Invalid token` });

  const isStory = type === `story`;
  const isWork = type === `story`;

  let expectedParam = uri;
  if (isStory || isWork) expectedParam = slug;

  let expectedParamError = `No uri defined`;
  if (isStory || isWork) expectedParamError = `No slug defined`;

  if (!expectedParam) return res.status(401).json({ message: expectedParamError });

  let data = null;

  // Fetch the headless CMS to check if the provided expected param exists
  switch (type) {
    case `story`:
      data = await requestor.request(POST_BY_SLUG, { slug });
      break;
    default:
      data = await requestor.request(PAGE_BY_URI, { uri });
      break;
  }

  // If the uri doesn't exist prevent preview mode from being enabled
  if (!data) return res.status(401).json({ message: `Invalid request` });

  console.log(data);
  const preview = data;

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({ ...preview });

  let redirectURL = `/`;

  // Fetch the headless CMS to check if the provided expected param exists
  switch (type) {
    case `story`:
      redirectURL += `stories/` + slug;
      break;
    case `work`:
      redirectURL += `work/` + slug;
      break;
    default:
      redirectURL += uri;
      break;
  }

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.uri as that might lead to open redirect vulnerabilities
  res.redirect(redirectURL);
};
