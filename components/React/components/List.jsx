// List.jsx

/*
- migrar estilos: content_list, content_item, ranking__list, ranking__item, seasonContent__grid, seasonContent__item, comments-list, comments-card, flex flex-row justify-flex-start.
- hacer generación de elementos segun estado.
*/

function List ({
    layout = "horizontal",
    variant = "default", //
    children
}){
    return (
        <ul className={`list list--layout-${layout} list--variant-${variant}`}>
            <li className={`list__element list__element--variant-${variant}`}>
                {children}
            </li>
        </ul>
    )
}

export default List

// <Button variant="secondary" size="1" layout="square" icon={<Search />}></Button>