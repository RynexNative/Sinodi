import React from 'react'
import './UIstyle/Notecard.css'
import cover from '/images2.jpeg'


function Notecard() {
  return (
    <div className='note-body'>
      <img src={cover} alt="Note Image" />
      <div className='card-contant'>
        <h5>Title</h5>
        <p>more info about the notes like two paragraph that discrabe the notes Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad possimus officia sint, accusantium neque magnam consequatur nulla iste? Adipisci natus quas aliquam porro. Temporibus molestiae fugiat quasi quas corporis non?</p>
        <h6>class: form 6</h6>
      </div>
    </div>
  )
}

export default Notecard