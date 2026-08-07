//layout/components/HeroAnimeTV.jsx

import List from "../../components/List.jsx"
import Button from "../../components/Button.jsx"
import Heart from "../../icons/Heart.jsx"
import Like from "../../icons/Like.jsx"

import HeroAnimeTVData from "../data/AnimeTV/HeroAnimeTV-data.js"

function HeroAnimeTV ({
    dataNumber = 0,
    //bgImage, rating, ranking, title, description.
}) {
    /*
    const anime = heroAnimeTV-data.items[0]
    <img src={anime.image} alt={anime.title} />
    */
    return (
        <div className="hero__overlay flex flex-column justify-flex-end">
                <div className="hero-image">
                <img /*src={bgImage}*/ />
                </div>
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
        </div>
    )
}

export default HeroAnimeTV