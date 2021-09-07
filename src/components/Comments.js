import React from 'react';

function VideoComment({comments}){
  return (  
      <>
<h3>{comments[0].user}</h3>
<div>{comments[0].comment}</div>
<h4>{comments[1].user}</h4>
<div>{comments[1].comment}</div>
</>
  )
}

export default VideoComment