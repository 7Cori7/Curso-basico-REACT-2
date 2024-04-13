import { useState } from "react"
import './colorGrad.css';


export default function ColorGrad(){

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function handleColor(color, index){

        if(color === 'red'){

            if(index === 1 || index === 0){

                setRed(r => r = 0);
            }else{
                
                setRed(r => r = Math.ceil(index * 5.1));
            }
        }

        if(color === 'green'){

            if(index === 1 || index === 0){

                setGreen(g => g = 0);
            }else{

                setGreen(g => g = Math.ceil(index * 5.1));
            }
        }

        if(color === 'blue'){

            if(index === 1 || index === 0){

                setBlue(b => b = 0);
            }else{

                setBlue(b => b = Math.ceil(index * 5.1));
            }
        }
    }

    //TODO: Mejorar el "range selector" para sea más bonito y use el evento de "drag"

    return <div className="color-grad-container">
        <h1>Color Grader (RGB)</h1>
        <div className="color-square" style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></div>
        <div>
            <div className="color-grad-content">
                <h3 style={{color:'red'}}>Red</h3>
                <div className="controls">
                    <p>0</p>
                    <div className="range">
                        {
                            [...Array(50)].map((_,index)=>{

                                index += 1;
                                return <p key={index} onClick={()=>handleColor('red',index)}>{Math.ceil(index * 5.1) === red ? '#' : '-'}</p>
                            })
                        }
                    </div>
                    <p>255</p>
                </div>
            </div>
            <div className="color-grad-content">
                <h3 style={{color:'green'}}>Green</h3>
                <div className="controls">
                    <p>0</p>
                    <div className="range">
                        {
                            [...Array(50)].map((_,index)=>{

                                index += 1;
                                return <p key={index} onClick={()=>handleColor('green',index)}>{Math.ceil(index * 5.1) === green ? '#' : '-'}</p>
                            })
                        }
                    </div>
                    <p>255</p>
                </div>
                
            </div>
            <div className="color-grad-content">
                <h3 style={{color:'blue'}}>Blue</h3>
                <div className="controls">
                    <p>0</p>
                    <div className="range">
                        {
                            [...Array(50)].map((_,index)=>{

                                index += 1;
                                return <p key={index} onClick={()=>handleColor('blue',index)}>{Math.ceil(index * 5.1) === blue ? '#' : '-'}</p>
                            })
                        }
                    </div>
                    <p>255</p>
                </div>
            </div>
        </div>
    </div>
}