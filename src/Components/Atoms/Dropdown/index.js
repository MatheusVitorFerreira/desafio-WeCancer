import { Dropdown, Arrow, DropdownList, DropdownItem } from './styles';

function DropdownMenu({ onEdit, onDelete }) {
  return (
    <Dropdown>
      <Arrow />
      <DropdownList>
        <DropdownItem onClick={onDelete}>Excluir</DropdownItem>
        <DropdownItem onClick={onEdit}>Editar</DropdownItem>
      </DropdownList>
    </Dropdown>
  );
}

export default DropdownMenu;
