/* Card.jsx */
/* import defaultImage from "../assets/image/img-01.jpeg" */

// realizar defaultImage, realizar variante mas compleja.

function Card({
  variant = "default", //default, secondary
  size = "2", //1, 2, 3
  layout = "vertical", // horizontal(16:9), vertical(3:4)
  data = {}
}) {
  return (
    <article className={`card__container card--size-${size} card--layout-${layout}`}>
        <div className={`card card--variant-${variant}`} style={{ backgroundImage: `url(${data.image})`}}>
            <div className="card__meta">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    </article>
  )
}

export default Card

/*

mejoras: card de comentario, refactor de clases.

<Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg">
    children
</Card>

*/
