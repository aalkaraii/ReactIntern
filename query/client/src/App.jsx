import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import ScrollPage from "./ScrollPage/ScrollPage";

const App = () => {
  const [page, setPage] = useState(1);
  const [newtask, setNewTask] = useState({ id: "", title: "" });
  const [editing, setEditing] = useState(false);
  const {
    data = [],
    refetch,
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["projects", page],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/datas?_page=${page}&_limit=${3 * page}`
      );
      const result = await response.json();
      console.log("API Response:", result);
      return Array.isArray(result) ? result : [];
    },
    keepPreviousData: true,
    staleTime: 0,
  });

  // Mutation for adding a task
  const { mutate: addTask } = useMutation({
    mutationFn: async (newTask) => {
      await fetch("http://localhost:3000/datas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
    },
    onSuccess: () => {
      refetch();
      setNewTask({ id: "", title: "" });
    },
  });

  // Mutation for deleting a task
  const { mutate: deleteTask } = useMutation({
    mutationFn: async (id) => {
      await fetch(`http://localhost:3000/datas/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      refetch();
    },
  });

  // Mutation for updating a task
  const { mutate: updateTask } = useMutation({
    mutationFn: async (updatedTask) => {
      await fetch(`http://localhost:3000/datas/${updatedTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
    },
    onSuccess: () => {
      refetch();
      setNewTask({ id: "", title: "" });
      setEditing(false);
    },
  });
  const handelNext = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-9">
        <h1 className="text-4xl font-bold  mb-4">Todo List</h1>

        {/* Task Input */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-96">
          <input
            className="border p-2 w-full mb-2 rounded-lg outline-none"
            name="id"
            value={newtask.id}
            type="number"
            disabled={editing}
            onChange={(e) => setNewTask({ ...newtask, id: e.target.value })}
            placeholder="Enter ID"
          />
          <input
            className="border p-2 w-full mb-2 rounded-lg outline-none"
            name="title"
            type="text"
            value={newtask.title}
            onChange={(e) => setNewTask({ ...newtask, title: e.target.value })}
            placeholder="Enter Title"
          />
          <button
            className={`w-full p-2 rounded-lg font-bold shadow-md duration-200 hover:bg-gray-400 ${
              editing ? "bg-pink-300" : "bg-blue-400"
            }`}
            onClick={() =>
              editing
                ? updateTask({ id: newtask.id, title: newtask.title })
                : addTask({ id: newtask.id, title: newtask.title })
            }
          >
            {editing ? "Update Task" : "Add Task"}
          </button>
        </div>

        {/* Display Tasks */}
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error loading data</div>
        ) : (
          <div className="w-96 mt-6">
            {data.slice(3 * page - 3, 3 * page).map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 mb-2 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold text-lg">{item.id}</h2>
                  <p className="text-gray-600">{item.title}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-400  px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-400"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-400  px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-400"
                    onClick={() => {
                      setEditing(true);
                      setNewTask({ id: item.id, title: item.title });
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}

            <div className="mt-4 text-center font-bold">
              Current Page: {page}
            </div>

            <div className="w-full flex justify-between items-center mt-4">
              {/* Previous Button */}
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                className={`p-2 rounded-lg font-bold shadow-md duration-200 hover:bg-gray-400 bg-blue-400 ${
                  page === 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
                disabled={page === 1}
              >
                Previous
              </button>

              {/* Next Button */}
              <button
                onClick={handelNext}
                className={`p-2 rounded-lg font-bold shadow-md duration-200 hover:bg-gray-400 bg-blue-400 cursor-pointer ${
                  data.length < 3 * page
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                disabled={data.length < 3 * page}
              >
                Next
              </button>

              {isFetching && <span> Loading...</span>}
            </div>
          </div>
        )}
        <div >
          <ScrollPage />
        </div>
      </div>
    </>
  );
};

export default App;
