import { useMemo, useState, useEffect } from "react";
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/',
})

const taskName = [
  "play",
  "codar",
  "assistir",
  "comer",
  "dormir",
  "cantar",
  "estudar",
];

export function FilterTask() {
  const [task, setTask] = useState("");


  const filterTask = useMemo(() => {
    const taskLower = task.toLowerCase();
    return taskName.filter((fruta) => fruta.toLowerCase().includes(taskLower));
  }, [task]);

  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <ul>
        {filterTask.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </>
  );
}

