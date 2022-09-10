import  { useEffect, useState } from 'react';

const useProduct = serviceId => {
    const[service,setService] =useState({})
    console.log(serviceId);
    useEffect(() => {
        const url = `https://manufacturer-wevpage.herokuapp.com/purchase/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
 
        .then(data => setService(data));
    },[serviceId])
    return [service];
};

export default useProduct;