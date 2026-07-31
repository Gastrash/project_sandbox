/* Card.jsx */
/* import defaultImage from "../assets/image/img-01.jpeg" */

// realizar defaultImage, realizar variante mas compleja.

function Card({
  variant = "default",
  size = "1",
  layout = "vertical",
  backgroundImage = defaultImage,
  children
}) {
  return (
    <article className={`card__container card--size-${size} card--layout-${layout}`}>
        <div className={`card card--variant-${variant}`} style={{ backgroundImage: `url(&{backgroundImage})`}}>
            <div className="card__meta">
                <h4>Neón City</h4>
                <p>Una serie sobre detectives en una megaciudad futurista.</p>
            </div>
        </div>
    </article>
  )
}

export default Card

/*

mejoras: card de comentario, refactor de clases, reutilización mas marcada para el componente.

<Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg">
    children
</Card>

*/