/* eslint-disable react/react-in-jsx-scope */
import he from 'he';

import { Image } from 'wjhm';
import { Link } from 'wjhm';

import { Post } from 'wjhmtypes';

const SeriesPost: React.FC<Post> = (props: Post) => {
  const { featuredImage, title, seo, slug } = props;

  const image = featuredImage?.node;
  const href: string = `/${slug}`;

  return (
    <Link className="post" to={href}>
      {featuredImage && (
        <div className="post__image">
          <Image {...image} height={397.7} width={707} />
        </div>
      )}
      {title && <h2 className="h4">{he.decode(title)}</h2>}
      {seo?.metaDesc && <p>{seo.metaDesc}</p>}
    </Link>
  );
};

export default SeriesPost;
