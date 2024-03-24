import React from "react";

const Video = ({ src, ...props }) => {
  return (
    <video controls src={src} {...props}>
      <track kind="captions" {...props} />
    </video>
  );
};

export default Video;
