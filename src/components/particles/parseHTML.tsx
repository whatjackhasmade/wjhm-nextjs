import * as React from 'react';
import { default as parser } from 'html-react-parser';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import { createRelative } from 'wjhm';
import { decodeHTML } from 'wjhm';
import { isInternal } from 'wjhm';

import { Link } from 'wjhm';

const config = {
  replace: data => {
    const { attribs, children, parent } = data;

    const hasHREF: boolean = Boolean(attribs?.href);

    if (hasHREF) {
      const { href } = attribs;

      const isTweet: boolean = href.startsWith(`https://twitter.com`) && parent?.attribs?.class === `twitter-tweet`;
      if (isTweet) return handleTweet(href);

      const isLink: boolean = Boolean(href && children);
      if (isLink) return <ReactAnchor attribs={attribs}>{children}</ReactAnchor>;
    }
  },
};

const handleTweet = (href: string) => {
  const parts = href.split(`/`);

  const hasParts: boolean = parts.length > 0;
  if (!hasParts) return null;

  const tooShort: boolean = parts?.length < 6;
  if (tooShort) return null;

  const queryPart = parts?.[5];
  const querySplit = queryPart.split(`?`);

  const queryNotFound = querySplit?.length < 1;
  if (queryNotFound) return null;

  const id = querySplit[0];
  return <TwitterTweetEmbed tweetId={id} />;
};

const ReactAnchor = props => {
  const { attribs, children } = props;

  let { href } = attribs;
  href = createRelative(href);

  let inner: string = ``;
  const hasChildren: boolean = Boolean(children?.[0]?.data);
  if (hasChildren) inner = children?.[0]?.data;

  if (isInternal(href)) return <Link to={`${href}`}>{inner}</Link>;

  return <a href={`${href}`}>{inner}</a>;
};

const isString = val => typeof val === `string` || val instanceof String;

const parseHTML = (html: string) => {
  if (!html) return html;
  if (!isString(html)) return html;
  const clean = parser(html, config);
  return decodeHTML(clean);
};

export { parseHTML };
export default parseHTML;
