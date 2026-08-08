//layout/components/ContentAnimeTV.jsx

import List from "../../components/List.jsx"
import Card from "../../components/Card.jsx"

/*import data from "rutaxd"*/

function ContentAnimeTV ({
    title = "Novedades para ti",
    data = []
}) {
    return (
        <>
            <header className="content__header container">
                <h3>{title}</h3>
            </header>
            <main className="content__viewport">
                <List
                    layout="grid"
                    variant="secondary"
                    data={data}
                    renderItem={(item) => (
                        <Card
                            variant="default"
                            size="2"
                            layout="vertical"
                            data={item}
                        />
                    )}
                />
            </main>
        </>
    )
}

export default ContentAnimeTV
