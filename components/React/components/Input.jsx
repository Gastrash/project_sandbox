/* Input.jsx */

function Input({
  variant = "default",
  size = "1",
  layout = "text",
  iconPosition = "left",
  icon,
  children
}) {
  return (
    <div className="input__container">
      {icon && iconPosition === "left" && <span className="field__icon">{icon}</span>}

      <input className={`input input--variant-${variant} input--size-${size} input--layout-${layout}`}/>

      {icon && iconPosition === "right" && <span className="field__icon">{icon}</span>}
    </div>
  )
}

export default Input

/*

refactor de estilos, dividir container de estilos visuales del input.

icono = flex: 0 0 auto;
input = flex: 1 1 auto;

<Input variant="secondary" size="2" layout="textarea">

*/