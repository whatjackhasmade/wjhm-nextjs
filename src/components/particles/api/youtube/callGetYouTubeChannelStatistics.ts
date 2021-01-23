export interface Response {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    etag: string;
    id: string;
    statistics: {
      viewCount: string;
      subscriberCount: string;
      hiddenSubscriberCount: boolean;
      videoCount: string;
    };
  }[];
}

const GAPI = process.env.NEXT_PUBLIC_GOOGLE_API;
const channelID = `UCIOm-HME4V_STS9yWM5aXIg`;

export const callGetYouTubeChannelStatistics = async (): Promise<Response> => {
  const youtubeURL: string = encodeURI(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=${GAPI}`,
  );

  const res = await fetch(youtubeURL);
  const data = await res.json();
  return data;
};
