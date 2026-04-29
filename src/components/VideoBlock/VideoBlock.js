import { useEffect, useState } from "react";
import "./VideoBlock.scss";

const VideoBlock = ({ poster, video }) => {
   const [hasError, setHasError] = useState(false);
   const [hasPlaybackAttempt, setHasPlaybackAttempt] = useState(false);

   useEffect(() => {
      setHasError(false);
      setHasPlaybackAttempt(false);
   }, [video]);

   const shouldShowError = hasError && hasPlaybackAttempt;
   const markPlaybackAttempt = () => setHasPlaybackAttempt(true);

   if (shouldShowError) {
      return (
         <div
            className="video-block video-block--error"
            role="status"
            aria-live="polite"
         >
            <p className="video-block__error-title">Video unavailable</p>
            <p className="video-block__error-copy">
               This source could not be loaded. Try selecting another video.
            </p>
         </div>
      );
   }

   return (
      <video
         poster={poster}
         className="video-block"
         controls
         preload="none"
         playsInline
         onPlay={markPlaybackAttempt}
         onPointerDown={markPlaybackAttempt}
         onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
               markPlaybackAttempt();
            }
         }}
         onError={() => setHasError(true)}
      >
         <source
            src={video}
            type="video/mp4"
         />
      </video>
   );
};

export default VideoBlock;
