import React from 'react';
import YouTube from 'react-youtube';

import backgroundLeft from './youtube-left.png';
import backgroundRight from './youtube-right.png';
import YouTubeComponent from './youtube.styles';

import { ImageLoader } from 'wjhm';

// https://developers.google.com/youtube/player_parameters
const opts = {
  playerVars: {
    autoplay: 0,
  },
};

declare type VideoNodeProps = {
  snippet: {
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
    title: string;
  };
};

type YouTubeChannelProps = {
  videos: {
    node: VideoNodeProps;
  }[];
};

const YouTubeChannel = (props: YouTubeChannelProps) => {
  const { videos: initialVideos } = props;

  const _onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const hasVideos = initialVideos?.length > 0;
  if (!hasVideos) return null;

  const videos = initialVideos.map(({ node }) => node).filter((v, i) => i > 0 && i < 19);
  const [firstVideo] = videos;

  return (
    <YouTubeComponent>
      <img alt="" className="youtube__background youtube__background--left" src="/images/youtube-left.png" />
      <img alt="" className="youtube__background youtube__background--right" src="/images/youtube-right.png" />
      <div className="youtube__content">
        <div className="youtube__intro">
          <h2>My YouTube Channel</h2>
          <p>
            Early on in my career I knew it was important to document what I was learning, so I started a blog. The next
            step on from that was to start my own YouTube channel. I did this not only for myself, but to also share my
            understanding of topics with others looking to develop their skills.
          </p>
          <p>
            Starting my own YouTube channel encouraged me to understand a topic deeply as to teach a topic, you must
            have a strong grasp on the concepts involved. I don&apos;t claim to be an expert on every subject I cover,
            but if I find it of interest, I will cover it and share my experience with others.
          </p>
          <a className="button" href="https://youtube.com/whatjackhasmade" rel="noopener noreferrer" target="_blank">
            View My YouTube Channel
          </a>
          {hasVideos && firstVideo.snippet && (
            <div className="youtube__video" title={firstVideo.snippet.title}>
              {/* @ts-ignore */}
              <YouTube videoId={firstVideo.snippet.resourceId.videoId} opts={opts} onReady={_onReady} />
            </div>
          )}
        </div>
        <div className="youtube__videos">
          {hasVideos && videos.map(video => <Video key={video.snippet.resourceId.videoId} {...video} />)}
        </div>
      </div>
    </YouTubeComponent>
  );
};

const Video = (props: VideoNodeProps) => {
  const { snippet } = props;

  return (
    <div className="youtube__video" title={snippet.title}>
      <a
        href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="youtube__video__thumbnail">
          <ImageLoader alt={snippet.title} src={snippet.thumbnails.medium.url} />
        </div>
      </a>
    </div>
  );
};

export default YouTubeChannel;
