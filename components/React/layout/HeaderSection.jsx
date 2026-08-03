/* layout/HeaderSection.jsx */
/*
import Card from "../components/Card.jsx"
import List from "../components/List.jsx"
*/
import HeaderComponent from "component/HeaderComponent.jsx"

/*
Partición del componente:

- Titulo, sectionNav (pelis, series, favoritos), actionsNav (account, search, notifications).

- reemplazar componentes, diseñar refactor de la arquitectura, componente pensado para modificar con props mas adelante.
*/

function HeaderSection({
  layoutSection = "AnimeTV",
  children
}) {
    return (
        <header>
            <div className="header flex flex-row justify-space-between align-center">
              {children}
            </div>
        </header>
  )
}

export default Header

/*

<Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>

HeaderComponent: <div className="header__left flex flex-row justify-center align-center">
                    <h2 className="header__title">AnimeTV</h2>
                    <nav className="header__nav flex flex-row justify-center align-center">
                        <List>
                            <Button variant="link">Películas</Button>
                            <Button variant="link">Series</Button>
                            <Button variant="link">Favoritos</Button>
                        </List>
                    </nav>
                </div>
                <div className="header__right flex flex-row justify-center align-center">
                    <Button variant="secondary" size="1" layout="square" icon={<Search />}></Button>
                    <Button variant="secondary" size="1" layout="square" icon={<Notifications />}></Button>
                    <Button variant="secondary" size="1" layout="square" icon={<Account />}></Button>
                </div>

*/