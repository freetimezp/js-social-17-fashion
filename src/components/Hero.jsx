import React, { useContext } from 'react';
import './Hero.css';

import { AppContext } from '../App';

function Hero() {
    const { items, setItems } = useContext(AppContext);
    //console.log(items, 'I here');

    return (
        <div>

        </div>
    );
};

export default Hero;
