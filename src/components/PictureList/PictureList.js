import React, { useEffect, useState } from "react";
import "./pictureList.css";
// import { PictureData } from "../../hooks/usePictureData";
import SearchBox from "../SearchBox/SearchBox";
import axios from "axios";

function PictureList() {
  // const { data, isLoading, isError, error } = PictureData();
  const [searchItem, setSearchItem] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?per_page=30&query=${searchItem}&client_id=0ZJRul48x7OMOYicddB0gan_9cXQvCEGVoaCuYk8508`
      )
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchItem]);

  // console.log(data.data?.results);
  console.log(searchItem)
  //   console.log(pictures[0].urls.raw);
  // console.log(data?.data);

  // if (isLoading) return <h1>Loading ....</h1>;
  // if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <SearchBox onSearch={setSearchItem} />
      {/* <div className="picture-list">
        <ul className="picture-grid-list">
          {data?.data.map((picture, index) => (
            <li key={index}>
              <img src={picture.urls.small} alt="office" className="pic-self" />
            </li>
          ))}
        </ul>
          </div> */}
      <div className="picture-list">
        <ul className="picture-grid-list">
          {data.data?.results.map((picture, index) => (
            <li key={index}>
              <img src={picture.urls.small} alt="office" className="pic-self" />
            </li>
          ))}
        </ul>
      </div>
      */
    </>
  );
}

export default PictureList;
