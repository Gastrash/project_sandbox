//layout/SeasonSection.jsx (exclusivo de AnimeTV)

import SeasonComponent from "components/SeasonComponent.jsx"

/*

*/

function SeasonSection ({
    variant = "default",
    dataType = {variant},
    dataNumber = "1"
}) {
    return (
        <section id="seasonContent" className="container">
            <div className="seasonContent flex flex-column">
                <SeasonComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></SeasonComponent>
            </div>
        </section>
    )
}

export default SeasonSection

/*

*/