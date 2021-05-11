import React, { createContext, useState, useEffect } from "react";
import moment from "moment";

export const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Meditate", time: 0, timeHistory: [] },
    {
      id: 1,
      name: "English Essay",
      time: 700,
      timeHistory: [
        { id: 1, time: 300, date: "May 11th 21, 10:12:34" },
        { id: 0, time: 400, date: "May 11th 21, 05:00:02" },
      ],
    },
  ]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), name: task, time: 0, timeHistory: [] };
    if (task) {
      setTasks((prevTasks) => {
        return [newTask, ...prevTasks];
      });
    }
  };

  const saveTaskTime = (taskId, time) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            time: task.time + time,
            timeHistory: [
              {
                id: Date.now(),
                time,
                date: moment().format("MMMM Do YY, hh:mm:ss"),
              },
              ...task.timeHistory,
            ],
          };
        }
        return task;
      });
    });
  };

  const clearTimeHistory = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            time: 0,
            timeHistory: [],
          };
        }
        return task;
      });
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        saveTaskTime,
        clearTimeHistory,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
