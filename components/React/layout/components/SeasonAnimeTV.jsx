//layout/components/SeasonAnimeTV.jsx

import List from "../../components/List.jsx"
import Button from "../../components/Button.jsx"

function SeasonAnimeTV ({
    dataNumber
}) {
    return (
        <>
                    <div className="seasonContent__actions flex flex-row justify-flex-start">
    <Button size="2" layout="split" variant="secondary" icon={<Arrow rotation="270" />}>Temporada 1</Button>
</div>
<main class="seasonContent__body flex flex-column">
    <List layout="grid">
        <Card layout="horizontal"></Card> //generación dinamica.
    </List>
</main>
<nav class="seasonContent__navigation flex flex-row justify-center align-center">
    <Button size="2" layout="square" variant="secondary" icon={<Arrow />}></Button>
    <div class="seasonContent__display flex justify-center">
        <button id="pagination-dot" class="btn-primary btn-pagination-dot"></button>
    </div>
    <Button size="2" layout="square" variant="secondary" icon={<Arrow rotation="180"/>}></Button>
</nav>
                </>
    )
}

export default SeasonAnimeTV