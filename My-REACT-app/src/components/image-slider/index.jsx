import { useState, useEffect } from "react";
import './image-slider.css';
import left from '/leftArr.svg';
import right from '/rightArr.svg';

export default function ImageSlider({url, page = '1', limit = '5'}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        if(url !== ''){
            fetchImages(url);
        }

    },[url]);

    async function fetchImages(url){

        try{

            setLoading(l => l = true);

            const response =  await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(i => i = data);
                setLoading(l => l = false);
            };

        }catch(error){
            setErrorMsg(error.message);
            setLoading(l => l = false);
        };

    };

    if(loading){
        return <div><p>Loading Data..Please wait ⌛</p></div>
    }

    if(errorMsg !== null){
        return <div><p>An Error Occurred ! ❌ {errorMsg}</p></div>
    }

    function handleNext(){

        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 ); //<--si la slide es la ultima (images.length - 1) entonces te lleva a la primera (0), sino se aumenta la posición

    };

    function handlePrev(){
        
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1 );//<--si la slide es la primera (0) entonces te lleva a la última (images.length - 1), sino se disminuye la posición

    };

    return(
        <div className="slider-container">
            {/*flecha izquierda*/}
            <img src={left} alt="arrow pointing left" width={40} height={40} className="arrow arrow-left" onClick={handlePrev} />

            {/*imagenes*/}
            {
                images && images.length ?
                images.map( (imageItem, index) => (
                    <img 
                    key={imageItem.id}
                    src={imageItem.download_url}
                    alt={imageItem.download_url}
                    className={currentSlide === index ? 'current-image'
                    : 'current-image hide-current-image'}
                    />
                ))
                : null
            }

            {/*flecha derecha*/}
            <img src={right} alt="arrow pointing right" width={40} height={40} className="arrow arrow-right" onClick={handleNext} />

            {/*Botones paginación*/}
            <span className="circle-indicator">
                {
                    images && images.length ? 
                    images.map((_,index)=>(
                        <button key={index}
                        className={
                            currentSlide === index
                            ? "current-indicator"
                            : "current-indicator inactive-indicator"
                        }
                        onClick={()=>setCurrentSlide(s => s = index)}
                        ></button>
                    ))
                    : null
                }
            </span>
        </div>
    );
};