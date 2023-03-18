import { useEffect, useState } from 'react';

const useProduct = serviceId => {
    const[service,setService] =useState({})
    const [isLoading,setLoading] = useState(true)
    // console.log(service);
    
    
    const fethItems = () => {
        const url = ` https://gladiator-servser.onrender.com/purchase/${serviceId}`;
        fetch(url)
    
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
         setService(data)
        
        })
    }    
    useEffect(() => {
        fethItems()
    
    } ,[serviceId])
    return [service,isLoading];
};

export default useProduct;