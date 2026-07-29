/* Icon.jsx */

/*
function Icon({
  children
}) {
  return (
    children
  )
}

export default Icon

import Arrow from "./Arrow"
import Search from "./Search"
import Menu from "./Menu"

const icons = {
    arrow: Arrow,
    search: Search,
    menu: Menu
}

function Icon({
    name,
    ...props
}) {
    const SelectedIcon = icons[name]

    if (!SelectedIcon) {
        return null
    }

    return (
        <SelectedIcon
            {...props}
        />
    )
}

export default Icon

/* Tu componente Icon podría tener sentido más adelante si querés una API única:
<Icon
    name="arrow"
    rotation="90"
/>

<Icon
    name="search"
/>

<Icon
    name="menu"
/>

<Button
    variant="primary"
    size="2"
    iconRight={
        <Arrow rotation="180" />
    }
>
    Continuar
</Button>

<Card variant="default" size="1" layout="vertical" backgroundImage="src/assets/image/img-01.jpeg">
    children
</Card>

*/