/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';

import { decodeHTML } from 'wjhm';

import { RelatedItem } from './related.styles';
import { RelatedWrapper } from './related.styles';

import { Link } from 'wjhm';
import { ImageLoader } from 'wjhm';

import { MediaItem } from 'wjhmtypes';
import { Post } from 'wjhmtypes';
import { Seo } from 'wjhmtypes';

declare type RelatedProps = {
  data: Post[];
  relatedRef?: any;
  title?: string;
};

const Related = (props: RelatedProps) => {
  const { data, relatedRef, title = `Continue Reading` } = props;

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
  featuredImage: MediaItem;
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

  const hasImage: boolean = Boolean(props?.featuredImage);
  if (!hasImage) return null;

  const image = props?.featuredImage?.md;
  const seo = props?.seo?.metaDesc;
  const title = props?.title;

  const hasSEO: boolean = Boolean(seo);
  const hasTitle: boolean = Boolean(title);
  const imageAlt = props?.featuredImage?.altText;

  let altText: string = title;
  if (imageAlt) altText = imageAlt;

  const to: string = `/${props.uri}`;

  let classList: string = `related-item`;
  if (inView) classList += ` related-item--show`;

  return (
    <RelatedItem className={classList} ref={ref}>
      <Link to={to}>
        <div className="related__media related__media--fallback">
          <ImageLoader alt={altText} src={image} />
        </div>
        {hasTitle && <h3>{decodeHTML(title)}</h3>}
        {hasSEO && <p>{seo}</p>}
      </Link>
    </RelatedItem>
  );
};

export default Related;
