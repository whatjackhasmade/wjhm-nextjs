/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';

import { SmartImage } from 'wjhm';

import { BreakImage } from '../../case.styles';

import { MediaItem } from 'wjhmtypes';

type Props = {
  image?: MediaItem;
};

const CaseBreak = (props: Props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const { image } = props;
  if (!image) return null;

  let classList: string = `break`;
  if (inView) classList += ` break--show`;

  return (
    <BreakImage className={classList} ref={ref}>
      <SmartImage {...image} width={1920} height={500} />
    </BreakImage>
  );
};

export default CaseBreak;
