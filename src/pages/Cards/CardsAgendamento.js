import styles from './CardsAgendamento.module.css';
import { FaRegClock } from "react-icons/fa6";

function CardsAgendamento() {
    const mockPesquisas = [
        {
            id:'1',
            titulo: 'Confirmação de Consulta -',
            mes: 'Julho 2023',
            taxa: '72%',
            status: 'Ativo',
            ultimaResposta: '12 jul 2023, 15:43',
        },
        {
            id:'2',
            titulo: 'Avaliação de Sintomas -',
            mes: 'Junho 2023',
            taxa: '85%',
            status: 'Ativo',
            ultimaResposta: '30 jun 2023, 09:12',
        },
        {
            id:'3',
            titulo: 'Acompanhamento Pós-Tratamento',
            taxa: '63%',
            status: 'Inativo',
            ultimaResposta: '15 mai 2023, 17:32',
        },

    ];

    return (
        <>
            <h2 className={styles.tituloPrincipal}>Campanhas e Pesquisas</h2>
            <div className={styles.cardLayout}>
                <ul className={styles.cardList}>
                    {mockPesquisas.map((item, index) => (
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
                                    <button className={styles.button}>Ver resultados</button>
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
        </>
    );
}

export default CardsAgendamento;
