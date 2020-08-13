import React from 'react';

import './collection-preview.style.scss';
import CollectionItem from '../collection-items/collection-items.component';

const CollectionPreview = ({title, items}) => (
    <div className='collection-items'>
        <h4 className='title'>{title}</h4>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    

                <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;