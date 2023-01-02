import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Tasks{
  id: string;
  title: string;
  description: string;
  task: string;
  createAt: string;
}
export type TaskInput = Omit<Tasks, 'id' | 'createAt'>

interface TasksContextDate {
  task: Tasks[],
  createTask: (task: TaskInput) => Promise<void>
}

interface TaskProviderProps {
  children: ReactNode,
}

export const TasksContext = createContext<TasksContextDate>(
  {} as TasksContextDate
);

export function TasksProvider({ children }: TaskProviderProps) {

  const [task, setTask] = useState<Tasks[]>([]);

  useEffect(() => {
    api
      .get("tasks")
      .then((response) => setTask(response.data.tasks))
      .catch((error) => {
        console.log("Erro ao conectar a api: ", error);
      });
  }, []);

  async function createTask(tasksInput: TaskInput){
    const response = await api.post('/tasks', {
      ...tasksInput,
      createAt: new Date(),
    })

    const { tasks } = response.data

    setTask([
      ...task,
      tasks
    ])
  }

  return (
    <TasksContext.Provider value={{ task, createTask }}>
      { children }
    </TasksContext.Provider>
  )
}