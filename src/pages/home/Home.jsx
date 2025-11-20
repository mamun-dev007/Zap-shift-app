import React from 'react';
import Banner from '../banner/Banner';
import HowWork from '../how-work/HowWork';
import Service from '../services/Service';
import Brand from '../brands/Brand';
import Reviews from '../reviews/Reviews';

const reviewsPromise = fetch('/reviews.json')
    .then((res)=> res.json())
    


const Home = () => {
    
    return (
        <div>
           <Banner></Banner>
           <HowWork></HowWork>
           <Service></Service>
           <Brand></Brand>
           <Reviews reviewsPromise = { reviewsPromise}></Reviews>

        </div>
    );
};

export default Home;