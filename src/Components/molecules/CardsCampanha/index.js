import React, { useState, useEffect, useRef } from 'react';
import LinkButton from '../../Atoms/LinkButton';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Dropdown from '../../Atoms/Dropdown';
import { useNavigate } from 'react-router-dom';
import {
  TituloPrincipal,
  CardLayout,
  CardList,
  Card,
  CardInfo,
  Status,
  LayoutButton,
  TaxaContainer,
  TaxaLabel,
  TaxaValor,
  DataContainer,
  DataText,
  IconWrapper,
  MenuIcon,
  DataContent
} from './styles';
function CardsCampanha({ campanhas, onDelete }) {
  const navigate = useNavigate();
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const MenuDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

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
      <TituloPrincipal>Campanhas e Pesquisas</TituloPrincipal>
      <CardLayout>
        {campanhas.length === 0 ? (
          <p>Nenhuma campanha disponível no momento.</p>
        ) : (
          <CardList>
            {campanhas.map((item, index) => (
              <Card key={item.id}>
                <div>
                  <CardInfo>
                    <h3>
                      {item.titulo}
                      <br />
                      <span className="mes">{item.mes}</span>
                    </h3>
                    <Status $status={item.status}>{item.status}</Status>
                  </CardInfo>
                  <LayoutButton>
                    <TaxaContainer>
                      <TaxaLabel>Taxa de resposta</TaxaLabel>
                      <TaxaValor>{item.taxa}</TaxaValor>
                    </TaxaContainer>
                    <LinkButton to={`/research/${item.id}`} text="Ver Resultado" />
                  </LayoutButton>
                  <DataContainer>
                    <DataContent>
                      <DataText>Última resposta: {item.ultimaResposta}</DataText>
                      <IconWrapper
                        onClick={() => MenuDropdown(index)}
                        ref={(el) => (dropdownRefs.current[index] = el)}
                      >
                        <MenuIcon>
                          <HiOutlineDotsVertical />
                        </MenuIcon>
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
                      </IconWrapper>
                    </DataContent>
                  </DataContainer>
                </div>
              </Card>
            ))}
          </CardList>
        )}
      </CardLayout>
    </div>
  );
}

export default CardsCampanha;