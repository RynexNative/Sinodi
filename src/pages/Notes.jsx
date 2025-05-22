import Notecard from "../component/ui/Notecard"

import '../styles/layoutstyle/Notes.css'



function Notes() {

  return (
    <div className="Note-container">
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veritatis suscipit. Dicta voluptate maiores neque inventore, error totam nemo nam cum molestias excepturi fugiat quam, minus animi eligendi! Velit, esse.
      Eius placeat dolor accusamus nihil vitae deleniti corrupti libero natus? Optio fuga accusamus alias minus quasi tenetur libero commodi tempore placeat voluptatem? Eum quae velit doloribus quidem aliquam sint nam!</h4>

      <h1>hapa ndipo heading inakaa</h1>

      <input type="search" name="" id="" placeholder="search"/>

      <div className="card-container">
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
        <Notecard/>
      </div>
    </div>
  )
}

export default Notes

