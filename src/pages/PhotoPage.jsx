import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const PhotoPage = () => {
  const [photo, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json))
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div className="p-10">
      {photo.slice(0, 8).map((photo) => (
        <li className="border-2 rounded-md border-black shadow-md p-3 cursor-pointer m-3 list-none w-1/2 ml-80 h-fit">
          <div className="font-semibold "> {photo.title}</div>
          <br></br>

          <img src={photo.url}></img>

          <br></br>
          <img src=""></img>
        </li>
      ))}
    </div>
  );
};

export default PhotoPage;
