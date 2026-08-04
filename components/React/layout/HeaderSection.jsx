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
  layoutSection = "AnimeTV",
  dataSection = "1", //AnimeTV
  children
}) {
    return (
        <header>
            <div className="header flex flex-row justify-space-between align-center">
              <HeaderComponent layout={layoutSection} data={dataSection}></HeaderComponent>
            </div>
        </header>
  )
}

export default HeaderSection

/*

<Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>

*/