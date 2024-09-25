"use client";
import React, { useState } from "react";
import Image from "next/image";
import Up from "../../public/arrowUp.png";

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle.trim());
      setTaskTitle("");
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <div className=" flex-grow max-w-2xl mx-auto flex items-center my-3 bg-[#2F2F2F] rounded-[26px] px-[6px] py-[4px] focus:outline-none">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task..."
          className="flex-grow text-white  rounded-md py-2 px-3 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#000000] text-white p-[10px] rounded-[26px] focus:outline-none"
        >
          <Image src={Up} alt="Enter" width={20} height={30} />
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
