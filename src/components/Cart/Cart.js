import './Cart.css'

import React from 'react';
import Selected from '../Selected/Selected';

const Cart = (props) => {

    const programmers = props.choose;
    const cost = programmers.reduce((prev, programmer) => prev + programmer.salary, 0)



    return (
        <div className="add-cart">
            <h5>Person Added: {props.choose.length}</h5>
            <h6>Total Cost: ${cost}</h6>

            <div>

                {
                    programmers.map(programmer => <Selected
                        key={programmer.key}
                        programmer={programmer}></Selected>)
                }

            </div>
            <button className="btn btn-success">Buy now</button>
        </div>
    );
};

export default Cart;