import LinkButton from '../../Atoms/LinkButton';
import styles from './styles.module.css';
import { FaRegClock } from "react-icons/fa6";

function CardsCampanha({ campanhas }) {
  return (
    <div>
      <h2 className={styles.tituloPrincipal}>Campanhas e Pesquisas</h2>
      <div className={styles.cardLayout}>
        <ul className={styles.cardList}>
          {campanhas.map((item, index) => (
            <li key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardInfo}>
                  <h3>
                    {item.titulo}
                    <br />
                    <span className={styles.mes}>{item.mes}</span>
                  </h3>
                  <span className={item.status === 'Ativo' ? styles.ativo : styles.inativo}>
                    {item.status}
                  </span>
                </div>
                <div className={styles.layoutButton}>
                  <div className={styles.taxaContainer}>
                    <span className={styles.taxaLabel}>Taxa de resposta</span>
                    <span className={styles.taxaValor}>{item.taxa}</span>
                  </div>
                  <LinkButton to={`/research/${item.id}`} text="Ver Resultado" />
                </div>
                <div className={styles.dataContainer}>
                  <FaRegClock className={styles.Icon} />
                  <span className={styles.dataText}>Última resposta: {item.ultimaResposta}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardsCampanha;
