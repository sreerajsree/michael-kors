import React from "react";
import { Player, BigPlayButton } from "video-react";
import "/node_modules/video-react/dist/video-react.css";

const Video = () => {
  return (
    <>
      <div className="hidden md:block">
        <Player
          playsInline
          poster="/banner1.webp"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="block md:hidden">
        <Player
          playsInline
          poster="/banner1sm.webp"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          fluid={false}
          width="auto"
          height={470}
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    </>
  );
};

export default Video;
