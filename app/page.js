"use client";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import Navbar from "./components/Navbar";
import { MenuOpen } from "./assets/icons/MenuOpen";
import { MenuClose } from "./assets/icons/MenuClose";

// import Image from "next/image";
// import Logo from '../public/taskhive.png'

const IndexPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activeHash, setActiveHash] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const addTask = (title) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      completed: false,
      favourite: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTaskFavourite = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, favourite: !task.favourite } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "favourites") return task.favourite;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setFilter(hash || "all");
      setActiveHash(hash || "all");
    };

    window.addEventListener("hashchange", handleHashChange);

    // Initialize the filter based on the current hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex">
      <aside
        className={`fixed top-0 left-0 h-screen bg-[#171717] text-white flex flex-col ${
          menuOpen ? "w-52 translate-x-0" : "w-16 -translate-x-0"
        } transition-all duration-500 ease-in-out z-40`}
      >
        <div className="flex items-center justify-end p-4">
          {menuOpen ? (
            <MenuClose onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <MenuOpen onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>

        {menuOpen && (
          <div className="flex-1 p-4 space-y-2">
            <a
              href="#all"
              className={`block py-2 px-4 rounded-lg ${
                activeHash === "all" ? "bg-[#212121]" : "bg-transparent"
              } hover:bg-[#212121]`}
            >
              All Tasks
            </a>
            <a
              href="#completed"
              className={`block py-2 px-4 rounded-lg ${
                activeHash === "completed" ? "bg-[#212121]" : "bg-transparent"
              } hover:bg-[#212121]`}
            >
              Completed
            </a>
            <a
              href="#favourites"
              className={`block py-2 px-4 rounded-lg ${
                activeHash === "favourites" ? "bg-[#212121]" : "bg-transparent"
              } hover:bg-[#212121]`}
            >
              Favourite
            </a>
          </div>
        )}
      </aside>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col justify-between h-screen">
          <div className="flex flex-col container mx-auto p-4 overflow-y-auto">
            <TaskList
              tasks={filteredTasks}
              onDelete={deleteTask}
              onToggleCompletion={toggleTaskCompletion}
              onToggleFavourite={toggleTaskFavourite}
            />
          </div>
          <div className="fixed left-[13rem] right-3 w-auto bottom-0 bg-[#212121] text-[#88909F]">
            <TaskForm onAddTask={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

