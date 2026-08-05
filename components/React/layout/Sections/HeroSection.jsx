/* layout/HeroSection.jsx */

import HeroAnimeTV from "./components/HeroAnimeTV.jsx"
/*import defaultImage*/
/*

- dataSection maneja información dentro del componente.

*/

function HeroSection({
    variant = "AnimeTV",
    dataType = {variant},
    dataNumber = "1",
}) {
    //defaultImage = "../assets/image/img-01.jpeg"
    return (
        <section id="hero">
            <div className="hero flex flex-column">
                <div className="hero__overlay flex flex-column justify-flex-end">
                  <HeroComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></HeroComponent>
                </div>
            </div>
        </section>
  )
}

export default HeroSection

/*

*/