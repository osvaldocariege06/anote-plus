
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FilterTask } from "../FilterTask";
import { Summary } from "../Summary";
import { Container, Content } from "./styles";


interface TasksProps{
  id: string;
  title: string;
  description: string;
  task: string;
  createAt: string;
}


export function Dashboard() {

  const [tasks, setTasks] = useState<TasksProps[]>([])

  // useEffect(() => {
  //   api
  //     .get("tasks")
  //     .then((response) => setTasks(response.data.tasks))
  //     .catch((error) => {
  //       console.log("Erro ao conectar a api: ", error);
  //     });
  // }, []);


 
  return (
    <Container>
      {/* <Summary />

      <Content className="box-card">
        {tasks.map((task) => (
          <a key={task.id} href="#" className="task">
            <header>
              icon
              <span>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(task.createAt)
              )}</span>
            </header>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </a>
        ))}
      </Content> */}
      <FilterTask />
    </Container>
  );
}