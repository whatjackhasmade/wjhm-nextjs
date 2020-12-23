/* eslint-disable react/react-in-jsx-scope */
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import { BreakImage } from '../../case.styles';

import { MediaItem } from 'wjhmtypes';

type Props = {
  image?: MediaItem;
};

const CaseBreak = (props: Props) => {
  const { image } = props;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  let classList: string = `break`;
  if (inView) classList += ` break--show`;

  return (
    <BreakImage className={classList} ref={ref}>
      <div className="break__image">
        <Image layout="fill" alt={image.altText} src={image.mediaItemUrl} />
      </div>
    </BreakImage>
  );
};

export default CaseBreak;
