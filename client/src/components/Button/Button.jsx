import "./Button.scss";

function Button({ onClick, buttonText, extraClass }) {
  return (
    <button className={`button ${extraClass}`} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
