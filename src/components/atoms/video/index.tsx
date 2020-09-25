import React from 'react';

import StyledEmbedVideo from './video.styles';

type VideoProps = {
  autoplay?: boolean;
  margin?: number;
  maxWidth?: number;
  src?: string;
  vimeo?: string;
  youtube?: string;
} & React.HTMLProps<HTMLVideoElement>;

declare type VideoMediaProps = {
  autoplay?: boolean;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const Video = (props: VideoProps) => {
  const isVimeo = props?.vimeo;
  const isYouTube = props?.youtube;

  /* @ts-ignore */
  if (isVimeo) return <VideoVimeo {...props} />;
  /* @ts-ignore */
  if (isYouTube) return <VideoYouTube {...props} />;

  const safe = { ...props };
  const src = props?.src;
  const autoplay = props?.autoplay;
  if (autoplay) delete safe.autoplay;
  if (src) delete safe.src;

  return (
    <video {...safe}>
      <source src={src} type="video/mp4" />
      <track></track>
      Your browser does not support the video tag.
    </video>
  );
};

function vimeoID(url) {
  const result = url.match(
    /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i,
  );
  return result[1];
}

declare type VideoVimeoProps = {
  vimeo: string;
} & VideoMediaProps;

const VideoVimeo = (props: VideoVimeoProps) => {
  const { autoplay, className, controls = true, loop, muted, vimeo } = props;

  const id = vimeoID(vimeo);
  if (!id) return null;

  const ctrlParam = controls ? 1 : 0;

  let src = `https://player.vimeo.com/video/${id}?fun=true`;
  if (autoplay) src += `&autoplay=1`;
  if (ctrlParam) src += `&controls=${ctrlParam}`;
  if (loop) src += `&loop=1`;
  if (muted) src += `&muted=1`;

  let classList = `video video--vimeo`;
  if (className) classList += ` ${className}`;

  return (
    <StyledEmbedVideo {...props} className={classList}>
      <div className="video__wrapper">
        <iframe className="video__iframe" allowFullScreen frameBorder="0" src={src} title={src} />
      </div>
    </StyledEmbedVideo>
  );
};

declare type VideoYouTubeProps = {
  youtube: string;
} & VideoMediaProps;

function youtubeID(url) {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_-]/i)[0] : url[0];
}

const VideoYouTube = (props: VideoYouTubeProps) => {
  const { autoplay, className, controls = true, loop, muted, youtube } = props;

  const id = youtubeID(youtube);
  if (!id) return null;

  let src = `http://www.youtube.com/embed/${id}?rel=0&hd=1`;
  if (autoplay) src += `&autoplay=1`;
  if (!controls) src += `&controls=0`;
  if (loop) src += `&loop=1`;
  if (muted) src += `&mute=1`;

  let classList = `video video--youtube`;
  if (className) classList += ` ${className}`;

  return (
    <StyledEmbedVideo {...props} className={classList}>
      <div className="video__wrapper">
        <iframe className="video__iframe" allowFullScreen frameBorder="0" src={src} title={src} />
      </div>
    </StyledEmbedVideo>
  );
};

export default Video;
