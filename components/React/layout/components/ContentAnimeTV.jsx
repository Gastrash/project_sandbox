//layout/components/ContentAnimeTV.jsx

import List from "../../components/List.jsx"
import Card from "../../components/Card.jsx"

function ContentAnimeTV ({
    dataNumber
}) {
    return (
        <>
            <header className="content__header container">
                <h3>Novedades para ti</h3>
            </header>
            <main className="content__viewport">
                <List layout="grid" variant="secondary">
                    <Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg"></Card>
                </List>
            </main>
        </>
    )
}

export default ContentAnimeTV