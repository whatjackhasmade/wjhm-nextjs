import YouTube from 'react-youtube';
import { youtubeID } from 'wjhm';

type CaseYouTubeProps = {
  url: string;
};

const CaseYouTube = ({ url }: CaseYouTubeProps) => {
  if (!url) return null;
  const ID = youtubeID(url);

  const opts = {
    height: `780`,
    width: `1280`,
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      rel: 0,
      playerVars: {
        playlist: ID,
        loop: 1,
      },
    },
  };

  const onReady = e => {
    e.target.mute();
    e.target.playVideo();
  };

  const onEnd = e => {
    e.target.mute();
    e.target.playVideo();
  };

  // @ts-ignore
  return <YouTube videoId={ID} opts={opts} onReady={onReady} onEnd={onEnd} />;
};

export default CaseYouTube;
