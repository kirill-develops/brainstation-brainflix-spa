import React from 'react'

import Media from '../../components/Media/Media';
import MediaHighlights from '../../components/MediaHighlights/MediaHighlights';
import CommentInput from '../../components/CommentInput/CommentInput';
import CommentList from '../../components/CommentList/CommentList';
import NextVideo from '../../components/NextVideo/NextVideo';

const HomePage = ({ timestamp, title, channel, views, likes, poster, description, commentSum, commentsArr, vidArr, handleVideoChange }, routerProps) => {
  console.log(routerProps)
  return (
    <div className='App'>
      <Media poster={poster} />

      <div className='main--desktop'>

        <div className="main__left--desktop">

          <MediaHighlights
            timestamp={timestamp}
            title={title}
            channel={channel}
            views={views}
            likes={likes}
            description={description}
          />
          <CommentInput
            commentSum={commentSum}
          />
          <CommentList
            commentsArr={commentsArr}
          />
        </div>

        <NextVideo
          vidArr={vidArr}
          handleVideoChange={handleVideoChange}
        />
      </div>
    </div>
  )
}

export default HomePage