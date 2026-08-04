//layout/SeasonSection.jsx (exclusivo de AnimeTV)

import SeasonComponent from "components/SeasonComponent.jsx"

/*

*/

function SeasonSection ({
    layoutSection = "default", //default, ..
    dataSection = "1",
    children
}) {
    return (
        <section id="seasonContent" className="container">
            <div className="seasonContent flex flex-column">
                <SeasonComponent layout={layoutSection} data={dataSection}></SeasonComponent>
            </div>
        </section>
    )
}

export default SeasonSection

/*

*/