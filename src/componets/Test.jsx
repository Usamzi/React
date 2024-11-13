import React from 'react'

export const Test = ({heading , detail , color , colr}) => {
    console.log("this is heading",heading);
    console.log("this is detail ",detail);
    console.log("this is color",color);
    console.log("this is color",colr);
  return (
    <div>
        <h1 style={{color:color}}>{heading}</h1>
        <p style={{color:colr}}>{detail}</p>
    </div>
  )
}
