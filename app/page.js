"use client";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Close from "./assets/icons/Close";
import Menu from "./assets/icons/Menu";

const IndexPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activeHash, setActiveHash] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const addTask = (title) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      completed: false,
      favourite: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));

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
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-col md:hidden p-4 z-50">
        {menuOpen ? (
          <Menu onClick={toggleMenu} className="cursor-pointer" />
        ) : (
          <Menu onClick={toggleMenu} className="cursor-pointer" />
        )}
      </div>

      <div
        className={`fixed inset-y-0 left-0 w-64 md:w-48 bg-[#171717] text-white p-6 transform md:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <nav className="flex flex-col gap-4 mt-8">
          <a
            href="#all"
            onClick={toggleMenu}
            className={`py-2 px-4 rounded-lg ${
              activeHash === "all" ? "bg-[#212121]" : "bg-transparent"
            } hover:bg-[#212121]`}
          >
            All Tasks
          </a>
          <a
            href="#completed"
            onClick={toggleMenu}
            className={`py-2 px-4 rounded-lg ${
              activeHash === "completed" ? "bg-[#212121]" : "bg-transparent"
            } hover:bg-[#212121]`}
          >
            Completed
          </a>
          <a
            href="#favourites"
            onClick={toggleMenu}
            className={`py-2 px-4 rounded-lg ${
              activeHash === "favourites" ? "bg-[#212121]" : "bg-transparent"
            } hover:bg-[#212121]`}
          >
            Favourite
          </a>
        </nav>
      </div>

      <div className="flex flex-col flex-1 gap-8 p-4 md:ml-48 overflow-auto">
        <div className="mt-6 md:mt-12 flex-1 overflow-y-auto">
          <TaskList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onToggleCompletion={toggleTaskCompletion}
            onToggleFavourite={toggleTaskFavourite}
          />
        </div>
        
        <div className="fixed bottom-0 w-[90%] bg-[#212121] bg-opacity-80 backdrop-blur-lg shadow-md p-3">
          <TaskForm onAddTask={addTask} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
