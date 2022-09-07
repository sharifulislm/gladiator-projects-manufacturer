import React from 'react';
import Banner from '../Benner/Banner';

import BussinessSummary from '../BussinessSummary/BussinessSummary';
import CardBos from '../BussinessSummary/CardBos';

import Contact from '../Contact/Contact';
import Titile from '../Contact/Titile';
import Reveiws from '../Reveiws/Reveiws';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div className=''>
            {/* <Banner></Banner> */}
            <div className=' m-auto lg:ml-6 '>

          
            <Service></Service>
            <BussinessSummary></BussinessSummary>
            <CardBos></CardBos>
            <Reveiws></Reveiws>
            <Titile></Titile>
            <Contact></Contact>
          
            </div>
        </div>
    );
};

export default Home;