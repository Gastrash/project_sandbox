//layout/components/FooterComponent.jsx

/*

*/

function FooterComponent ({
    layout, //colocar switch
    data
}) {
    switch(layout){
        case "AnimeTV":
            return (
                <small>&copy; 2026 AnimeTV. Todos los derechos reservados.</small>
            )
        case "2":
            return (<></>)
    }
}

export default FooterComponent