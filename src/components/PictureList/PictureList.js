import React, { useEffect, useState } from "react";
import "./pictureList.css";
import { usePictureData } from "../../hooks/usePictureData";
import SearchBox from "../SearchBox/SearchBox";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
      <h1 className="primary-heading">Image Search</h1>
      <SearchBox onSearch={setSearchItem} />
      {searchItem ? (
        <div className="picture-list">
          <DragDropContext>
            <Droppable droppableId="picture">
              {(provided) => (
                <ul
                  className="picture-grid-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {searchedPic.data?.results.map((picture, index) => (
                    <Draggable
                      key={picture.id}
                      draggableId={picture.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img
                            src={picture.urls.small}
                            alt="office"
                            className="pic-self"
                          />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ) : (
        <div className="picture-list">
          <DragDropContext>
            <Droppable droppableId="pictures">
              {(provided) => (
                <ul
                  className="picture-grid-list"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {data?.data.map((picture, index) => (
                    <Draggable
                      key={picture.id}
                      draggableId={picture.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img
                            src={picture.urls.small}
                            alt="office"
                            className="pic-self"
                          />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </>
  );
}

export default PictureList;
