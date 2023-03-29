import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import '../App.css';

function ItemDetail() { 
    const [item, setItem] = useState({}); 
    const { id } = useParams();

    useEffect(() => { 
        fetchItem(); 
    }, []); 

    const fetchItem = async () => { 
        const fetchItem = await fetch( 
            `https://dummyjson.com/products/${id}` 
        ); 
        const item = await fetchItem.json(); 
        setItem(item); 
    } 



    return ( 
        <div className='container__item'> 
            <h1>{item.title}</h1>
            {item.images ? (
                <img src={item.images} alt={item.title} />
            ) : (
                <h2>Sorry we have problem with image</h2>
            )}
            <p>{item.description}</p>
        </div> 
    ); 
} 

export default ItemDetail;
