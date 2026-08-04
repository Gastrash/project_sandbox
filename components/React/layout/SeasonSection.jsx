//layout/SeasonSection.jsx

import SeasonComponent from "components/SeasonComponent.jsx"

/*

*/

function SeasonSection ({
    layoutSection = "default",
    dataSection = "1",
    children
}) {
    return (
        <section id="seasonContent" className="container">
            <div className="seasonContent flex flex-column">
                {children}
            </div>
        </section>
    )
}

export default SeasonSection

/*

SeasonComponents:
//import: Button, List, Arrow.
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

*/