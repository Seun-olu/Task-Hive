import React from "react";
import Image from "next/image";
import Check from "../assets/image/check.png";
import Delete from "../assets/image/Delete.png";
import Fav from "../assets/image/Fav.png";
import FavFilled from "../assets/image/FavFilled.png";

const TaskList = ({ tasks, onDelete, onToggleCompletion, onToggleFavourite }) => {
  return (
    <div className="space-y-4 h-full">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between bg-[#2f2f2f] shadow-sm rounded-lg p-3 md:p-4"
        >
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onToggleCompletion(task.id)}
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition duration-200 ${
                task.completed ? "bg-[#212121]" : "bg-transparent"
              }`}
            >
              {task.completed && (
                <Image src={Check} alt="Completed" className="w-4 h-4" />
              )}
            </button>

            <p
              className={`text-base md:text-lg ${
                task.completed ? "line-through text-gray-400" : "text-white"
              }`}
            >
              {task.title}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <button onClick={() => onToggleFavourite(task.id)} className="p-1">
              <Image
                src={task.favourite ? FavFilled : Fav}
                alt="Favourite"
                width={20}
                height={20}
              />
            </button>
            <button onClick={() => onDelete(task.id)} className="p-1 text-red-500">
              <Image src={Delete} alt="Delete" width={20} height={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
