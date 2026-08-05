/* layout/HeaderSection.jsx */
/*
import Card from "../components/Card.jsx"
import List from "../components/List.jsx"
*/
import HeaderComponent from "component/HeaderComponent.jsx"

/*
Partición del componente:

- Titulo, sectionNav (pelis, series, favoritos), actionsNav (account, search, notifications).

- reemplazar componentes, diseñar refactor de la arquitectura.
*/

function HeaderSection({
  variant = "AnimeTV",
  dataType = {variant},
  dataNumber = "1"
}) {
    return (
        <header>
            <div className="header flex flex-row justify-space-between align-center">
              <HeaderComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></HeaderComponent>
            </div>
        </header>
  )
}

export default HeaderSection

/*

*/