import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import { parseHTML } from 'wjhm';

import { Link } from 'wjhm';
import { SmartImage } from 'wjhm';

import RowComponent from './row.styles';

import { AcfRowBlock_Rowfields as RowProps } from 'wjhmtypes';

declare type Props = { index: number } & RowProps;

const Row: React.FC<Props> = (props: Props) => {
  const content = props?.content;
  const index = props?.index;
  const link = props?.link;
  const media = props?.media;

  const hasMedia: boolean = Boolean(media?.mediaItemUrl);
  const align: 'left' | 'right' = index % 2 === 0 ? `left` : `right`;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.25,
    triggerOnce: true,
  });

  let classList: string = `row`;
  if (inView) classList += ` row--show`;

  let ext = null;
  if (hasMedia) ext = media.mediaItemUrl.substr(media.mediaItemUrl.lastIndexOf(`.`) + 1);

  const heading = content.match('<?h[1-6]>(.*?)</?h[1-6]>')?.[1];
  const headingText = heading?.replace(/(<([^>]+)>)/gi, '');

  return (
    <RowComponent align={align} className={classList} ref={ref}>
      <div className="row__column">
        {hasMedia && (
          <React.Fragment>
            {link && (
              <Link href={link}>
                <RowMedia media={media} ext={ext} />
                <span className="hidden">Read more on {headingText}</span>
              </Link>
            )}
            {!link && <RowMedia media={media} ext={ext} />}
          </React.Fragment>
        )}
      </div>
      <div className="row__column row__content">{parseHTML(content)}</div>
    </RowComponent>
  );
};

declare type RowMediaProps = {
  ext: string;
  media: RowProps['media'];
};

const RowMedia = (props: RowMediaProps) => {
  const { ext, media } = props;
  const isVideo = ext === `mp4`;

  const src = media?.mediaItemUrl;

  return (
    <div className="row__media">
      <div className="row__media__content">
        {!isVideo && <SmartImage width={723} height={406} {...media} />}
        {isVideo && <video src={src} muted={true} autoPlay={true} loop={true} />}
      </div>
    </div>
  );
};

export default Row;
