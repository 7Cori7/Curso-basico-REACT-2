import { useState } from "react"
import './colorGrad.css';


export default function ColorGrad(){

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    // function handleColor(color, index){

    //     if(color === 'red'){

    //         if(index === 1 || index === 0){

    //             setRed(r => r = 0);
    //         }else{
                
    //             setRed(r => r = Math.ceil(index * 5.1));
    //         }
    //     }

    //     if(color === 'green'){

    //         if(index === 1 || index === 0){

    //             setGreen(g => g = 0);
    //         }else{

    //             setGreen(g => g = Math.ceil(index * 5.1));
    //         }
    //     }

    //     if(color === 'blue'){

    //         if(index === 1 || index === 0){

    //             setBlue(b => b = 0);
    //         }else{

    //             setBlue(b => b = Math.ceil(index * 5.1));
    //         }
    //     }
    // }


    return <div className="color-grad-container">
        <h1>Color Grader (RGB)</h1>
        <div className="color-square" style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`}}></div>
        <div>
            <div className="color-grad-content">
                <h3 style={{color:'red'}}>Red</h3>
                <div className="controls">
                    <p className="range-value">{red}</p>
                    <div className="range">
                        {/* {
                            [...Array(50)].map((_,index)=>{

                                index += 1;
                                return <p key={index} onClick={()=>handleColor('red',index)}>{Math.ceil(index * 5.1) === red ? '#' : '-'}</p>
                            })
                        } */}
                        <input type="range" name="red" min="0" max="255" step="1" value={red} onChange={(e)=>setRed(e.target.value)} />
                    </div>
                    <p>255</p>
                </div>
            </div>
            <div className="color-grad-content">
                <h3 style={{color:'green'}}>Green</h3>
                <div className="controls">
                    <p className="range-value">{green}</p>
                    <div className="range">
                        {/* {
                            [...Array(50)].map((_,index)=>{

                                index += 1;
                                return <p key={index} onClick={()=>handleColor('green',index)}>{Math.ceil(index * 5.1) === green ? '#' : '-'}</p>
                            })
                        } */}
                        <input type="range" name="green" min="0" max="255" step="1" value={green} onChange={(e)=>setGreen(e.target.value)} />
                    </div>
                    <p>255</p>
                </div>
                
            </div>
            <div className="color-grad-content">
                <h3 style={{color:'blue'}}>Blue</h3>
                <div className="controls">
                    <p className="range-value">{blue}</p>
                    <div className="range">
                        {/* {
                            [...Array(50)].map((_,index)=>{

                                index += 1;
                                return <p key={index} onClick={()=>handleColor('blue',index)}>{Math.ceil(index * 5.1) === blue ? '#' : '-'}</p>
                            })
                        } */}
                        <input type="range" name="blue" min="0" max="255" step="1" value={blue} onChange={(e)=>setBlue(e.target.value)} />
                    </div>
                    <p>255</p>
                </div>
            </div>
        </div>
    </div>
}