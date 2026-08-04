//layout/MediaSection.jsx (exclusivo de AnimeTV)

import MediaComponent from "components/MediaComponent.jsx"

/*
    solucionar botones de mediaPlayer__nav.
*/

function MediaSection ({
    layoutSection = "default",
    dataSection = "1",
    children
}) {
    return (
        <section id="mediaPlayer" className="container">
                <div className="mediaPlayer flex flex-column justify-center align-center">
                    <MediaComponent layout={layoutSection} data={dataSection}></MediaComponent>
                </div>
            </section>
    )
}

export default MediaSection

/*

MediaComponent:
//import: Button, List, Download, Like, Share, Arrow.

*/