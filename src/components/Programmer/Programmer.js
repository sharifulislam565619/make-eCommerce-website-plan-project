import './Programmer.css'

import React from 'react';

const Programmer = (props) => {

    const { name, country, occupation, age, salary, img } = props.programmer
    return (
        <div className="col-md-4 ">
            <div className="cart mb-3 person-cart">
                <div>
                    <div style={{ textAlign: 'center' }}>
                        <img src={img} alt="..." />
                    </div>
                    <div className="details">
                        <h4>Name: {name}</h4>
                        <p><small><b>Country</b>: {country}</small></p>
                        <p><small><b>Occupation</b>: {occupation}</small></p>
                        <p><small><b>Age</b>: {age}</small></p>
                        <p><small><b>Salary</b>: ${salary}</small></p>
                    </div>

                    <button
                        onClick={() => props.handleSelect(props.programmer)}
                        className="btn btn-primary"><i className="fas fa-shopping-cart"></i> Add to cart

                    </button>
                    <div className="social-icon">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-instagram-square"></i>

                    </div>

                </div>
            </div>
        </div>



    )
};

export default Programmer;