import axios from "axios";

const BASE_URL =
   process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_BASE_URL_DEV
      : process.env.REACT_APP_BASE_URL_PROD;

const getAllReq = {
   baseURL: BASE_URL,
   method: "get",
   url: "/videos",
};

const apiUtils = {
   getAll: () => axios(getAllReq),
   getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}`),
   postVideoComment: (id, name, comment) =>
      axios.post(`${BASE_URL}/videos/${id}/comments`, {
         name: name,
         comment: comment,
         id: id,
      }),
   postVideo: (title, description, video) =>
      axios.post(`${BASE_URL}/videos/`, {
         title: title,
         channel: "Mohan Muruge",
         image: video,
         description: description,
         video: "https://archive.org/download/kikTXNL6MvX6ZpRXM/kikTXNL6MvX6ZpRXM.mp4",
      }),
   likeVideo: (videoId, liked) =>
      axios.put(`${BASE_URL}/videos/${videoId}/likes/`, {
         liked: liked,
      }),
   deleteVideoComment: (videoId, commentId) =>
      axios.delete(`${BASE_URL}/videos/${videoId}/comments/${commentId}`),
};

export default apiUtils;
