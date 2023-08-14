import { styled } from 'styled-components';

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
       <Wrapper>
        <label htmlFor={name}>
            {labelName}
        </label>
        {isSurpriseMe && (
            <button type='button' onClick={handleSurpriseMe}>
                Surprise Me
            </button>
        )}
       </Wrapper>
       <InputWrapper 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
       />
    </div>
  )
}
export default FormField;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    label {
        display: block;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        color: rgb(17 24 39);
    }

    button {
        font-weight: 600;
        font-size: 0.75rem; 
        line-height: 1rem;
        background: #ececf1;
        padding: 0.25rem 0.5rem;
        border-radius: 5px;
        color: black;
        border: none;
        cursor: pointer;
    }
`

const InputWrapper = styled.input`
    display: block;
    width: 100%;
    padding: 0.75rem;
    background: rgb(249 250 251);
    border-color: rgb(209 213 219);
    color: rgb(17 24 39);
    font-size: 0.875rem; 
    line-height: 1.25rem; 
    border-radius: 0.5rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
`;