import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../hooks/useTasks";
import { api } from "../../services/api";
import { Container, Content } from "./styles";


interface Tasks{
    id: number;
    title: string;
    description: string;
    task: string;
    createAt: string;
  }

export function Summary() {

    const [task, setTask] = useState<Tasks[]>([])

    useEffect(() => {
        api.get('/tasks')
        .then(response => setTask(response.data.tasks))
        .catch(error => console.log('Possivel erro: ', error))
    }, [])

    
    // Calc Total Task
    const summary = task.reduce((acc, task) => {
        acc.total = task.id
        return acc
    }, {
        total: 0,
    })

    // const firstTask = task.reduce((acc, task) => {
    //     acc + task.description
    //     return acc
    // }, task.map(date => date.createAt))


    return(
        <Container>
            <Content className="content-summary">
                <div className="card">
                    <span>Recente</span>
                    <h2>Jogar Playstation 5</h2>
                </div>
                <div className="card">
                    <span>Última</span>
                    <h2>Jogar Playstation 5</h2>
                </div>
                <div className="card total">
                    <span>Todas tarefas</span>
                    <h2>{summary.total}</h2>
                </div>
            </Content>
        </Container>
    )
}