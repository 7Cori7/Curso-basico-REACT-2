import './styles.css';
import { useState, useEffect } from 'react';

export default function ColorGenerator(){

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    useEffect(()=>{

        if(typeOfColor === 'hex'){

            handleRandomHexColor();

        }else{

            handleRandomRgbColor();

        };

    },[typeOfColor]);

    function randomColorUtility(length){
        //Esta función genera un número random según el largo indicado
        return Math.floor(Math.random() * length);
    };

    function handleRandomHexColor(){

        // los colores HEX contienen # y 6 digitos del 0 al 9, y también pueden incluir letras de la A a la F

        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];//<--este arreglo contiene todos los posibles carácteres del codigo HEX
        let hexColor = '#';

        for(let i = 0; i < 6; i++){

            hexColor += hex[ randomColorUtility(hex.length) ]; //<--genera una posición random del arreglo hex y eso da los carácteres necesarios para generar el color

        };

        setColor(c => c = hexColor);

    };

    function handleRandomRgbColor(){

        //Los colores RGB consisten en 3 grupos de números del 0 al 256.

        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(c => c = ` rgb(${r},${g},${b}) `);
        
    };

    return(
        <div style={{background: color}} className='container'>

            <button onClick={()=>setTypeOfColor(t=>t='hex')}>Create HEX Color</button>
            <button onClick={()=>setTypeOfColor(t=>t='rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate Random Color</button>

            <div className='text'>
                <h4>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h4>
                <h3>{color}</h3>
            </div>
        </div>
    );

};