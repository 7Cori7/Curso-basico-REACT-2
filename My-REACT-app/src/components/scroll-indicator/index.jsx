import './scroll.css';
import { useEffect, useState } from 'react';

export default function ScrollIndicator({url}){

    const [data, setData] = useState([]);
    const [loadign, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl){

        try{

            setLoading(l=>l=true);
            const res = await fetch(getUrl);
            const data = await res.json();

            if(data && data.products && data.products.length){

                setData(d=>d= data.products);
                setLoading(false);
            }

        }catch(error){

            console.log(error)
            setLoading(false);
            setErrMsg(e=>e= error.message);
        }
    }

    function handleScrollPercentage(){

        ////console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)

        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage(s=>s= ( howMuchScroll/height )*100 );
    }

    useEffect(()=>{

        fetchData(url);

    }, [url]);

    useEffect(()=>{

        window.addEventListener('scroll', handleScrollPercentage);

        return ()=>{
            window.removeEventListener('scroll', ()=>{});
        }

    }, []);

    console.log(scrollPercentage)

    return(<div className='scroll-component-container'>

        <div className='top-container'>

            <div className='scroll-progress-tracking-container'>

                <div className='current-progress-bar' style={{width : ` ${scrollPercentage}% `}}></div>
            </div>

        </div>

        <h1>Custom Scroll indicator</h1>

        { loadign && <div><p style={{textAlign:'center'}}>Loading data ⌛... Please wait</p></div> }

        { errMsg && <div><p style={{textAlign:'center', color:'red'}}>Error ! {errMsg}</p></div> }

       <div className='data-container'>
            {
                data && data.length > 0
                ? data.map(item => ( <p key={item.id}>{item.title}</p> ) )
                : null
            }
       </div>
    </div>);
}