//layout/components/InfoAnimeTV.jsx

import List from "../../components/List.jsx"
import Button from "../../components/Button.jsx"

function InfoAnimeTV ({
    dataNumber
}) {
    return (
        <>
                    <div className="infoContent__primary flex flex-column"> 
    <header className="infoContent__title flex flex-row justify-flex-start align-center">
        <h2>Cyberpunk Odyssey</h2>
        <p id="type">Película</p>
    </header>
    <main className="infoContent__details flex flex-column justify-space-between">
        <div className="infocontent__characteristics flex flex-row justify-space-between">
            <p>En emisión</p>
            <p>Duración: 2h 15m</p>
            <p>+16</p>
        </div>
        <div className="infoContent__description">
            <p>Descripcion: En una Neo-Tokio dividida por la tecnología, un joven hacker descubre un secreto que podría reiniciar la realidad misma. Una odisea visual de acción y existencialismo que redefine el género.</p>
        </div>
    </main>
    <footer className="infoContent__actions flex flex-row">
        <Button size="2">Empezar</Button>
        <Button variant="secondary" size="2">Añadir a lista</Button>
        <Button variant="secondary" layout="square" size="2" icon={<Heart />}></Button>
        <Button variant="secondary" layout="square" size="2" icon={<Like />}></Button>
    </footer>
    </div>
    <div className="infoContent__secondary flex flex-column justify-center align-center">
        <video className="infoContent__trailer" controls>
        <source src="assets/videos/videoPrueba1.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de videos.</source>
        </video>
    </div>
                </>
    )
}

export default InfoAnimeTV