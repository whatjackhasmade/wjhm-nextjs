import type { MediaItem, MediaSize } from 'wjhmtypes';

declare type MediaSizeQuery = {
  query?: string;
} & MediaSize;

export const getSizes = (media: MediaItem): MediaSizeQuery[] => {
  const mediaDetails = media?.mediaDetails;
  const sizes = mediaDetails?.sizes;
  if (!sizes) return null;

  const hasSizes = sizes.length > 0;
  if (!hasSizes) return null;

  const toSort = [...sizes];
  const sortedSizes = toSort.sort((a, b) => Number(b.width) - Number(a.width));

  const smartSizes = sortedSizes.map((curr: MediaSizeQuery, i, array) => {
    const end = i + 1 === array.length;
    if (end) return curr;
    curr = {
      ...curr,
      query: array[i + 1].width,
    };
    return curr;
  });

  const hasSmartSizes = smartSizes.length > 0;
  if (!hasSmartSizes) return null;

  return smartSizes.reverse();
};
