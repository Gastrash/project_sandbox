//layout/FooterSection.jsx

import FooterComponent from "components/FooterComponent.jsx"

/*

*/

function FooterSection ({
  layoutSection = "default",
  dataSection = "1",
  children
}) {
  return (
    <footer>
      <div class="footer flex">
        <FooterComponent data={dataSection} layout={layoutSection}></FooterComponent>
      </div>
    </footer>
  )
}

export default FooterSection

/*

FooterComponent: <small>&copy; 2026 AnimeTV. Todos los derechos reservados.</small>

*/