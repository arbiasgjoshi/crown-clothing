/* Used as starting data for Directory */

const SECTIONS_DATA = [
    {
        title: 'hats',
        imageUrl: require('./../../assets/images/hats.png'), // local file in public/images/
        id: 1,
        linkUrl: 'shop/hats'

    },
    {
        title: 'jackets',
        imageUrl: require('./../../assets/images/jackets.png'), // local file in public/images/
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: require('./../../assets/images/sneakers.png'), // local file in public/images/
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: require('./../../assets/images/womens.png'), // local file in public/images/
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: require('./../../assets/images/men.png'), // local file in public/images/
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
];

export default SECTIONS_DATA;