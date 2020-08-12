import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.style.scss';
import SECTIONS_DATA from '../../sections.data';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))}
            </div>
        )
    }
}



export default Directory;