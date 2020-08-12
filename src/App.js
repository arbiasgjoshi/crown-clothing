import React from 'react';
import './App.css';

import Homepage from './modules/homepage/homepage.component';
import {Route, Switch, Link} from 'react-router-dom';
const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
)

const AboutPage = () => {
    return(    
        <div>
        <Link to='/products'>Go to Products</Link>
            <h2>About Page</h2>
        </div>
    )
}


const Products = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={() => props.history.goBack()}>Go Back</button>
            <h2>Products Page</h2>
            <Link to={`${props.match.url}/01`}>First Product</Link>
            <Link to={`${props.match.url}/special-offer`}>Special Offer</Link>
            <Link to={`${props.match.url}/13`}>Lucky number 13</Link>
        </div>
    )
}

const ProductDetails = (props) => {
    console.log(props)
    return(    
    <div>
        <h2>Product ID: {props.match.params.productId}</h2>
    </div>
    )
}

function App() {
    return (
        <div className="wrapper">
             <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/products/:productId' component={ProductDetails} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
