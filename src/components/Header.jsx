/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Header.css';

import navListData from '../data/navListData';
import NavListItem from './NavListItem';

function Header() {
    const [navList, setNavList] = useState(navListData);

    return (
        <header>
            <a href="#" className="logo">
                Fashion
            </a>

            <ul className="nav">
                {navList.map((nav) => (
                    <NavListItem key={nav._id} nav={nav} />
                ))}
            </ul>

            <div className="userItems">
                <a href="#" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">5</span>
                </a>
                <a href="#" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">2</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
