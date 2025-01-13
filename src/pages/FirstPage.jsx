import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Loading from "../Components/Loading/Loading";

const FirstPage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const postsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then((json) => {
        setPosts(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        // Optionally, set an error state here to display an error message in the UI
      });
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const currentPagePosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-transparent ">
      <ul className="bg-transparent w-1/2 cursor-pointer flex flex-col justify-center items-center ml-80 p-10 ">
        {currentPagePosts.map((post) => (
          <li
            key={post.id}
            className="border-2 rounded-md border-black shadow-md m-5 p-3"
            onClick={() => navigate(`/SecondPage/${post.id}`)}
          >
            <label className="font-semibold">{post.title}</label>
            <br />
            {post.body}
          </li>
        ))}
      </ul>
      <div className="p-10 mt-0">
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)} // Total number of pages
            page={page} // Current page
            onChange={handlePageChange} // Handle page change
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default FirstPage;
