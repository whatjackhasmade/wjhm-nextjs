/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from 'react-query';

import StyledWorks from './work.styles';

import { callGetAllCaseStudies } from 'wjhm';

import { Error } from 'wjhm';

import { AcfWorkBlockAttributes as Props } from 'wjhmtypes';
import { CaseStudy } from 'wjhmtypes';

const Work: React.FC<Props> = (props: Props) => {
  const { data, error, isLoading: loading } = useQuery(`callGetAllCaseStudies`, callGetAllCaseStudies);

  const items: CaseStudy[] = data?.caseStudies?.nodes;
  const hasItems: boolean = items?.length > 0;

  if (error) return <Error error={error} />;
  if (loading) return <p>Loading work items...</p>;

  if (!hasItems) return null;

  return (
    <StyledWorks>
      {items.map(item => {
        const id = item.id;
        const title = item.title;

        const key = `works-${id}`;

        return (
          <div className="item" key={key}>
            <p>{title}</p>
          </div>
        );
      })}
    </StyledWorks>
  );
};

export default Work;
