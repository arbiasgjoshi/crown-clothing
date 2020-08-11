import React from 'react';

import './menu-item.style.scss'

const MenuItem = ({title, url, size}) => (
    <div className={`${size} menu-item`}>
        <div className='menu-content'>
            <h2 className='title'>{title}</h2>
            <span className='subtitle'>Shop Now</span>
        </div>
        <div className='background-image' style={{backgroundImage: `url(${url})`}}></div>
    </div>
)

export default MenuItem;