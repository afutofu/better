import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Meditate", time: 530 },
    { id: 1, name: "English Essay", time: 7000 },
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), name: task, time: 0 };
    if (task) {
      setTasks((prevTasks) => {
        return [newTask, ...prevTasks];
      });
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
