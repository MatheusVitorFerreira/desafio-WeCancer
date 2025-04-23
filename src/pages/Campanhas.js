import Container from '../layout/Container';
import Styles from './Campanhas.module.css';
import CardsAgendamento from './Cards/CardsAgendamento';


function Campanhas() {
  return (
    <Container customClass="columnStart">
      <div>
        <h1 className={Styles.header}>Equipes de Saúde</h1>
        <p className={Styles.subHeader}>
          Plataforma de atendimento e gestão de pacientes oncológicos
        </p>
      </div>
      <CardsAgendamento/>
    </Container>
  );
}

export default Campanhas;
