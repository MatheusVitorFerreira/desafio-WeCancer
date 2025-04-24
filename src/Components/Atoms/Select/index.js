import Styles from './styles.module.css';

function Select({name, handleOnChange, value, options }) {
  return (
    <div className={Styles.form_control}>
      <select name={name} id={name} value={value || ""} onChange={handleOnChange}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
