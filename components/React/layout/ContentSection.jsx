// layout/ContentSection.jsx

import Card from "../components/Card.jsx"
import List from "../components/List.jsx"

import ContentComponent from "components/ContentComponent"

// Refactor de styles, componente pensado para modificar con props mas adelante

function ContentSection ({
  layoutContent="default",
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

ContentSection: <header className="content__header container">
                    <h3>Novedades para ti</h3>
                </header>
                <main class="content__viewport">
                    <List layout="grid" variant="secondary">
                        <Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>
                    </List>
                </main>

*/