import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const VideoItems = props.videos.map((video) => {
    // add unique key to be able to update each record by its key
    return (
      <VideoListItem
        videoSelect={props.videoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;