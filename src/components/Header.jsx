/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react';
import './Header.css';

import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';

function Header() {
    const { collection, bag } = useContext(AppContext);
    const [navList, setNavList] = useState(navListData);

    return (
        <header>
            <a href="/" className="logo">
                Fashion
            </a>

            <ul className="nav">
                {navList.map((nav) => (
                    <NavListItem key={nav._id} nav={nav} />
                ))}
            </ul>

            <div className="userItems">
                <Link to="/collection" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">
                        {collection.length}
                    </span>
                </Link>
                <Link to="/bag" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">
                        {bag.length}
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
