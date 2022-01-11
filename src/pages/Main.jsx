import React from 'react'
import Aside from '../components/Aside'
import Content from '../components/Content'
import '../style/Main.scss'
const Main = () => {
  return (
    <div className="main__page">
      <div className="container">
        <div className="main__inner">
          <Aside></Aside>
          <Content></Content>
        </div>
      </div>
    </div>
  )
}

export default Main