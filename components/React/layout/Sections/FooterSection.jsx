//layout/FooterSection.jsx

import FooterComponent from "components/FooterComponent.jsx"

/*

*/

function FooterSection ({
  variant = "AnimeTV",
  dataType = {variant},
  dataNumber = "1"
}) {
  return (
    <footer>
      <div class="footer flex">
        <FooterComponent variant={variant} dataType={dataType} dataNumber={dataNumber}></FooterComponent>
      </div>
    </footer>
  )
}

export default FooterSection

/*

FooterComponent: <small>&copy; 2026 AnimeTV. Todos los derechos reservados.</small>

*/