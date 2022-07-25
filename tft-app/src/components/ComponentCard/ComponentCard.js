import React from 'react'
import './ComponentCard.css'
const ComponentCard = ({component}) => {
  return (
    <div className="item-card">
          <img className="item-img" src={`https://rerollcdn.com/items/${component.replaceAll(
                    " ",
                    ""
                  )}.png`}></img>
          <div className="item-name">{component}</div>
        </div>
  )
}

export default ComponentCard