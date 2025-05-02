import logoImg from '../../../assets/logo.png';
import { IoHomeOutline, IoWarningOutline, IoCalendarOutline } from "react-icons/io5";
import { PiUsersThin } from "react-icons/pi";
import { FiNavigation2 } from "react-icons/fi";
import { CiChat1 } from "react-icons/ci";
import { TbVolume, TbMessage2Filled } from "react-icons/tb";
import { ContainerWrapper } from '../../Atoms/Container/styles'; 

import {
  SideBarContainer,
  LogoContainer,
  Logo,
  Header,
  SubHeader,
  List,
  ListItemLink
} from './styles';

  function SideBar() {
    return (
      <SideBarContainer>
        <ContainerWrapper>
          <LogoContainer>
            <Logo src={logoImg} alt="Logo" />
            <div>
              <Header>wecancer</Header>
              <SubHeader>times de saúde</SubHeader>
            </div>
          </LogoContainer>
          <List>
            <li><ListItemLink to="/inicio"><IoHomeOutline className="navIcon" />Inicio</ListItemLink></li>
            <li><ListItemLink to="/pessoas"><PiUsersThin className="navIcon" />Pessoas</ListItemLink></li>
            <li><ListItemLink to="/sintomas"><IoWarningOutline className="navIcon" />Sintomas</ListItemLink></li>
            <li><ListItemLink to="/navegacao"><FiNavigation2 className="navIcon" />Navegação</ListItemLink></li>
            <li><ListItemLink to="/agendamento"><IoCalendarOutline className="navIcon" />Agendamento</ListItemLink></li>
            <li><ListItemLink to="/chat"><CiChat1 className="navIcon" />Chat</ListItemLink></li>
            <li><ListItemLink to="/campanhas"><TbVolume className="navIcon" />Campanhas</ListItemLink></li>
            <li><ListItemLink to="/duvidas"><TbMessage2Filled className="navIcon" />Dúvidas</ListItemLink></li>
          </List>
        </ContainerWrapper>
      </SideBarContainer>
    );
  }
export default SideBar