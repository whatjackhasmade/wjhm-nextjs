import { InView } from 'react-intersection-observer';
import { parseHTML } from 'wjhm';

import RowComponent from './row.styles';

import { ImageLoader } from 'wjhm';

declare type RowMediaSingular = {
  altText: string;
  mediaItemUrl: string;
};

declare type RowProps = {
  content: string;
  index: number;
  link: string;
  media: RowMediaSingular;
};

const Row = (props: RowProps) => {
  const { content, index, link } = props;
  const media = props?.media;
  const align = index % 2 === 0 ? `left` : `right`;
  const hasMedia = media?.mediaItemUrl;

  let ext = null;
  if (hasMedia) ext = media.mediaItemUrl.substr(media.mediaItemUrl.lastIndexOf(`.`) + 1);

  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref }) => (
        <RowComponent align={align} className={inView ? `row row--show` : `row`} ref={ref}>
          <div className="row__column">
            {hasMedia && (
              <React.Fragment>
                {link && (
                  <a href={link}>
                    <RowMedia media={media} ext={ext} />
                  </a>
                )}
                {!link && <RowMedia media={media} ext={ext} />}
              </React.Fragment>
            )}
          </div>
          <div className="row__column row__content">{parseHTML(content)}</div>
        </RowComponent>
      )}
    </InView>
  );
};

declare type RowMediaProps = {
  ext: string;
  media: RowMediaSingular;
};

const RowMedia = (props: RowMediaProps) => {
  const { ext, media } = props;
  const isVideo = ext === `mp4`;

  return (
    <div className="row__media">
      {!isVideo && <ImageLoader src={media.mediaItemUrl} alt={media.altText} />}
      {isVideo && <video src={media.mediaItemUrl} muted={true} autoPlay={true} loop={true} />}
    </div>
  );
};

export default Row;
