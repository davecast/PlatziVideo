import React from 'react'
import '../assets/styles/components/Carousel.scss'

const Carousel = ({ children, has }) => (
    <section className={`carousel ${has && has.length != 0 ? 'carousel--scroll' : '' }`}>
        <div className="carousel__container">
            { children }
        </div>
    </section>
)

export default Carousel
