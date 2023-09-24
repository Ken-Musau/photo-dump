import React, { useEffect, useState } from "react";
import "./pictureList.css";
import { usePictureData } from "../../hooks/usePictureData";
import SearchBox from "../SearchBox/SearchBox";
import axios from "axios";

function PictureList() {
  const { data, isLoading, isError, error } = usePictureData();

  const [searchItem, setSearchItem] = useState(null);
  const [searchedPic, setSearchedPic] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?per_page=30&query=${searchItem}&client_id=0ZJRul48x7OMOYicddB0gan_9cXQvCEGVoaCuYk8508`
      )
      .then((response) => {
        setSearchedPic(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchItem]);

  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <>
      <SearchBox onSearch={setSearchItem} />
      {searchItem ? (
        <div className="picture-list">
          <ul className="picture-grid-list">
            {searchedPic.data?.results.map((picture, index) => (
              <li key={index}>
                <img
                  src={picture.urls.small}
                  alt="office"
                  className="pic-self"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="picture-list">
          <ul className="picture-grid-list">
            {data?.data.map((picture, index) => (
              <li key={index}>
                <img
                  src={picture.urls.small}
                  alt="office"
                  className="pic-self"
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default PictureList;
