/* layout/Section.jsx */

import RenderSection from "RenderSection.jsx"

function Section({
    variant = "hero",
    container = "",
    dataNumber = "1"
}) {
    return (
        <section id={variant} className={`${container}`}>
            <div className={`${variant}`}>
              <RenderSection variant={variant} dataNumber={dataNumber}></RenderSection>
            </div>
        </section>
  )
}

export default Section