import React from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/Home.scss'

import useInitialState from '../hooks/useInitialState'

const Home = ({ myList, trends, originals }) => {
    return (
        <>
            <Search />
            {
                <Categories title="Mi lista">
                    <Carousel has={myList.length} >
                    {
                        myList.length === 0 ? 
                            <h2 className="Home__empty">No posees videos para mostrar</h2> 
                        : 
                            myList.map((list) =>  {
                                    
                                return (
                                    <CarouselItem 
                                        key={list.id} 
                                        {...list} 
                                        isList
                                    />
                                )
                            })
                    }
                        
                    </Carousel>
                </Categories>
            }
            
            {
                <Categories title="Favoritos">
                    <Carousel has={originals.length} >
                    {
                        originals.length === 0 ? 
                            <h2 className="Home__empty">No posees videos para mostrar</h2> 
                        : 
                            originals.map((original) =>  {
                                    
                                return (
                                    <CarouselItem key={original.id} {...original} />
                                )
                            })
                    }
                        
                    </Carousel>
                </Categories>
            }
    
            {
                <Categories title="Mas Usados">
                    <Carousel has={trends.length} >
                    {
                        trends.length === 0 ? 
                            <h2 className="Home__empty">No posees videos para mostrar</h2> 
                        : 
                            trends.map((trend) =>  {
                                    
                                return (
                                    <CarouselItem key={trend.id} {...trend} />
                                )
                            })
                    }
                        
                    </Carousel>
                </Categories>
            }
    
        </>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
}

export default connect(mapStateToProps, null)(Home)
