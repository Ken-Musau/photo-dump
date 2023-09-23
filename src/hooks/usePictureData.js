import { useQuery } from "react-query";

import axios from "axios";

const getPictures = () =>
  axios.get(
    "https://api.unsplash.com/photos?per_page=40&query=office&client_id=0ZJRul48x7OMOYicddB0gan_9cXQvCEGVoaCuYk8508"
  );

export function PictureData() {
  return useQuery("pictures", getPictures);
}
