import React from 'react'



import { NavLink } from "react-router-dom"; 


export const Card = (props) => {
    return (
        <div className="col-md-4 my-4">
                <div className="card h-100 " >
                    <img src={props.img} id= 'imgc'className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="/" className="btn btn-primary justify-content-center">Let's Explore</NavLink>
                    </div>
                </div>
            </div>
    )
}
