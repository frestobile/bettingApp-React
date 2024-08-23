import { DetailedHTMLProps, VideoHTMLAttributes, useEffect, useRef } from 'react';

interface IMedia {
  type: 'video' | 'image';
  link?: any;
  containerStyle?: any;
  containerClasses?: string;
  className?: string;
  videoProps?: DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
}

function Media({ type, link, className, videoProps, containerClasses, containerStyle }: IMedia) {
  const videoRef = useRef<any>();
  useEffect(() => {
    if (videoProps?.autoPlay) {
      videoRef.current.muted = false;
    }
  }, [videoRef, videoProps]);

  return (
    <div className={`relative ${containerClasses || ''}`} style={containerStyle || {}}>
      {type === 'video' && link && (
        <video muted className={className || ''} {...videoProps} ref={videoRef}>
          <source src={link} />
        </video>
      )}
      {type === 'image' && link && (
        // eslint-disable-next-line
        <img
          className={`absolute w-[100%] h-[100%] object-cover ${className || ''}`}
          src={link}
          alt="not found image"
        />
      )}
    </div>
  );
}

export default Media;
