import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './Components/pages/Dashboard';
import Pessoas from './Components/pages/Pessoas';
import Sintomas from './Components/pages/Sintomas';
import Navegacao from './Components/pages/Navegacao';
import Agendamento from './Components/pages/Agendamento';
import Inicio from './Components/pages/Inicio';
import Chat from './Components/pages/Chat';
import Campanhas from './Components/pages/Campanhas/Campanhas';
import Duvidas from './Components/pages/Duvidas';
import Campanha from './Components/pages/Campanhas/Campanha';

import Container from './Components/Atoms/Container';
import styles from './Components/Atoms/Container/Container.module.css';

function App() {
  return (
    <div className={styles.layoutWrapper}>
      <Router>
        <Dashboard />
        <Container customClass="container">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/pessoas" element={<Pessoas />} />
            <Route path="/sintomas" element={<Sintomas />} />
            <Route path="/navegacao" element={<Navegacao />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/campanhas" element={<Campanhas />} />
            <Route path="/duvidas" element={<Duvidas />} />
            <Route path="/research/:id" element={<Campanha />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
