import React from "react";
import "./pictureList.css";
import { PictureData } from "../../hooks/usePictureData";

function pictureList() {
  const { data, isLoading, isError, error } = PictureData();
  //   console.log(pictures[0].urls.raw);
  // console.log(data?.data);

  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <div className="picture-list">
      <ul className="picture-grid-list">
        {data?.data.map((picture, index) => (
          <li key={index}>
            <img src={picture.urls.small} alt="office" className="pic-self" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default pictureList;
