import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard'; 
import Pessoas from './Pages/Pessoas';
import Sintomas from './Pages/Sintomas';
import Navegacao from './Pages/Navegacao';
import Agendamento from './Pages/Agendamento';
import Inicio from './Pages/Inicio';
import Chat from './Pages/Chat';
import Campanhas from './Pages/Campanhas';
import Duvidas from './Pages/Duvidas';
import Campanha from './Pages/Campanha';
import CampanhaEdit from './Pages/CampanhaEdit';
import ErrorBoundary from './Components/Molecules/ErrorBoundary'; 

import { ContainerWrapper, LayoutWrapper } from './Components/Atoms/Container/styles'; 
import GlobalStyle from './Styles/styles'; 

function App() {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Router>
        <Dashboard />
        <ContainerWrapper>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/pessoas" element={<Pessoas />} />
              <Route path="/sintomas" element={<Sintomas />} />
              <Route path="/navegacao" element={<Navegacao />} />
              <Route path="/agendamento" element={<Agendamento />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/campanhas" element={<Campanhas />} />
              <Route path="/duvidas" element={<Duvidas />} />
              <Route path="/research/:id" element={<Campanha />} />
              <Route path="/campanha/edit/:id" element={<CampanhaEdit />} />
            </Routes>
          </ErrorBoundary>
        </ContainerWrapper>
      </Router>
    </LayoutWrapper>
  );
}

export default App;
