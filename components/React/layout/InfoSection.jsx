//layout/InfoSection.jsx (exclusivo de AnimeTV)

import InfoComponent from "components/InfoComponent.jsx"

/*

*/

function InfoSection ({
    layoutSection = "default", //default, ..
    dataSection = "1", //
    children
}) {
    return (
        <section id="infoContent" className="container">
            <div className="infoContent flex flex-row">
                <InfoComponent layout={layoutSection} data={dataSection}></InfoComponent>
            </div>
        </section>
    )
}

export default InfoSection

/*

*/