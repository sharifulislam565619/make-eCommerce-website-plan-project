import React from 'react';
import './Selected.css'
const Selected = (props) => {
    const { name, img } = props.programmer
    return (
        <div className="d-flex align-items-center mx-2 single-programmer">
            <img src={img} alt="" />
            <small className="ms-1">{name}</small>
            <i className="fas fa-window-close"></i>
        </div>
    );
};

export default Selected;