//layout/components/MediaAnimeTV.jsx

import List from "../../components/List.jsx"
import Button from "../../components/Button.jsx"

function MediaAnimeTV ({
    dataNumber
}) {
    return (
        <>
                    <main className="mediaPlayer__viewer flex flex-column">
    <img className="mediaPlayer-video" src="assets/image/img-01.jpeg"> 
        <source src="assets/image/img-01.jpeg" type="image/jpeg">
        Tu navegador no soporta la reproducción de videos.</source>
    </img>
</main>
<footer className="mediaPlayer__footer flex flex-column justify-flex-start align-center">
    <div className="mediaPlayer__actions flex flex-row justify-center align-center">
        <List>
            <Button size="2" variant="secondary" layout="icontext" icon={<Download />}>Descargar</Button>
            <Button size="2" variant="secondary" layout="icontext" icon={<Share />}>Compartir</Button>
            <Button size="2" variant="secondary" layout="icontext" icon={<Like />}>Me gusta</Button>
        </List>
    </div>
    <nav className="mediaPlayer__nav flex flex-row">
        <List>
            <button id="mediaPlayer-nav-previous" class="btn btn--size-3 btn--icon-left btn--secondary btn--mediaPlayer btn--mediaPlayer-nav-primary">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">left-arrow</title><path fill="currentColor" d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"/></svg>
                <div class="flex flex-column justify-space-between">
                    <p>ANTERIOR</p>
                    <p>Cap. 35</p>
                </div>
            </button>
            <Button size="3" layout="square" variant="secondary" icon={<Episodes />}></Button>
            <button id="mediaPlayer-nav-next" class="btn btn--size-3 btn--icon-left btn-secondary btn--mediaPlayer btn--mediaPlayer-nav-secondary">
                <svg class="icon icon-right" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">left-arrow</title><path fill="currentColor" d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"/></svg>
                <div class="flex flex-column justify-space-between">
                    <p>SIGUIENTE</p>
                    <p>Cap. 37</p>
                </div>
            </button>
        </List>
    </nav>
</footer>
                </>
    )
}

export default MediaAnimeTV