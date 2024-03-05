import './load-more.css';
import { useState, useEffect } from 'react';

export default function LoadMoreData({limit = '20'}){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [disableBtn, setDisableBtn] = useState(false);

    useEffect(()=>{
        fetchProducts();
    },[count]);

    useEffect(()=>{

        if(products && products.length === 100){
            setDisableBtn(true);
        }else{
            setDisableBtn(false);
        }

    },[products]);

    async function fetchProducts(){

        try{

            setLoading(l => l = true);

            const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`);
            // ^Si la cuenta es 0 devuelve 0, sino, devuelve el número actual saltando los productos previos (para que así no se repitan).

            const data = await res.json();

            if(data && data.products && data.products.length){

                setProducts((prevData) => [...prevData, ...data.products]);//! <---No funciona bien...siempre repite el primer lote
                setLoading(l => l = false);

            };

        }catch(error){
            console.log(error);
            setErrorMsg(e => e = error.message);
            setLoading(l => l = false);
        };

    };

    if(loading){
        return <div><p>Loading Data..Please wait ⌛</p></div>
    }

    if(errorMsg !== null){
        return <div><p>An Error Occurred ! ❌ {errorMsg}</p></div>
    }



    return(
        <div className="load-more-container">

            <h2>Load More Data</h2>

            <div className='product-container'>
                {
                    products && products.length
                    ? products.map(item => (
                        <div key={item.id} className='product'>
                            <img src={item.thumbnail} alt={item.description} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                    ))
                    : null
                }
            </div>

            <div className='btn-container'>

                <button disabled={disableBtn} onClick={()=>setCount(c => c = count + 1)}>Load More Products</button>

                {disableBtn ? <p>No more products to show</p> : null}

            </div>

        </div>
    );
};