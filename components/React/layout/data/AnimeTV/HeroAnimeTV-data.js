// title, description, image, id

const heroAnimeTVData = {
  variant: "AnimeTV",
  dataType: "hero",
  dataNumber: "1",
  items: [
    {
      id: "frieren",
      type: "serie",
      title: "Frieren: Beyond Journey's End",
      originalTitle: "Sousou no Frieren",
      year: 2023,
      episodes: 28,
      genre: ["Aventura", "Fantasia", "Drama"],
      rating: "TV-14",
      duration: "24 min",
      description:
        "Una elfa maga viaja para entender mejor a los humanos despues de terminar la gran aventura que salvo al mundo.",
      image: "/assets/image/frieren-hero.jpg",
      ctaLabel: "Ver serie",
    },
    {
      id: "your-name",
      type: "peli",
      title: "Your Name",
      originalTitle: "Kimi no Na wa",
      year: 2016,
      episodes: 1,
      genre: ["Romance", "Fantasia", "Drama"],
      rating: "PG",
      duration: "1h 46min",
      description:
        "Dos adolescentes conectan de forma misteriosa al intercambiar cuerpos mientras una amenaza cruza sus destinos.",
      image: "/assets/image/your-name-hero.jpg",
      ctaLabel: "Ver pelicula",
    },
  ],
}

export const heroAnimeTVSeries = heroAnimeTVData.items.filter(
  (item) => item.type === "serie"
)

export const heroAnimeTVMovies = heroAnimeTVData.items.filter(
  (item) => item.type === "peli"
)

export default heroAnimeTVData

/*
Ejemplo de uso:

import HeroSection from "../Sections/HeroSection.jsx"
import heroAnimeTVData from "../data/HeroAnimeTV-data.js"

function Page() {
  const selectedItem = heroAnimeTVData.items[0]

  return (
    <HeroSection
      {...heroAnimeTVData}
      dataType={selectedItem}
      dataNumber={selectedItem.id}
    />
  )
}
*/
