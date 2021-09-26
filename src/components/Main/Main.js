import './Main.css'

import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import Cart from '../Cart/Cart';

const Main = () => {

    const [programmers, setProgrammers] = useState([])
    const [choose, setChoose] = useState([])
    useEffect(() => {
        fetch("./programmer.json")
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    const handleSelect = (programmer) => {
        const newChoose = [...choose, programmer]
        setChoose(newChoose);
    }
    return (
        <div>

            <div className="row">
                <div className="col-md-9 programmer-container">
                    <div className="row">
                        {
                            programmers.map(programmer => <Programmer
                                handleSelect={handleSelect}
                                key={programmer.key}
                                programmer={programmer}></Programmer>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart choose={choose}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Main;