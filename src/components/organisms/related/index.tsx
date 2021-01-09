/* eslint-disable react/react-in-jsx-scope */

import { Post } from 'wjhm';

import { RelatedWrapper } from './related.styles';

import { CaseStudy } from 'wjhmtypes';
import { Post as PostTypeDef } from 'wjhmtypes';

declare type RelatedProps = {
  data: PostTypeDef[] | CaseStudy[];
  relatedRef?: any;
  title?: string;
};

const Related = (props: RelatedProps) => {
  const { data, relatedRef, title = `Continue Reading` } = props;

  // @ts-ignore
  const items = data.filter(Boolean);
  if (!items) return null;

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
          <Post {...item} key={`related-${item?.id}`} />
        ))}
      </div>
    </RelatedWrapper>
  );
};

export default Related;
