/* layout/HeroSection.jsx */

/*
Partición del componente:

- configSection maneja información dentro del componente, (realizar mas adelante).

- reemplazar componentes, diseñar refactor de la arquitectura.
*/

/*
function Hero({
    configSection = "1",
    bgImage = defaultImage
}) {
    defaultImage = "../assets/image/img-01.jpeg"
    return (
        <section id="hero">
            <div className="hero flex flex-column">
                <div className="hero-image">
                    <img src={bgImage} />
                </div>
                <div className="hero__overlay flex flex-column justify-flex-end">
                    <div class="hero-info__secondary flex flex-row">
                        <p class="tendencia">tendencias</p>
                        <p class="rating">estrenos</p>
                    </div>
                    <div class="hero-info__primary">
                        <h1>Cyberpunk Odyssey</h1>
                        <p>En una Neo-Tokio dividida por la tecnología, un joven hacker descubre un secreto que podría reiniciar la realidad misma. Una odisea visual de acción y existencialismo que redefine el género.</p>
                    </div>
                    <div class="hero-actions flex flex-row">
                        <button id="btn-start" class="btn btn--size-3 btn--default">Empezar</button>
                        <button id="btn-addList" class="btn btn--size-3 btn--secondary">Añadir a lista</button>
                        <button id="btn-favorite" class="btn btn--type-square btn--type-square-small btn--secondary">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">heart</title><path fill="currentColor" d="M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528m-1.172 1.644l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L12 18.657l-6.828-6.829a4 4 0 0 1 5.656-5.656"/></svg>
                        </button>
                        <button id="btn-like" class="btn btn--type-square btn--type-square-small btn--secondary">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">like</title><path fill="currentColor" d="M20 8h-5.61l1.12-3.37c.2-.61.1-1.28-.27-1.8c-.38-.52-.98-.83-1.62-.83h-1.61c-.3 0-.58.13-.77.36L6.54 8H4.01c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13.31a2 2 0 0 0 1.87-1.3l2.76-7.35c.04-.11.06-.23.06-.35v-2c0-1.1-.9-2-2-2ZM6 19H4v-9h2zm14-7.18L17.31 19H8V9.36L12.47 4h1.15l-1.56 4.68a1.01 1.01 0 0 0 .95 1.32h7v1.82Z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero

// <Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>
*/