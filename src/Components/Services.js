import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state = {
        services : [
            {
                icon : <FaCocktail/> ,
                subtitle: 'free cocktail',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum nulla sapiente.'
            },
            {
                icon :<FaHiking/> ,
                subtitle: 'endless hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum nulla sapiente.'
            },
            {
                icon : <FaShuttleVan/>,
                subtitle: 'free shuttle ride',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum nulla sapiente.'
            },
            {
                icon : <FaBeer/> ,
                subtitle: 'strongest beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum nulla sapiente.'
            },
        ]
        
    }
        
    
    render() {
        return (
            <section className=  'services'>
                <Title title = 'Services'/>
                    <div className = 'services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <div key = {index}>
                                <span> {item.icon} </span>
                                <h6> {item.subtitle} </h6>
                                <p> {item.info} </p>
                            </div>
                        )
                    })}
                    </div>
                
            </section>
        )
    }
}
