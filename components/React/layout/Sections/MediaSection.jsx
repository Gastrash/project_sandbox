//layout/MediaSection.jsx (exclusivo de AnimeTV)

import MediaComponent from "components/MediaComponent.jsx"

/*
    solucionar botones de mediaPlayer__nav.
*/

function MediaSection ({
    variant = "default",
    dataType = {variant},
    dataNumber = "1"
}) {
    return (
        <section id="mediaPlayer" className="container">
                <div className="mediaPlayer flex flex-column justify-center align-center">
                    <MediaComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></MediaComponent>
                </div>
            </section>
    )
}

export default MediaSection

/*

MediaComponent:
//import: Button, List, Download, Like, Share, Arrow.

*/