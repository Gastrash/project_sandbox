// List.jsx

/*

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