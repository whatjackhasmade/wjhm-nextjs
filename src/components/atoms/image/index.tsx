import { LazyLoadImage } from 'react-lazy-load-image-component';

type ImageProps = React.HTMLProps<HTMLImageElement> & {
  caption?: string;
};

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { alt, height, src, width } = props;

  return <LazyLoadImage alt={alt} height={height} src={src} width={width} />;
};

export default Image;
