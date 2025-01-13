// import * as React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const PaginationPage = () => {
//   const [value, setValue] = useState([]);
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const postsPerPage = 10;

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => setValue(json));
//   }, []);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   const displayedPosts = value.slice(
//     (page - 1) * postsPerPage,
//     page * postsPerPage
//   );

//   return (
//     <div className="bg-transparent">
//       {/* List of posts */}
//       <ul className="bg-transparent w-1/2 cursor-pointer flex flex-col justify-center items-center">
//         {displayedPosts.map((post) => (
//           <li
//             key={post.id}
//             className="border-2 rounded-md border-black shadow-md m-5 p-3"
//             onClick={() => {
//               navigate(`/SecondPage/${post.id}`);
//             }}
//           >
//             <label className="font-semibold">{post.title}</label>
//             <br />
//             {post.body}
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       <Stack spacing={2} alignItems="center">
//         <Pagination
//           count={Math.ceil(value.length / postsPerPage)}
//           page={page}
//           onChange={handleChange}
//           variant="outlined"
//           color="primary"
//         />
//       </Stack>
//     </div>
//   );
// };

// export default PaginationPage;
