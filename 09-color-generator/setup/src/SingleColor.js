import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  console.log(rgb);
  console.log(bcg);
  return <article className={`color`} style={{backgroundColor: `rgb(${bcg})`}}>
  <p className="percenr-value">{weight}%</p>
  <p className="color-value">{hex}</p>
  </article>
}

export default SingleColor
