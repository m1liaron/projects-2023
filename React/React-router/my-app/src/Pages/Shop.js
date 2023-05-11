import React, { useState, useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 



function Shop() {
    useEffect(() => {
        fetchItems()
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://dummyjson.com/products'); 
        
        const items = await data.json();
        console.log(items.products);
        setItems(items.products);
    }
    
  return (
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Shop.svg" alt="" />
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}`}>{item.title}</Link>
                </h1>
            ))}
    </div>
  );
}


export default Shop;
