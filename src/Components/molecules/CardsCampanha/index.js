import React, { useState, useEffect, useRef } from 'react';
import LinkButton from '../../Atoms/LinkButton';
import styles from './styles.module.css';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Dropdown from '../../Atoms/Dropdown';
import { useNavigate } from 'react-router-dom';

function CardsCampanha({ campanhas, onDelete }) {
  const navigate = useNavigate();
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);

  // Menu para abrir e fechar o dropdown
  const MenuDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  // Efeito clique fora do dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownIndex !== null && !dropdownRefs.current[dropdownIndex]?.contains(event.target)) {
        setDropdownIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownIndex]);

  return (
    <div>
      <h2 className={styles.tituloPrincipal}>Campanhas e Pesquisas</h2>
      <div className={styles.cardLayout}>
        <ul className={styles.cardList}>
          {campanhas.map((item, index) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
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
                </div>
                <div className={styles.layoutButton}>
                  <div className={styles.taxaContainer}>
                    <span className={styles.taxaLabel}>Taxa de resposta</span>
                    <span className={styles.taxaValor}>{item.taxa}</span>
                  </div>
                  <LinkButton to={`/research/${item.id}`} text="Ver Resultado" />
                </div>
                <div className={styles.dataContainer}>
                  <div className={styles.dataContent}>
                    <span className={styles.dataText}>Última resposta: {item.ultimaResposta}</span>
                    <div
                      className={styles.iconWrapper}
                      onClick={() => MenuDropdown(index)} 
                      ref={el => (dropdownRefs.current[index] = el)}
                    >
                      <HiOutlineDotsVertical className={styles.menuIcon} />
                      {dropdownIndex === index && (
                        <Dropdown 
                          onEdit={() => {
                            navigate(`/campanha/edit/${item.id}`);
                            setDropdownIndex(null);
                          }}
                          onDelete={() => {
                            onDelete(item.id);
                            setDropdownIndex(null);
                          }}
                        />
                      )}
                    </div>
                  </div>
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
