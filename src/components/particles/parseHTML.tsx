import React from 'react';
import { default as parser } from 'html-react-parser';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import { isInternal } from 'wjhm';
import { createRelative } from 'wjhm';

import { Link } from 'wjhm';

const config = {
  replace: data => {
    const { attribs, parent } = data;
    if (attribs && attribs.href) {
      const { children, href } = attribs;

      const isTweet = href.startsWith(`https://twitter.com`) && parent?.attribs?.class === `twitter-tweet`;

      if (isTweet) {
        let url = href.split(`/`);
        if (url.length < 6) return null;
        url = url[5];
        url = url.split(`?`);
        if (url.length < 1) return null;
        url = url[0];
        if (url) return <TwitterTweetEmbed tweetId={url} />;
        return null;
      }

      if (href && children) return <ReactAnchor attribs={attribs}>{children}</ReactAnchor>;
    }
  },
};

const ReactAnchor = ({ attribs, children }) => {
  let { href } = attribs;
  href = createRelative(href);
  if (isInternal(href)) return <Link to={`${href}`}>{children && children.length > 0 && children[0].data}</Link>;
  if (!isInternal(href)) return <a href={`${href}`}>{children && children.length > 0 && children[0].data}</a>;
};

const isString = val => typeof val === 'string' || val instanceof String;

const parseHTML = html => {
  if (!html) return html;
  if (!isString(html)) return html;
  const clean = parser(html, config);
  return clean;
};

export { parseHTML };
export default parseHTML;
