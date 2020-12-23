/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';

import { parseHTML } from 'wjhm';

import { BlockContainer } from '../../case.styles';

type CaseRowProps = {
  data?: {
    columnOne?: any;
    columnTwo?: any;
    title?: any;
  };
};

const CaseRow = (props: CaseRowProps) => {
  const { data } = props;
  const { title, columnOne, columnTwo } = data;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  let classList: string = `block`;
  if (inView) classList += ` block--show`;

  return (
    <BlockContainer className={classList} ref={ref}>
      <div className="block__column block__column--full">
        <h2>{title}</h2>
      </div>
      {columnOne && <div className="block__column">{parseHTML(columnOne)}</div>}
      {columnTwo && <div className="block__column">{parseHTML(columnTwo)}</div>}
    </BlockContainer>
  );
};

export default CaseRow;
