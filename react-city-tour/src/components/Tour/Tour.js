import React, { Component } from 'react';
import  './Tour.css';

export default class Tour extends Component {
    render() {
        const {img,city,name,info}=this.props.tour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img width="200px"
                     src={img} alt="tour  not found"/>
                     <span className="close-btn">
                         <i className="fas fa-window-close" />
                     </span>   

                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5> {info} <span><i className="fas fa-caret-down" />
                    </span>
                    </h5>
                    <p>its all details about the tour city</p>
                </div>
            </article>
        )
    }
}
