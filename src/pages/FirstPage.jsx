import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setImage(json));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setValue(json));
  }, []);
  return (
    <div className="">
      <div className="">
        <ul className="bg-transparent gap-5  w-1/2 cursor-pointer ">
          {value.slice(0, 8).map((value) => (
            <li
              key={value.id}
              className="border-2 rounded-md border-black shadow-md m-5 p-3 "
              onClick={() => {
                navigate(`/SecondPage/${value.id}`);
              }}
            >
              <label className="font-semibold "> {value.title}</label>
              <br></br>

              <br></br>

              {value.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirstPage;
