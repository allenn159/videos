import axios from "axios";

const KEY = "AIzaSyBKYM2fRitFPLyGvuFL9L3WfLjYgQIwpBg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
