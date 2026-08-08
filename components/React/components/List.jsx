// List.jsx

/*
<List layout="grid" variant="secondary">
          {data.map((item) => (
          ))}
        </List>
*/

function List ({
    layout = "horizontal",
    variant = "default", //
    data = [],
    renderItem
}){
    return (
        <ul className={`list list--layout-${layout} list--variant-${variant}`}>
            {data.map((item) => (
                <li key={item.id} className={`list__element   list__element--variant-${variant}`}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    )
}

export default List

// <Button variant="secondary" size="1" layout="square" icon={<Search />}></Button>