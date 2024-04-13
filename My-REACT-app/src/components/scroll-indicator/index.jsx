import './scroll.css';
import { useEffect, useState } from 'react';

export default function ScrollIndicator(){

    const [scrollPercentage, setScrollPercentage] = useState(0);

    function handleScrollPercentage(){

        ////console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)

        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage(s=>s= ( howMuchScroll/height ) * 100 );
    }

    useEffect(()=>{

        window.addEventListener('scroll', handleScrollPercentage);

        return ()=>{
            window.removeEventListener('scroll', ()=>{});
        }

    }, []);

    return(<div className='scroll-component-container'>

        <div className='top-container'>

            <div className='scroll-progress-tracking-container'>

                <div className='current-progress-bar' style={{width : ` ${scrollPercentage}% `}}></div>
            </div>

        </div>
    </div>);
}