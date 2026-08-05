/* layout/Section.jsx */

function Section({
    type = "hero",
    container = "",
    children
}) {
    return (
        <section id={type} className={`${container}`}>
            <div className={`${type}`}>
                {children}
            </div>
        </section>
  )
}

export default Section