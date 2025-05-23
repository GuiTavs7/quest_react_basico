import './button.css'

const Button = (props) => {
  return (
    <button onClick={() => window.alert(`A label deste botão é: ${props.label}`)}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Clique aqui',
};

export default Button;