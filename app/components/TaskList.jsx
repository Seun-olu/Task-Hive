import React from "react";
import Image from "next/image";
import Check from "../assets/image/check.png";
import Delete from "../assets/image/Delete.png";
import Fav from "../assets/image/Fav.png"; // Unfilled star icon
import FavFilled from "../assets/image/FavFilled.png"; // Filled star icon

const TaskList = ({
  tasks,
  onDelete,
  onToggleCompletion,
  onToggleFavourite,
}) => {
  return (
    <div className="space-y-2 h-full">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center h-12 justify-between bg-[#2f2f2f] shadow-sm rounded-xl p-4 mt-[45px]"
        >
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleCompletion(task.id)}
              className={`w-6 h-6 flex items-center justify-center font-[#212121] rounded-full border-2 transition duration-200 hover-image ${
                task.completed ? "bg-[#212121]" : "bg-[#212121]"
              }`}
            >
              {task.completed && (
                <Image src={Check} alt="checkmate" className=" w-[70%] h-[60%]" />
              )}
            </button>

            <p
              className={`text-lg ${
                task.completed ? "line-through text-white" : "text-white"
              }`}
            >
              {task.title}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => onToggleFavourite(task.id)}
              className="flex items-center justify-center"
            >
              <Image
                src={task.favourite ? FavFilled : Fav}
                alt="favourite"
                width={20}
                height={20}
              />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Image src={Delete} alt="delete" width={20} height={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
