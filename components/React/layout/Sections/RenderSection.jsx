//layout/RenderSection.jsx

import HeaderAnimeTV from "components/HeaderAnimeTV.jsx"
import HeroAnimeTV from "components/HeroAnimeTV.jsx"
import ContentAnimeTV from "components/ContentAnimeTV.jsx"
import InfoAnimeTV from "components/InfoAnimeTV.jsx"
import SeasonAnimeTV from "components/SeasonAnimeTV.jsx"
import MediaAnimeTV from "components/MediaAnimeTV.jsx"
import CommentAnimeTV from "components/CommentAnimeTV.jsx"
import FooterAnimeTV from "components/FooterAnimeTV.jsx"

/*

const sections = {
    header: HeaderAnimeTV,
    hero: HeroAnimeTV,
    content: ContentAnimeTV,
    infoContent: InfoAnimeTV,
    seasonContent: SeasonAnimeTV,
    mediaPlayer: MediaAnimeTV,
    comments: CommentAnimeTV,
    footer: FooterAnimeTV,
}

const Component = sections[variant]

return Component ? <Component dataNumber={dataNumber} /> : null

*/

function RenderSection ({
  variant = "hero",
  dataNumber = "1"
}) {
  switch(variant) {
    case "header":
      return (
        <HeaderAnimeTV dataNumber={dataNumber}></HeaderAnimeTV>
      )
    case "hero":
      return (
        <HeroAnimeTV dataNumber={dataNumber}></HeroAnimeTV>
      )
    case "content":
      return (
        <ContentAnimeTV dataNumber={dataNumber}></ContentAnimeTV>
      )
    case "infoContent":
      return (
        <InfoAnimeTV dataNumber={dataNumber}></InfoAnimeTV>
      )
    case "seasonContent":
      return (
        <SeasonAnimeTV dataNumber={dataNumber}></SeasonAnimeTV>
      )
    case "mediaPlayer":
      return (
        <MediaAnimeTV dataNumber={dataNumber}></MediaAnimeTV>
      )
    case "comments":
      return (
        <CommentAnimeTV dataNumber={dataNumber}></CommentAnimeTV>
      )
    case "footer":
      return (
        <FooterAnimeTV dataNumber={dataNumber}></FooterAnimeTV>
      )
  }
}

export default RenderSection