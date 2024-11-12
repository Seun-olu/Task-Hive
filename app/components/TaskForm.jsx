"use client";
import Image from "next/image";
import React, { useState } from "react";
import plus from "../assets/image/plus.png";

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
    <form onSubmit={handleAddTask} className="w-full max-w-2xl mx-auto">
      <div className="flex items-center bg-[#2F2F2F] rounded-xl p-2">
        <button
          type="submit"
          className="text-white p-2 focus:outline-none"
        >
          <Image src={plus} alt="Add Task" width={16} height={16} />
        </button>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task..."
          className="flex-grow text-white bg-transparent py-2 px-3 focus:outline-none placeholder:text-gray-400"
        />
      </div>
    </form>
  );
};

export default TaskForm;
