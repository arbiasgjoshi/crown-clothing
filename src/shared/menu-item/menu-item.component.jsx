import React from 'react';

import { withRouter } from 'react-router-dom';

import './menu-item.style.scss'
console.log(withRouter);

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='menu-content'>
            <h2 className='title'>{title}</h2>
            <span className='subtitle'>Shop Now</span>
        </div>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
    </div>
)

export default withRouter(MenuItem);