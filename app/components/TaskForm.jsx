"use client";
import Image from "next/image";
import React, { useState } from "react";
import plus from "../assets/image/plus.png"

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
      <div className=" flex-grow max-w-2xl mx-auto flex items-center my-3 bg-[#2F2F2F] rounded-xl px-[6px] py-[4px] focus:outline-none">
        <button
          type="submit"
          className=" text-white p-3 focus:outline-none"
        >
          <Image src={plus} alt="Enter" width={15} height={15} />
        </button>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task..."
          className="flex-grow text-white  rounded-md py-2 px-3 bg-transparent focus:outline-none"
        />
      </div>
    </form>
  );
};

export default TaskForm;
