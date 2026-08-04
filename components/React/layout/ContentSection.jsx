// layout/ContentSection.jsx (exclusivo de AnimeTV)

import ContentComponent from "components/ContentComponent"

// Refactor de styles, componente pensado para modificar con props mas adelante

function ContentSection ({
  layoutSection="default", //default, ranking, grid
  dataSection = "1",
  children
}){
    return (
        <section className="container-secondary">
            <div className="content flex flex-column">
              <ContentComponent layout={layoutSection} data={dataSection}></ContentComponent>
            </div>
        </section>
    )
}

export default ContentSection

/*

*/