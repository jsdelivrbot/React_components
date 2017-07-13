import React from 'react'

// the first argument 'video' has a propery called video
const VideoListItem = ({video, videoSelect}) => {
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => videoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;