import { Component } from "react";
import apiUtils from "../../utils/apiUtils";

import ErrorPage from "../ErrorPage/ErrorPage";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentInput from "../../components/CommentInput/CommentInput";
import CommentList from "../../components/CommentList/CommentList";
import NextVideo from "../../components/NextVideo/NextVideo";

class HomePage extends Component {
   state = {
      videoArray: [],
      activeVideoObj: null,
      error: false,
      likedVids: [],
      isLoading: true,
   };

   componentDidMount() {
      apiUtils
         .getAll()
         .then((res) => {
            const videoArray = res.data;
            const likedVids = videoArray.map((vid) => ({
               id: vid.id,
               liked: false,
            }));
            const { videoID: routeVideoId } = this.props.match.params;

            if (!videoArray.length) {
               this.setState({
                  videoArray: [],
                  likedVids: [],
                  activeVideoObj: null,
                  error: true,
                  isLoading: false,
               });
               return;
            }

            if (
               routeVideoId &&
               !videoArray.find((vid) => vid.id === routeVideoId)
            ) {
               this.setState({
                  videoArray,
                  likedVids,
                  activeVideoObj: null,
                  error: true,
                  isLoading: false,
               });
               return;
            }

            const selectedVideoId = routeVideoId || videoArray[0].id;

            apiUtils
               .getVideoById(selectedVideoId)
               .then((videoRes) => {
                  this.setState({
                     videoArray,
                     likedVids,
                     activeVideoObj: videoRes.data,
                     error: false,
                     isLoading: false,
                  });
               })
               .catch((err) => {
                  console.log(err);
                  this.setState({ error: true, isLoading: false });
               });
         })
         .catch((err) => {
            console.log(err);
            this.setState({ error: true, isLoading: false });
         });
   }

   componentDidUpdate(prevProps) {
      // deconstruct current and previous params
      const { videoID: currentID } = this.props.match.params;
      const { videoID: prevID } = prevProps.match.params;

      if (prevID === currentID) {
         return;
      }

      if (
         currentID &&
         !this.state.videoArray.find((vid) => vid.id === currentID)
      ) {
         this.setState({ error: true, isLoading: false });
         return;
      }

      const fallbackId =
         this.state.videoArray[0] && this.state.videoArray[0].id;
      const nextVideoId = currentID || fallbackId;

      if (!nextVideoId) {
         return;
      }

      this.setState({ isLoading: true, error: false });

      apiUtils
         .getVideoById(nextVideoId)
         .then((response) => {
            this.setState({
               activeVideoObj: response.data,
               error: false,
               isLoading: false,
            });
         })
         .catch((err) => {
            console.log(err);
            this.setState({ error: true, isLoading: false });
         });
   }

   // I didn't ignore the following feedback, however due to poor time management last week, i didnt get a chance to ask what it means:
   //feedback: - You should be using your updateActiveVideoObj better as you are doing this several times within your Home page and comment form
   updateActiveVideoObj = (vidObj) => {
      this.setState({
         activeVideoObj: vidObj,
      });
   };

   updateLike = (videoId) => {
      const errorMessage = (
         <p> Error fetching data, please try reloading in a few moments</p>
      );

      // find ID of liked video and see if it's state is liked is active
      const { id, liked } = this.state.likedVids.find(
         (vid) => vid.id === videoId,
      );

      // find index of liked video in arr
      const likedIndex = this.state.likedVids.findIndex(
         (vid) => vid.id === videoId,
      );

      // API call to update like count based on if the user's likedState is active
      apiUtils
         .likeVideo(id, liked)
         .then((res) => {
            const updateLikes = [...this.state.likedVids];
            updateLikes[likedIndex] = {
               ...updateLikes[likedIndex],
               liked: res.data[0],
            };
            this.setState({ likedVids: updateLikes });
            this.updateActiveVideoObj(res.data[1]);
         })
         .catch((err) => {
            console.log(err);
            return errorMessage;
         });
   };

   render() {
      if (this.state.isLoading) {
         return (
            <div className="home-skeleton">
               <div className="home-skeleton__video"></div>
               <div className="home-skeleton__main">
                  <div className="home-skeleton__left">
                     <div className="home-skeleton__line home-skeleton__line--title"></div>
                     <div className="home-skeleton__line home-skeleton__line--meta"></div>
                     <div className="home-skeleton__line"></div>
                     <div className="home-skeleton__line"></div>
                     <div className="home-skeleton__line home-skeleton__line--short"></div>
                     <div className="home-skeleton__line home-skeleton__line--comments"></div>
                  </div>
                  <div className="home-skeleton__right">
                     <div className="home-skeleton__card"></div>
                     <div className="home-skeleton__card"></div>
                     <div className="home-skeleton__card"></div>
                  </div>
               </div>
            </div>
         );
      }

      if (this.state.error) {
         return <ErrorPage />;
      }

      if (!this.state.activeVideoObj) {
         return null;
      }

      const { image, comments, video, id } = this.state.activeVideoObj;
      const { activeVideoObj } = this.state;

      // create var with boolean value regarding if active vid is liked
      const isLikedObj = this.state.likedVids.find((vid) => vid.id === id);
      const isLiked = isLikedObj ? isLikedObj.liked : false;

      return (
         <div className="App">
            <VideoBlock
               key={id}
               poster={image}
               video={video}
               id={id}
            />
            <div className="main--desktop">
               <div className="main__left--desktop">
                  <VideoInfo
                     videoObj={activeVideoObj}
                     updateLike={this.updateLike}
                     isLiked={isLiked}
                  />
                  <CommentInput
                     commentSum={comments.length}
                     videoId={id}
                     updateActiveVideoObj={this.updateActiveVideoObj}
                  />
                  <CommentList
                     commentsArr={comments}
                     videoId={id}
                     updateActiveVideoObj={this.updateActiveVideoObj}
                  />
               </div>
               <NextVideo
                  vidArr={this.state.videoArray}
                  activeVideoId={id}
               />
            </div>
         </div>
      );
   }
}

export default HomePage;
