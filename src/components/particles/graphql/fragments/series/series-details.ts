import { MediaFragment } from '../general/media';
import { SEOFragment } from '../general/seo';

export const SeriesDetailsFragment = /* GraphQL */ `
id
description
name
${SEOFragment}
SeriesFields {
	seriesImage {
		${MediaFragment}
	}
	youtubePlaylist
}
slug
uri
`;

export default SeriesDetailsFragment;
