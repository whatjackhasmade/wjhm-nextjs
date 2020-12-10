import { InView } from 'react-intersection-observer';

import { parseHTML } from 'wjhm';

import { BlockContainer } from '../../case.styles';

type CaseRowProps = {
  data?: {
    columnOne?: any;
    columnTwo?: any;
    title?: any;
  };
};

const CaseRow = ({ data, data: { title, columnOne, columnTwo } }: CaseRowProps) => (
  <InView threshold={0} triggerOnce={true}>
    {({ inView, ref }) => (
      <BlockContainer className={inView ? `block block--show` : `block`} ref={ref}>
        <div className="block__column block__column--full">
          <h2>{title}</h2>
        </div>
        {columnOne && <div className="block__column">{parseHTML(columnOne)}</div>}
        {columnTwo && <div className="block__column">{parseHTML(columnTwo)}</div>}
      </BlockContainer>
    )}
  </InView>
);

export default CaseRow;
