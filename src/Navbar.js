import React from 'react'

function Navbar(props) {
  return (
 <>
 <nav>
   {props.children}
   <ul>
    <li><a href="">{props.sname}</a></li>
    <li><a href="">{props.sabout}</a></li>
    <li><a href="">{props.scontact}</a></li>
    <li><a href="">{props.sdetail}</a></li>
   </ul>

 </nav>
 </>
  )
}

export default Navbar