//layout/InfoSection.jsx (exclusivo de AnimeTV)

import InfoComponent from "components/InfoComponent.jsx"

/*

*/

function InfoSection ({
    variant = "default",
    dataType = {variant},
    dataNumber = "1"
}) {
    return (
        <section id="infoContent" className="container">
            <div className="infoContent flex flex-row">
                <InfoComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></InfoComponent>
            </div>
        </section>
    )
}

export default InfoSection

/*

*/