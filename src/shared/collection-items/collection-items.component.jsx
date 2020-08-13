import React from 'react';

import './collection-items.component.scss';

const Collectionitem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div
            style={{backgroundImage: `url(${imageUrl})`}} 
            className='image-wrap' />
        <div className='collection-details'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)

export default Collectionitem;