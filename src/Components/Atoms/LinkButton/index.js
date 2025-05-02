import { ButtonLink } from './styles';

function LinkButton({ to, text }) {
  return <ButtonLink to={to}>{text}</ButtonLink>;
}

export default LinkButton;
