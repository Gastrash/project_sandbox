// layout/ContentSection.jsx (exclusivo de AnimeTV)

import ContentComponent from "components/ContentComponent"

// Refactor de styles, componente pensado para modificar con props mas adelante

function ContentSection ({
  //default, ranking, grid
  variant = "default",
  dataType = {variant},
  dataNumber = "1"
}){
    return (
        <section className="container-secondary">
            <div className="content flex flex-column">
              <ContentComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></ContentComponent>
            </div>
        </section>
    )
}

export default ContentSection

/*

*/