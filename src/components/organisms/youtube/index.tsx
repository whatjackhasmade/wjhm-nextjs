import * as React from 'react';
import { useQuery } from 'react-query';
import YouTube from 'react-youtube';

import YouTubeComponent from './youtube.styles';

import { Skeleton } from 'wjhm';
import { SmartImage } from 'wjhm';

import { Error } from 'wjhm';

import { callGetYouTubeChannelStatistics } from 'wjhm';
import { callGetYouTubeChannelVideos } from 'wjhm';

import { YouTubeVideo } from 'wjhm';

// https://developers.google.com/youtube/player_parameters
const opts = {
  playerVars: {
    autoplay: 0,
  },
};

const _onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

const YouTubeChannel = () => {
  const count: number = 19;
  const { data: dataStatistics } = useQuery([`callGetYouTubeChannelStatistics`], () =>
    callGetYouTubeChannelStatistics(),
  );
  const statistics = dataStatistics?.items?.[0]?.statistics;

  const { data, error, isLoading: loading } = useQuery([`callGetYouTubeChannelVideos`], () =>
    callGetYouTubeChannelVideos(count),
  );
  const videos = data?.items;

  return (
    <YouTubeComponent>
      <div className="youtube__background youtube__background--left">
        <SmartImage alt="" src="/images/youtube-left.png" width={189} height={1080} />
      </div>
      <div className="youtube__background youtube__background--right">
        <SmartImage alt="" src="/images/youtube-right.png" width={189} height={1080} />
      </div>
      <div className="youtube__content">
        <div className="youtube__intro">
          <h2>My YouTube Channel</h2>
          {error && <Error error={error} />}
          <ul className="youtube__statistics">
            <li>{Number(statistics?.videoCount)?.toLocaleString()} Videos</li>
            <li>{Number(statistics?.viewCount)?.toLocaleString()} Views</li>
            <li>{Number(statistics?.subscriberCount)?.toLocaleString()} Subscribers</li>
          </ul>
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
          <MostRecent loading={loading} videos={videos} />
        </div>
        <div className="youtube__videos">
          <Videos count={count} loading={loading} videos={videos} />
        </div>
      </div>
    </YouTubeComponent>
  );
};

const MostRecent = (props: { loading: boolean; videos: YouTubeVideo[] }) => {
  const loading = props?.loading;
  const videos = props?.videos;
  const firstVideo = videos?.[0];

  return (
    <div className="youtube__video" title={firstVideo?.snippet?.title}>
      {loading && <Skeleton height="1080" width="1920" />}
      {/* @ts-ignore */}
      {firstVideo && <YouTube videoId={firstVideo.snippet.resourceId.videoId} opts={opts} onReady={_onReady} />}
    </div>
  );
};

const Skeletons: React.FC<{ count: number }> = ({ count }: { count: number }) => {
  return (
    <React.Fragment>
      {[...Array(count)].map((_, i) => {
        const key: string = `channel-video-${String(i * Math.random() * 46656)}`;
        return <Skeleton height="1080" width="1920" key={key} />;
      })}
    </React.Fragment>
  );
};

export interface VideosProps {
  count: number;
  loading: boolean;
  videos: YouTubeVideo[];
}

const Videos: React.FC<VideosProps> = (props: VideosProps) => {
  const count = props.count;
  const loading = props.loading;
  const videos = props?.videos;
  const hasVideos: boolean = videos?.length > 0;

  // Duplicate the prop value so we don't mutate the original value
  const spreadVideos = hasVideos && [...videos];

  // Remove the first item from the array
  if (hasVideos) spreadVideos.shift();

  return (
    <React.Fragment>
      {loading && <Skeletons count={count} />}
      {hasVideos && spreadVideos.map(video => <Video key={video.snippet.resourceId.videoId} {...video} />)}
    </React.Fragment>
  );
};

const Video = (props: YouTubeVideo) => {
  const { snippet } = props;

  const href: string = `https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`;
  const thumbnail: string = snippet?.thumbnails?.medium?.url;
  const title: string = snippet?.title;

  return (
    <div className="youtube__video" title={title}>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <div className="youtube__video__thumbnail">
          <SmartImage alt={title} src={thumbnail} width={1920} height={1080} />
        </div>
      </a>
    </div>
  );
};

export default YouTubeChannel;
