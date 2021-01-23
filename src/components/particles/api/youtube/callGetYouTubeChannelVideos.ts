export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres: Maxres;
}

export interface ResourceId {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
}

export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Response {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: YouTubeVideo[];
  pageInfo: PageInfo;
}

const GAPI = process.env.NEXT_PUBLIC_GOOGLE_API;
const playlistUploadsID = `UUIOm-HME4V_STS9yWM5aXIg`;

export const callGetYouTubeChannelVideos = async (count?: number): Promise<Response> => {
  let max = 12;
  if (count) max = count;

  const maxString: string = String(max);
  const youtubeURL: string = encodeURI(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxString}&playlistId=${playlistUploadsID}&key=${GAPI}`,
  );

  const res = await fetch(youtubeURL);
  const data = await res.json();
  return data;
};
