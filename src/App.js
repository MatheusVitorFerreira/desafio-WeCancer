import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Pessoas from './pages/Pessoas';
import Sintomas from './pages/Sintomas';
import Navegacao from './pages/Navegacao';
import Agendamento from './pages/Agendamento';
import Inicio from './pages/Inicio';
import Chat from './pages/Chat';
import Campanhas from './pages/Campanhas';
import Duvidas from './pages/Duvidas';

import Container from './layout/Container';
import Dashboard from './pages/Dashboard'; 
import styles from './layout/Container.module.css';

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
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
