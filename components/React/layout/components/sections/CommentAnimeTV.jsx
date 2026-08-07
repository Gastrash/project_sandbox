//layout/components/CommentAnimeTV.jsx

function CommentAnimeTV ({
    dataNumber
}) {
    return (
        <>
            <header class="comments__header flex flex-row justify-space-between align-center">
                <h3>Comentarios</h3>
                <p>43</p>
            </header>
            <main class="comments__main">
                <ul class="comments-list flex flex-column justify-flex-start align-center">
                    <li class="comments-card flex flex-column justify-center align-center">
                        <header class="comments-card__header flex flex-row justify-flex-start">
                            <div class="comments-card__image">
                                <img src="assets/image/img-01.jpeg"/>
                            </div>
                            <h4>Pedrito</h4>
                        </header>
                        <main class="comments-card__main">
                            <div class="comments__card__main__commentContainer">
                                <p>un mierdon, borra la cuenta</p>
                            </div>
                        </main>
                        <footer class="comments-card__footer flex flex-row justify-space-between align-center">
                            <div class="comments-card__actions flex flex-row justify-center align-center">
                                <button class="btn btn--size-1 btn--secondary"></button>
                                <button class="btn btn--size-1 btn--secondary"></button>
                                <button class="btn btn--size-1 btn--secondary"></button>
                            </div>
                            <div class="comments-card__info flex flex-row justify-center align-center">
                                <p></p>
                                <p></p>
                            </div>
                        </footer>
                    </li>
                </ul>
            </main>
            <footer class="comments__footer flex flex-row justify-space-between align-center">
                <form class="comments-form flex flex-row justify-center align-center">
                    <input class="input input--size-medium input--default" type="text" placeholder="Agregar comentario" required/>
                    <button id="submit" class="btn btn--size-2 btn--default" type="submit">Comentar</button>
                    </form>
                    <div class="comments-actions flex flex-row justify-center align-center">
                        <button class="btn btn--type-square btn--type-square-small btn--secondary"></button>
                        <button class="btn btn--type-square btn--type-square-small btn--secondary">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">options-vertical</title><path fill="currentColor" d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/></svg>
                        </button>
                    </div>
                </footer>
        </>
    )
}

export default CommentAnimeTV