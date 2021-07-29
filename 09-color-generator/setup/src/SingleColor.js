import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log(index)
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  // we can use the function or use library
  const hex = rgbToHex(...rgb)
  // console.log(rgb);
  // console.log(bcg);
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}}>
  <p className="percenr-value">{weight}%</p>
  <p className="color-value"># {hexColor}</p>
  </article>
}

export default SingleColor
