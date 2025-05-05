import styled from 'styled-components';

export const TituloPrincipal = styled.h2`
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #23263C;
  font-weight: bold;
`;

export const CardLayout = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  padding-right: 0.5rem;
  margin-top: -15px;
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(335px, 1fr));
  gap: 1.5rem;
  padding: 0;
  list-style: none;
  scroll-behavior: smooth;
`;

export const Card = styled.li`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: -12px;

  h3,
  .mes {
    font-size: 1.5rem;
    font-weight: bold;
    color: #030303;
    margin: 0;
    line-height: 1.4;
  }
`;

export const Status = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${(props) => (props.$status === 'Ativo' ? '#22C55E' : '#000000')};
  background-color: ${(props) => (props.$status === 'Ativo' ? '#DCFCE7' : '#e3e7eb')};
`;


export const LayoutButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TaxaContainer = styled.div`
  margin-top: -15px;
`;

export const TaxaLabel = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  color: #878c96;
  margin-bottom: 0.25rem;
  margin-top: 15px;
`;

export const TaxaValor = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2F3247;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DataText = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #878c96;
  gap: 4px;
  font-size: 1rem;
`;

export const Icon = styled.span`
  font-size: 14px;
`;

export const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuIcon = styled.div`
  font-size: 25px;
`;

export const DataContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
