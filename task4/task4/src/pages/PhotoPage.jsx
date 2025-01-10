import React, { useEffect, useState } from "react";

const PhotoPage = () => {
  const [photo, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  }, []);

  return (
    <div>
      {photo.slice(0, 8).map((photo) => (
        <li className="border-2 rounded-md border-black shadow-md m-5 p-3 cursor-pointer ">
          <label className="font-semibold "> {photo.title}</label>
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
