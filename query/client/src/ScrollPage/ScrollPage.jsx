import React, { useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProjects = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${pageParam}&_limit=5`
  );
  if (!response.ok) throw new Error("Failed to fetch data");

  const data = await response.json();
  return { data, nextPage: data.length ? pageParam + 1 : null };
};

const ScrollPage = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? false,
  });

  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    }
  };

  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-96 h-[500px] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 rounded-lg shadow-lg bg-white p-4"
      >
        {data.pages.map((group, i) => (
          <div key={i} className="mb-2">
            {group.data.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col bg-gray-100 p-3 rounded-lg shadow-sm mb-2"
              >
                <p className="text-2xl font-bold">{comment.name}</p>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        ))}

        {isFetchingNextPage && (
          <p className="text-center mt-2">Loading more...</p>
        )}
      </div>
    </div>
  );
};

export default ScrollPage;
