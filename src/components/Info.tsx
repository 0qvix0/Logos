import React from 'react'

import onion from '../assets/img/onion.svg'
import flash from '../assets/img/flash.svg'
import chef from '../assets/img/chef.svg'

const Info = () => {
  return (
    <div className='info'>
      <div className="info__inner">
        <div className="info__inner-main">
          <h1 className="info__inner-main-title">НАШЕ КАФЕ</h1>
          <p className="info__inner-main-text">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
          <p className="info__inner-main-button">ПОСМОТРЕТЬ МЕНЮ</p>
        </div>
        <div className="info__inner-links">
          <div className="info__inner-links-button">
            <img src={onion} alt="onion" className="info__inner-links-button-img" />
            <p className="info__inner-links-button-text">Свежайшие продукты</p>
          </div>
          <div className="info__inner-links-button">
            <img src={flash} alt="flash" className="info__inner-links-button-img" />
            <p className="info__inner-links-button-text">Быстрая доставка</p>
          </div>
          <div className="info__inner-links-button">
            <img src={chef} alt="chef" className="info__inner-links-button-img" />
            <p className="info__inner-links-button-text">Лучшие повара</p>
          </div>
          <div className="info__inner-links-button">
            <img src={onion} alt="onion" className="info__inner-links-button-img" />
            <p className="info__inner-links-button-text">Свежайшие продукты</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
