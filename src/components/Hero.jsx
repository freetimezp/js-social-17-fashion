/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import './Hero.css';

import { AppContext } from '../App';
import HeroSwiper from './HeroSwiper';

function Hero() {
    const { items, setItems } = useContext(AppContext);
    //console.log(items, 'I here');

    const handleSlideChange = (id) => {
        //console.log(id);
        const newItems = items.map((item) => {
            item.active = false;
            if (item._id === id) {
                item.active = true;
            }
            return item;
        });
        setItems(newItems);
    };

    return (
        <div className='banner'>
            {items && items.length > 0 && items.map((item) => (
                <div className="item" key={item._id}>
                    <img src={item.bgImg} alt="bg" className={`bgImg ${item.active ? 'active' : undefined}`} />
                    <div className={`content ${item.active ? 'active' : undefined}`}>
                        <p>{item.subtitle}</p>
                        <h1>{item.title}</h1>
                        <a href="#" className="mainButton">
                            Shop Now <i className="bi bi-cart2"></i>
                        </a>
                        <a href="#" className="markButton">
                            <i className="bi bi-bookmark-plus-fill"></i>
                        </a>
                    </div>
                    <div className="subtitle">
                        <span className="slogan">Spring & Summer Collections</span>
                        <span className={`number ${item.active ? 'active' : undefined}`}>
                            0{item._id}
                        </span>
                    </div>
                </div>
            ))}

            {items && items.length > 0 && (
                <HeroSwiper slides={items} slideChange={handleSlideChange} />
            )}
        </div>
    );
};

export default Hero;
