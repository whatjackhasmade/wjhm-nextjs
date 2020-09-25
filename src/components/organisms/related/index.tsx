import React from 'react';
import { InView } from 'react-intersection-observer';
import { decodeHTML } from 'wjhm';

import { RelatedItem, RelatedWrapper } from './related.styles';

import { Link } from 'wjhm';
import { ImageLoader } from 'wjhm';

declare type RelatedProps = {
  data: any;
  relatedRef?: any;
  title?: string;
};

const Related = (props: RelatedProps) => {
  const { data, relatedRef, title = `Continue Reading` } = props;
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
        {data
          .map(item => {
            const hasImage = item?.featuredImage;
            if (!hasImage) return null;

            const image = item?.featuredImage?.md;
            const seo = item?.seo?.metaDesc;
            const title = item?.title;

            const hasSEO = seo;
            const hasTitle = title;
            const altText = item?.featuredImage?.altText;

            return (
              <InView key={item.uri} threshold={0} triggerOnce={true}>
                {({ inView, ref }) => (
                  <RelatedItem ref={ref}>
                    <Link to={`/${item.uri}`}>
                      <div className="related__media related__media--fallback">
                        <ImageLoader alt={altText ? altText : title} src={image} />
                      </div>
                      {hasTitle && <h3>{decodeHTML(title)}</h3>}
                      {hasSEO && <p>{seo}</p>}
                    </Link>
                  </RelatedItem>
                )}
              </InView>
            );
          })
          .filter(Boolean)}
      </div>
    </RelatedWrapper>
  );
};

export default Related;
