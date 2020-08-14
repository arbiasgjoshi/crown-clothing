import React from 'react';

import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return(
        <div className={`${size ? size : ''} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='menu-content'>
                <h2 className='title'>{title}</h2>
                <span className='subtitle'>Shop Now</span>
            </div>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
        </div>
    )
}
export default withRouter(MenuItem);