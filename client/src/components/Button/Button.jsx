import "./Button.scss";

function Button({ onClick, buttonText, extraClass, icon }) {
  return (
    <button className={`button ${extraClass}`} onClick={onClick}>
      {icon && icon}
      <p className="button__text">{buttonText}</p>
    </button>
  );
}

export default Button;
