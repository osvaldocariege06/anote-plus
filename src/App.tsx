import { useEffect, useState, useContext } from "react";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TasksProvider } from "./hooks/useTasks";

import { api } from "./services/api";

// Styles
import { GlobalStyles } from "./styles/globalStyles";

interface AppProps {
  ola: () => void
}


function App() {
  const [tasks, setTasks] = useState([])
  
  
  useEffect(() => {
  api.get('/tasks')
  .then(response => console.log(response.data))
  .catch(error => console.log('Erro aqui: ', error))
  }, [])

// tasks.map((task) => console.log(task))

  
  return (
    <div className="App">
      <TasksProvider>
        <GlobalStyles />
        <Header />
        <Dashboard />
        <Footer />
      </TasksProvider>
    </div>
  );
}

export default App;
