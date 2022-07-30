import { useState } from "react";
import CommentsCard from "./CommentsCard.js";


function VideoInfo({videoData}){
    // console.log("video data", videoData)

    const [videoInfo, setVideoInfo] = useState(videoData)
    const [isVisible, setIsVisible] = useState(true)

    function handlelikes(){
        const video = {...videoInfo};
        video.upvotes ++;
        setVideoInfo(video)
    }
    function handleDislikes(){
        const video = {...videoInfo};
        video.downvotes ++;
        setVideoInfo(video)
    }
    

    function handleVisibility(){
        setIsVisible(!isVisible)
    }

    return(
        <div>
            <iframe
        width="919"
        height="525"
        src={videoInfo.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoInfo.title}
      />
      <h1>{videoInfo.title}</h1>
      <span>{videoInfo.views} Views | Uploaded {videoInfo.createdAt}</span>
      <button onClick={handlelikes}>{videoInfo.upvotes}👍 </button>
      <button onClick={handleDislikes}>{videoInfo.downvotes}👎</button>
      <button onClick={handleVisibility}>{isVisible ? 'Hide Comments' : 'Show Comments'}</button>
      {isVisible ?<CommentsCard comments={videoInfo.comments}/> :'' }
        </div>
    )
}

export default VideoInfo;