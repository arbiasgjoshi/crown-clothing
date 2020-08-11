import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.style.scss';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'womens wear',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'Mens wear',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large'
                },
            ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, title, imageUrl, size}) => (
                    <MenuItem key={id} title={title} url={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}



export default Directory;