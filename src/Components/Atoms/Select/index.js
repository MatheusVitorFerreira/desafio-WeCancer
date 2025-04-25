import Styles from './styles.module.css';

function Select({ text, name, handleOnChange, value, options }) {
  return (
    <div className={Styles.form_control}>
      <label htmlFor={name}>{text}</label>
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
