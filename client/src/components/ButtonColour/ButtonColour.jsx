import "./ButtonColour.scss";

function ButtonColour({ onClick, buttonText, extraClass, icon }) {
  return (
    <button className={`button-colour ${extraClass}`} onClick={onClick}>
      {icon && icon}
      <p className="button-colour__text">{buttonText}</p>
    </button>
  );
}

export default ButtonColour;
