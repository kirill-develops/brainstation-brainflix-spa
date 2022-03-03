import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "ff9c2a43-3766-47e2-a1f6-cc47352e52a0";
const API_CONFIG = {
  headers: {
    "api_key": API_KEY
  }
};


export default {
getAll: () => axios.get(`${BASE_URL}/videos`, API_CONFIG), 
  getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}`, API_CONFIG), 
  postVideoComment: (id, name, comment) => axios.post(`${BASE_URL}/videos/${id}/comments`, API_CONFIG, {
    'name': name,
    'comment': comment
  }),
  deleteVideoComment: (videoId, commentId) => axios.delete(`${BASE_URL}/videos/${videoId}/comments/${commentId}`, API_CONFIG )
}