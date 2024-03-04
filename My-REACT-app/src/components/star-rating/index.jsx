import './styles.css';
import { useState } from 'react';
import startIcon from '/star.svg';
import startIcon2 from '/star-2.svg';

export default function StarRating({nOfStars = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index){
        ////console.log('click',index)
        setRating(r => r = index);
    };

    function handleMouseEnter(index){
        ////console.log(index)
        setHover(h => h = index);
    };

    function handleMouseLeave(){
        setHover(h => h = rating);
    };

    return(
        <div className='star-rating'>

            <h3>Star Rating</h3>
            
            { 
                [...Array(nOfStars)].map(( _, index )=>{

                    index += 1;

                    return <img 
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        src={
                            index <= (hover || rating)
                            ? startIcon2
                            : startIcon
                        }
                        alt='Star icon'
                        width={40}
                        height={40}
                        className='star'
                    />
                }) 
            }

        </div>
    );
};