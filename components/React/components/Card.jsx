/* Card.jsx */
/* import defaultImage from "../assets/image/img-01.jpeg" */

// realizar defaultImage, realizar variante mas compleja.

function Card({
  variant = "default", //default, secondary
  size = "2", //1, 2, 3
  layout = "vertical", // horizontal(16:9), vertical(3:4)

  dataNumber,
  backgroundImage = defaultImage, //backgroundImage="src/assets/image/img-01.jpeg
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