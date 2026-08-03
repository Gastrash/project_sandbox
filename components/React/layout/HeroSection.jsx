/* layout/HeroSection.jsx */

import HeroComponent from "../layout/components/HeroComponent.jsx"
/*import defaultImage*/
/*

- dataSection maneja información dentro del componente.

*/

function HeroSection({
    layoutSection = "AnimeTV", //AnimeTV
    dataSection = "1", //1
    bgImage = defaultImage,
    children
}) {
    defaultImage = "../assets/image/img-01.jpeg"
    return (
        <section id="hero">
            <div className="hero flex flex-column">
                <div className="hero__overlay flex flex-column justify-flex-end">
                  {children}
                </div>
            </div>
        </section>
  )
}

export default HeroSection

/*

<Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>

<HeroComponent layoutSection="1" dataSection></HeroComponent>

  HeroComponent:
    //import: Button, Heart, Like.
    <div className="hero-image">
        <img src={bgImage} />
    </div> dataSection
    <div className="hero-info__secondary flex flex-row">
        <p className="tendencia">tendencias</p>
        <p className="rating">estrenos</p>
    </div>
    <div className="hero-info__primary">
        <h1>Cyberpunk Odyssey</h1>
        <p>En una Neo-Tokio dividida por la tecnología, un joven hacker descubre un secreto que podría reiniciar la realidad misma. Una odisea visual de acción y existencialismo que redefine el género.</p>
    </div>
    <div className="hero-actions flex flex-row">
        <Button size="2">Empezar</Button>
        <Button variant="secondary" size="2">Añadir a lista</Button>
        <Button variant="secondary" layout="square" size="2" icon={<Heart />}></Button>
        <Button variant="secondary" layout="square" size="2" icon={<Like />}></Button>
    </div>
*/