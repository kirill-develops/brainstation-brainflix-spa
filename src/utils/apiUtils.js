import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "?api_key=ff9c2a43-3766-47e2-a1f6-cc47352e52a0";


const getAllReq = {
  baseURL: BASE_URL,
  method: 'get',
  url: '/videos',
  params: {
    api_key: API_KEY
  }
}

const apiUtils = {
  getAll: () => axios(getAllReq),
  getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}${API_KEY}`),
  postVideoComment: (id, name, comment) => axios.post(`${BASE_URL}/videos/${id}/comments${API_KEY}`, {
    'name': name,
    'comment': comment
  }),
  deleteVideoComment: (videoId, commentId) => axios.delete(`${BASE_URL}/videos/${videoId}/comments/${commentId}${API_KEY}`)
}


export default apiUtils;