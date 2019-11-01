import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'

import '../assets/styles/components/CarouselItem.scss'

import PlayIcon from '../assets/static/play-icon.png'
import PlusIcon from '../assets/static/plus-icon.png'
import TrashIcon from '../assets/static/trash.png'

const CarouselItem = (props) => {

  const { id, cover, title, year, contentRating, duration, isList } = props

  const handlerSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration
    })
  }

  const handlerDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
      <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon" /> 

            {
              isList ?
                <img 
                  onClick={() => handlerDeleteFavorite(id)} 
                  className="carousel-item__details--img" 
                  src={TrashIcon} 
                  alt="Trash Icon" 
                /> :
                <img 
                  onClick={handlerSetFavorite} 
                  className="carousel-item__details--img" 
                  src={PlusIcon} 
                  alt="Plus Icon" 
                /> 
            }
            
            
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{year} {contentRating} {duration}minitos</p>
        </div>
      </div>
  )
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)