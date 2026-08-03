// layout/ContentSection.jsx

import ContentComponent from "components/ContentComponent"

// Refactor de styles, componente pensado para modificar con props mas adelante

function ContentSection ({
  layoutContent="default", //default, ranking, grid
  children
}){
    return (
        <section className="container-secondary">
            <div className="content flex flex-column">
              {children}
            </div>
        </section>
    )
}

export default ContentSection

/*

ContentComponent: 
//import: Card, List.
<header className="content__header container">
    <h3>Novedades para ti</h3>
</header>
<main className="content__viewport">
    <List layout="grid" variant="secondary">
        <Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>
    </List>
</main>

*/