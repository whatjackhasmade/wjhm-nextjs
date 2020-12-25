/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { decodeHTML } from 'wjhm';

import { Link } from 'wjhm';

import { StyledPost } from './post.styles';

import { CaseStudy } from 'wjhmtypes';
import { Post as PostDef } from 'wjhmtypes';

declare type Props = PostDef | CaseStudy;

const Post: React.FC<Props> = (props: Props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const image = props?.featuredImage?.node;
  const hasImage: boolean = Boolean(image.mediaItemUrl);
  if (!hasImage) return null;

  const src = image?.mediaItemUrl;
  const seo = props?.seo?.metaDesc;
  const title = props?.title;

  const hasSEO: boolean = Boolean(seo);
  const hasTitle: boolean = Boolean(title);
  const imageAlt = image?.altText;

  let altText: string = title;
  if (imageAlt) altText = imageAlt;

  const href: string = `${props.uri}`;

  let classList: string = `item`;
  if (inView) classList += ` item--show`;

  return (
    <StyledPost className={classList} ref={ref}>
      <Link href={href}>
        {hasImage && <Image className="item__media" src={src} alt={altText} width={1600} height={900} />}
        {hasTitle && <h3 className="item__title">{decodeHTML(title)}</h3>}
        {hasSEO && <p className="item__description">{seo}</p>}
      </Link>
    </StyledPost>
  );
};

export { Post };
export default Post;
