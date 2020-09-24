import React from 'react';
import he from 'he';

import { Link } from 'wjhm';

import { Post } from 'wjhmtypes';
type SeriesPostProps = Post;

const SeriesPost = (props: SeriesPostProps) => {
  const { featuredImage, title, seo, slug } = props;

  return (
    <Link className="post" to={`/${slug}`}>
      {featuredImage && (
        <div className="post__image">
          <img alt={featuredImage?.altText} src={featuredImage?.md} />
        </div>
      )}
      {title && <h2 className="h4">{he.decode(title)}</h2>}
      {seo && <p>{seo?.metaDesc}</p>}
    </Link>
  );
};

export default SeriesPost;
