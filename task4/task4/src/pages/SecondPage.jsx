import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SecondPage = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        const postComments = json.filter(
          (comment) => comment.postId === parseInt(postId)
        );
        setComments(postComments);
      });
  }, [postId]);

  return (
    <div className=" h-screen">
      <div className="border-2 rounded-md border-black shadow-md m-5 p-3 w-1/2 shadow-black">
        <div>
          <p className="font-semibold text-xl">{post.title}</p>
          <p>{post.body}</p>
        </div>

        <h1 className="text-center font-semibold flex justify-start items-start ">
          Comments for Post {postId}
        </h1>

        <ol className=" pl-5 mt-1 p-1 flex  flex-col justify-start items-start ">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="my-3 shadow-md border-1 shadow-black p-3 cursor-pointer "
            >
              <p>{comment.body}</p>
              <p className=""> commented by :{comment.email}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SecondPage;
