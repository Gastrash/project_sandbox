// icons/Arrow.jsx

function Arrow({
    layout = "default",
    rotation = "0"
    /*
    left = 0,
    top = 90,
    right = 180,
    bottom = 270 
    */
}) {
    return (
        <svg
            className={`icon icon--layout-${layout} icon--rotate-${rotation}`}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"
            />
        </svg>
    )
}

export default Arrow

/*
.icon {
    transition: var(--transition-default);
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
}

.icon--rotate-0{
    transform: rotate(0deg);
}

.icon--rotate-90{
    transform: rotate(90deg);
}

.icon--rotate-180{
    transform: rotate(180deg);
}

.icon--rotate-270{
    transform: rotate(270deg);
}

<Arrow rotation="90"></Arrow>

*/