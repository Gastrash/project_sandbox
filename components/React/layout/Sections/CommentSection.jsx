//layout/CommentSection.jsx

import CommentComponent from "components/CommentComponent.jsx"

function CommentSection ({
  variant = "AnimeTV",
  dataType = {variant},
  dataNumber = "1"
}) {
  return (
    <section id="comments" class="container">
      <div class="comments flex flex-column">
        <CommentComponent variant={variant} dataNumber={dataNumber} dataType={dataType}></CommentComponent>
      </div>
    </section>
  )
}

export default CommentSection