import { Container, Content } from "./styles";

import Modal from "react-modal";
import { FormEvent, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";


interface TaskInput {
  title: string;
  description: string;
  task: string;
}



export function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState('')

  const [newTask, setNewTask] = useState<TaskInput[]>([])

  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    
    closeModal()

    setTitle('');
    setDescription('');
    setTask('')
  }
  
  return (
    <Container>
      <div>
        <h4 className="logo">
          Anote <span>+</span>
        </h4>
        <nav>
          <button type="button" onClick={openModal}>
            Nova tarefa
          </button>
        </nav>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Content onSubmit={handleCreateNewTask}>
          <h2>Nova tarefa</h2>
          <div className="form-group">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Nova tarefa:"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição:"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              name="task"
              id="task"
              placeholder="Conteúdo:"
              cols={30}
              rows={10}
              value={task}
              onChange={(event) => setTask(event.target.value)}
            ></textarea>
          </div>
          <div className="form-group form-group-buttons">
            <button 
                type="submit"
                onClick={handleCreateNewTask}
                >Guardar tarefa</button>
            <button 
                type="button"
                onClick={closeModal}
            >Cancelar tarefa</button>
          </div>
        </Content>
      </Modal>
    </Container>
  );
}
