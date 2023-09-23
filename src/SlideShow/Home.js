import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import axios from "axios";
import SlideShow from "./SlideShow";

function Home() {
  const [pictures, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=office&client_id=0ZJRul48x7OMOYicddB0gan_9cXQvCEGVoaCuYk8508";
    axios.get(url).then((resp) => {
      setData(resp.data.results);
      setIsLoading(false);
    });
  }, []);

  //   console.log(pictures[0].urls.raw);
  console.log(pictures);

  if (isLoading) return <h1>Loading ....</h1>;

  return (
    <div>
      <SlideShow />
      <ul>
        {pictures.map((picture, index) => (
          <li key={index}>
            <img src={picture.urls.small} alt="office" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
