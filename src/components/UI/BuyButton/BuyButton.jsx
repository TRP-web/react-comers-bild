import React from 'react'
import classes from './BuyButton.module.scss'
const ButtonBuy = (prop) => {
  return (
    <button className={classes.button} {...prop}>{prop.children}</button>
  )
}

export default ButtonBuy