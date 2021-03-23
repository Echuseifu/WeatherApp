import React from 'react';
import Timet from '../CSS/Timet.css';

function Time() {
  let newDate = new Date()
  let date = newDate.getDate()
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  console.log(year) 
  return (
    <span style={{float:'right', paddingRight: '5px'}}>
    {/* <div className="Timet"> */}
      <p>{month}-{date}-{year}</p>
      </span>
   
  )
}
export default Time