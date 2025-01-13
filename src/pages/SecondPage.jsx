import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SecondPage = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  console.log("par:", params);

  useEffect(() => {
    setLoading(true);
    const fetchComment = async () => {
      const comment = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const json = await comment.json();
      const postComments = json.filter(
        (comment) => comment.postId === parseInt(postId)
      );
      setLoading(false);
      setComments(postComments);
    };

    const fetchPost = async () => {
      const post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const json = await post.json();
      setLoading(false);
      setPost(json);
    };
    fetchComment();
    fetchPost();
  }, [postId]);

  return (
    <div className=" h-fit">
      {loading ? (
        <div>
          <CircularProgress></CircularProgress>
        </div>
      ) : (
        <div className="border-2 rounded-md border-black shadow-md  p-3 w-1/2 shadow-black ml-80 h-fit ">
          <div>
            <p className="font-semibold text-xl">{post.title}</p>
            <p>{post.body}</p>
          </div>

          <h1 className="text-center font-semibold flex justify-start items-start ">
            Comments of Post {postId}
          </h1>

          <ol className=" pl-5 mt-1 p-1 flex  flex-col justify-start items-start ">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="my-3 shadow-md border-1 shadow-black p-3 cursor-pointer "
              >
                {" "}
                <p className="font-semibold"> commented by :{comment.email}</p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default SecondPage;
