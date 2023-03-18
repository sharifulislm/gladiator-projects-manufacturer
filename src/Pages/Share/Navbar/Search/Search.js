import React, { useEffect, useState } from 'react';
import ShowServices from '../../../Home/Service/ShowServices';
import Loading from '../../Loading/Loading';

const Search = () => {
    const [ service , setService] = useState([]);
    const [Filterdata , setFilterdata] = useState([]);
    const [isLoading,setLoading] = useState(true)
    const [quary,setQuery] = useState('');
    
    
    const fethItems = () => {
        fetch(" https://gladiator-servser.onrender.com/service")
        // https://gladiator-servser.onrender.com/
    
        .then((res) => res.json())
        .then((data) => {
            setLoading(false);
         setService(data);
         setFilterdata(data);
        
        })
    }
    
    useEffect(() => {
        fethItems()
    
    } ,[])
    
    if(isLoading){
        return  <Loading></Loading>
    }
    
    const handlesearch = (event)=> {
        const getSearch = event.target.value;
  

      if(getSearch.length > 0) {
        const searchData = service.filter( (item) => item.name.toLowerCase().includes(getSearch)) 
        setService(searchData);
      } else{
        setService(Filterdata);
      }
      setQuery(getSearch);
    }

    return (
        <div className='mt-24 mb-24 container p-2 mx-auto '>
  <div className=' mb-6 m-auto '>
  <input className='m-auto ' type="text" value={quary} onChange={(e)=> handlesearch(e)} placeholder="Search Item" class="input input-bordered w-80" />
  </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 '>
            {
                service.map(services=> <ShowServices key={services._id} services={services}></ShowServices>)
            }

        </div>
    </div>
    );
};

export default Search;