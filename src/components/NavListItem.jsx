/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavListItem.css';

function NavListItem({ nav }) {
    return (
        <li>
            <a href="#">
                {nav.name}
            </a>
        </li>

    );
};

export default NavListItem;
