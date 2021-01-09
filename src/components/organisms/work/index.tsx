import * as React from 'react';
import { useQuery } from 'react-query';

import { callGetAllCaseStudies } from 'wjhm';

import { Skeleton } from 'wjhm';

import { Error } from 'wjhm';
import { Post } from 'wjhm';

import StyledWorks from './work.styles';

import { AcfWorkBlockAttributes as Props } from 'wjhmtypes';

const Skeletons: React.FC = () => {
  return (
    <React.Fragment>
      {[...Array(6)].map((_, i) => {
        const key: string = `case-study-${String(i * Math.random() * 46656)}`;
        return <Skeleton height="1080" width="1920" key={key} />;
      })}
    </React.Fragment>
  );
};

const Work: React.FC<Props> = (props: Props) => {
  const { data, error, isLoading: loading } = useQuery(`callGetAllCaseStudies`, callGetAllCaseStudies);

  const items = data?.caseStudies?.nodes;
  const hasItems: boolean = items?.length > 0;

  if (error) return <Error error={error} />;

  return (
    <StyledWorks className="work">
      {loading && <Skeletons />}
      {hasItems && items.map(item => <Post {...item} key={item.id} />)}
    </StyledWorks>
  );
};

export default Work;
