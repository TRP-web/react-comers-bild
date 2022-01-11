import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Title from './UI/Title/Title'
import '../style/ActionBanner.scss'

const ActionBanner = () => {
  const [action, setAction] = useState([])
  const getAciton = () => {
    axios.get('https://trp-web.github.io/React-comers/json/action/action.json')
    .then(res => {
      setAction(res.data)
    })
  }
  useEffect(() => {
    getAciton()
  }, [])
  return (
    <>
      <Title>Action</Title>
      <div className="action__inner">
        {
          action.map(banner => {
            return (
              <div className="action-banner" key={banner.id}>
                <img src={banner.img} alt="banner" />
                <h4 className="action-banner__title">{banner.title}</h4>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ActionBanner