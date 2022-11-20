import React, { useEffect, useState } from 'react';
import Loading from '../../Share/Loading/Loading';
import ShowServices from './ShowServices';


const Service = () => {
    const [ service , setService] = useState([]);
    const [isLoading,setLoading] = useState(true)
    
    
    
    const fethItems = () => {
        fetch("https://rocky-thicket-49136.herokuapp.com/service")
    
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
         setService(data)
        
        })
    }
    
    useEffect(() => {
        fethItems()
    
    } ,[])
    
    if(isLoading){
        return  <Loading></Loading>
    }
    
    


    return (
      
        <div className='mt-24 mb-24 container p-2 mx-auto '>
            <div><h1 className='text-5xl  m-auto text-center'>Store Parts</h1>
            <div className='m-auto w-64 mt-3 mb-2 h-1 bg-primary'></div>
            <p className='text-center mb-10 '>Through our experienced operations team we can handle various kind of supply chain operations and services</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 '>
                {
                    service.slice(0,6 ).map(services=> <ShowServices key={services._id} services={services}></ShowServices>)
                }

            </div>
        </div>
    );
};

export default Service;