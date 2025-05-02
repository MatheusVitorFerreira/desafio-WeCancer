import { FormControl , Label, InputContainer  } from './styles'; 

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <FormControl>
            <Label htmlFor={name}>{text}</Label>
            <InputContainer 
                type={type} 
                name={name} 
                id={name}
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}
            />
        </FormControl>
    );
}

export default Input;