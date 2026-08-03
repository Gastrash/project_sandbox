/* Button.jsx */

function Button({
  variant = "default", // default, secondary, 
  size = "1", // 1, 2, 3
  layout = "normal", //
  iconPosition = "left", //left, right
  icon,
  children
}) {

  /* const validIconPosition = iconPosition === "right" ? "right" : "left" */

  return (
    <button className={`btn btn--variant-${variant} btn--size-${size} btn--layout-${layout}`}>

      {icon && iconPosition === "left" && <span className="btn__icon">{icon}</span>}

      {children != null && <span className="btn__label">{children}</span>}

      {icon && iconPosition === "right" && <span className="btn__icon">{icon}</span>}

    </button>
  )
}

export default Button

/*
pendiente: loading, disabled, onClick, fullWidth, href (a), events, accesibilidad (aria-*), forwardRef, className externa, style externa.

<Button variant="secondary" size="2" layout="icontext" icon={<Arrow />}>Siguiente</Button>

*/