//layout/components/HeaderAnimeTV.jsx

import List from "../../components/List.jsx"
import Button from "../../components/Button.jsx"

function HeaderAnimeTV ({
  //title
}) {
    return (
        <>
        <div className="header__left flex flex-row justify-center align-center">
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
    <nav className="header__nav flex flex-row justify-center align-center">
        <List>
            <Button variant="secondary" size="1" layout="square" icon={<Search />}></Button>
            <Button variant="secondary" size="1" layout="square" icon={<Notifications />}></Button>
            <Button variant="secondary" size="1" layout="square" icon={<Account />}></Button>
        </List>
    </nav>
    </div>
        </>
    )
}

export default HeaderAnimeTV