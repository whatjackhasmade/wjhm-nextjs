import React from 'react';
import { InView } from 'react-intersection-observer';
import { decodeHTML } from 'wjhm';

import { RelatedItem, RelatedWrapper } from './related.styles';

import { Link } from 'wjhm';
import { ImageLoader } from 'wjhm';

type RelatedProps = {
  data: any;
  relatedRef?: any;
  title?: string;
};

const Related = ({ data, relatedRef, title = `Continue Reading` }: RelatedProps) => (
  <RelatedWrapper ref={relatedRef}>
    <h2>
      {title}{` `}
      <span aria-label="book pile emoji" role="img">
        📚
      </span>
    </h2>
    <div className="related__items">
      {data.map(
        item =>
          item &&
          item.featuredImage && (
            <InView key={item.uri} threshold={0} triggerOnce={true}>
              {({ inView, ref }) => (
                <RelatedItem ref={ref}>
                  <Link to={`/${item.uri}`}>
                    <div className="related__media related__media--fallback">
                      <ImageLoader
                        alt={item.featuredImage.altText ? item.featuredImage.altText : item.title}
                        src={item.featuredImage.md}
                      />
                    </div>
                    {item.title && <h3>{decodeHTML(item.title)}</h3>}
                    {item.seo.metaDesc && <p>{item.seo.metaDesc}</p>}
                  </Link>
                </RelatedItem>
              )}
            </InView>
          ),
      )}
    </div>
  </RelatedWrapper>
);

export default Related;
