/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import { decodeHTML } from 'wjhm';

import { RelatedItem } from './related.styles';
import { RelatedWrapper } from './related.styles';

import { Link } from 'wjhm';

import { CaseStudy } from 'wjhmtypes';
import { MediaItem } from 'wjhmtypes';
import { Post } from 'wjhmtypes';
import { Seo } from 'wjhmtypes';

declare type RelatedProps = {
  data: Post[] | CaseStudy[];
  relatedRef?: any;
  title?: string;
};

const Related = (props: RelatedProps) => {
  const { data, relatedRef, title = `Continue Reading` } = props;

  // @ts-ignore
  const items = data.filter(Boolean);

  return (
    <RelatedWrapper ref={relatedRef}>
      <h2>
        {title}
        {` `}
        <span aria-label="book pile emoji" role="img">
          📚
        </span>
      </h2>
      <div className="related__items">
        {items.map(item => (
          <Item {...item} key={`related-${item?.id}`} />
        ))}
      </div>
    </RelatedWrapper>
  );
};

declare type ItemProps = {
  featuredImage: {
    node: MediaItem;
  };
  seo: Seo;
  title: string;
  uri: string;
};

const Item: React.FC<ItemProps> = (props: ItemProps) => {
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

  const to: string = `/${props.uri}`;

  let classList: string = `related-item`;
  if (inView) classList += ` related-item--show`;

  return (
    <RelatedItem className={classList} ref={ref}>
      <Link to={to}>
        {hasImage && <Image className="related__media" src={src} alt={altText} width={1600} height={900} />}
        {hasTitle && <h3>{decodeHTML(title)}</h3>}
        {hasSEO && <p>{seo}</p>}
      </Link>
    </RelatedItem>
  );
};

export default Related;
