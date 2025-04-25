import styles from './styles.module.css';

function Dropdown({ onEdit, onDelete }) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.arrow}></div>
      <ul>
        <li onClick={onDelete}>Excluir</li>
        <li onClick={onEdit}>Editar</li>
      </ul>
    </div>
  );
}

export default Dropdown;
