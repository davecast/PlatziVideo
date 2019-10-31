import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => {
    const [videos, setVideos ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])
    console.log(videos)

    const { mylist, originals, trends } = videos

    return (
        <div className="App">
            <Header />
            <Search />
            {
                mylist && <Categories title="Mi lista">
                    <Carousel has={mylist} >
                    {
                        mylist.length === 0 ? 
                            <h2 className="App__empty">No posees videos para mostrar</h2> 
                        : 
                            mylist.map((list) =>  {
                                    
                                return (
                                    <CarouselItem key={list.id} {...list} />
                                )
                            })
                    }
                        
                    </Carousel>
                </Categories>
            }
            
            {
                originals && <Categories title="Favoritos">
                    <Carousel has={originals} >
                    {
                        originals.length === 0 ? 
                            <h2 className="App__empty">No posees videos para mostrar</h2> 
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
                trends && <Categories title="Mas Usados">
                    <Carousel has={trends} >
                    {
                        trends.length === 0 ? 
                            <h2 className="App__empty">No posees videos para mostrar</h2> 
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
    
            <Footer />
        </div>
    )
}

export default App