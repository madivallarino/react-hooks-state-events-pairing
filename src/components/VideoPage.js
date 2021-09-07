import React, { useState } from 'react';
import Comments from './Comments';

function VideoPage({video}){
const [isHidden, setIsHidden] = useState(false)
const [likeVotes, setlikeVotes] = useState(video.upvotes)
const [downVotes, setDownVotes] = useState(video.downvotes)
function handleUpvotes(){
    setlikeVotes(likeVotes + 1)
}
function handleDownVotes(){
    setDownVotes(downVotes - 1)
}
function handleClick(){
    setIsHidden(!isHidden)
}
console.log(video.title)
return (
    <>
    <h1>{video.title}</h1>
    <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
<div>{video.views} views</div>
<div>Uploaded {video.createdAt}</div>
<button onClick={handleUpvotes}>{likeVotes}👍</button>
<button onClick={handleDownVotes}>{downVotes}👎</button>
<h2>{video.comments.length} Comments</h2>
<button onClick={handleClick}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
{isHidden ? null : <Comments comments={video.comments}/>}


   </>
)
}
      export default VideoPage;