/* layout/HeroSection.jsx */

import HeroComponent from "../layout/components/HeroComponent.jsx"
/*import defaultImage*/
/*

- dataSection maneja información dentro del componente.

*/

function HeroSection({
    layoutSection = "AnimeTV", //AnimeTV
    dataSection = "1", //1
    bgImage = defaultImage,
    children
}) {
    defaultImage = "../assets/image/img-01.jpeg"
    return (
        <section id="hero">
            <div className="hero flex flex-column">
                <div className="hero__overlay flex flex-column justify-flex-end">
                  <HeroComponent layout={layoutSection} data={dataSection}></HeroComponent>
                </div>
            </div>
        </section>
  )
}

export default HeroSection

/*

*/