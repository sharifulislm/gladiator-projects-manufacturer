import React, { useEffect, useState } from 'react';
// import Loading from '../../Share/Loading/Loading';
import ShowReveiw from './ShowReveiw';

const Reveiws = () => {
    const [ reveiw , setReveiw] = useState([]);
    // console.log(service);
    
    useEffect(() => {
     fetch(' https://gladiator-servser.onrender.com/reviews')
     .then(res=> res.json())
     .then(data =>  setReveiw(data)) 
    } ,[])


    return (
        <div>
                <div><h1 className='text-5xl  m-auto lg:ml-10 lg:mt-5 text-center'>Reveiw</h1>
            <div className='m-auto w-64 mt-3 mb-2 h-1 bg-primary'></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
            {
                reveiw.slice(0, 3).map(reveiws=><ShowReveiw key={reveiws._id} reveiws={reveiws}></ShowReveiw>)
            }
            </div>
        </div>
    );
 
};

export default Reveiws;