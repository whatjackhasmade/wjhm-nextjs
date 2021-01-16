/* eslint-disable react/react-in-jsx-scope */
import { htmlDecode } from 'wjhm';

import { SmartImage } from 'wjhm';
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
          <SmartImage {...image} height={397.7} width={707} />
        </div>
      )}
      {title && <h2 className="h4">{htmlDecode(title)}</h2>}
      {seo?.metaDesc && <p>{seo.metaDesc}</p>}
    </Link>
  );
};

export default SeriesPost;
