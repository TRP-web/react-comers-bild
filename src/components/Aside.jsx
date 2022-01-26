import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/Aside.scss"
const Aside = () => {
  const [catigories, setCatigories] = useState([])
  const getCatigories = async () => {
    axios.get('https://trp-web.github.io/React-comers/json/catigories/catigories.json')
      .then(res => {
        setCatigories(res.data)
      })
  }
  useEffect(() => {
    getCatigories()
  }, [])
  return (
    <aside className="aside">
      <div className="catigories">
        {
          catigories.map((catigorie) => {
            return (
              <Link to="/product" className='aside__link'>
                <div className="catigories__inner" key={catigorie.id}>
                  <img src={catigorie.icon} alt="" width="30" className="catigories__img" />
                  <div className="catigories__name">{catigorie.catigories}</div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </aside>
  )
}

export default Aside