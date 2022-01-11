import React from 'react'
import classes from './Title.module.scss';
const Title = (prop) => {
  return (
    <h3 {...prop} className={classes.title}>{prop.children}</h3>
  )
}

export default Title