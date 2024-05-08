import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollTopBottom(){

    const {data, loading, error} = useFetch('https://dummyjson.com/products?limit=100', {});

    const bottmonRef = useRef(null);
    const topRef = useRef(null);

    function handleScrollTop(){

        //* This one takes you to the top of the whole page:
        // window.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth'
        // });

        //* This one takes you to an specific place of the page:
        topRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };

    function handleScrollBottom(){

        //* To scroll to bottom you always have to specify a place of the page (bottom: 0 won't work)
        bottmonRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };

    if(loading){

        return <p>Pending...Please, wait</p>
    }

    if(error){

        return <p>Error fetching the data...Please try again</p>
    }

    return <div style={{textAlign: "center", display: "flex", flexDirection: "column", fontFamily: "sans-serif"}}>

        <h1
        style={{margin: '50px 0'}}
        ref={topRef}
        >
            Scroll to top and bottom feature
        </h1>

        <button
        style={{marginBottom: '30px', padding:'10px 0', cursor: 'pointer'}}
        onClick={handleScrollBottom}
        >
            Scroll to bottom
        </button>

        {
            data && data.products && data.products.length
            ? <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                {
                    data.products.map( (product, index) => ( <li key={index}>{product.title}</li> ) )
                }
            </ul>
            : null
        }

        <div ref={bottmonRef}></div>

        <button
        style={{marginTop: '30px', padding:'10px 0', cursor: 'pointer'}}
        onClick={handleScrollTop}
        >
            Scroll to top
        </button>
    </div>
}