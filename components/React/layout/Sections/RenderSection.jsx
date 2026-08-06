//layout/RenderSection.jsx

import HeaderAnimeTV from "components/HeaderAnimeTV.jsx"
import HeroAnimeTV from "components/HeroAnimeTV.jsx"
import ContentAnimeTV from "components/ContentAnimeTV.jsx"
import InfoAnimeTV from "components/InfoAnimeTV.jsx"
import SeasonAnimeTV from "components/SeasonAnimeTV.jsx"
import MediaAnimeTV from "components/MediaAnimeTV.jsx"
import CommentAnimeTV from "components/CommentAnimeTV.jsx"
import FooterAnimeTV from "components/FooterAnimeTV.jsx"

function RenderSection ({
  variant = "Default"
}) {
  switch(variant) {
    case "HeaderAnimeTV":
      return (
        <HeaderAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></HeaderAnimeTV>
      )
    case "HeroAnimeTV":
      return (
        <HeroAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></HeroAnimeTV>
      )
    case "ContentAnimeTV":
      return (
        <ContentAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></ContentAnimeTV>
      )
    case "InfoAnimeTV":
      return (
        <InfoAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></InfoAnimeTV>
      )
    case "SeasonAnimeTV":
      return (
        <SeasonAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></SeasonAnimeTV>
      )
    case "MediaAnimeTV":
      return (
        <MediaAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></MediaAnimeTV>
      )
    case "CommentAnimeTV":
      return (
        <CommentComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></CommentComponent>
      )
    case "FooterAnimeTV":
      return (
        <FooterAnimeTV variant={variant} dataNumber={dataNumber} dataType={dataType}></FooterAnimeTV>
      )
  }
}

export default RenderSection