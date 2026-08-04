//layout/components/ContentComponent.jsx (exclusivo de AnimeTV)

import List from "../../components/List.jsx"
import Card from "../../components/Card.jsx"

function ContentComponent ({
    layout = "default",
    data = "1"
}) {
    switch(layout) {
        case "default":
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
        case "2":
            return (<></>)
    }
}

export default ContentComponent