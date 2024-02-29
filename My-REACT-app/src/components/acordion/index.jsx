// 1. Acordión de una sóla selección
// 2. Acordión de múltiples selecciones
import { useState } from "react";
import data from './data.js';
import './styles.css';

export default function Accordion(){

    const [selected, setSelected] = useState(null);
    const [multiSelectBtn, setMultiSelectBtn] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const [color, setColor] = useState('rgb(194, 194, 194)');

    function handleSingleSelection(id){
        
        setSelected( (s) => {

            if(s === id) return null; //<--si el elemento ya está 'abierto' entonces se 'cierra' retornando un null
            return s = id; //<--si no, entonces se 'abre' retornando el id

        });

    };

    function enableMultiSelect(){

        if(!multiSelectBtn){
            setColor(c => c = 'rgb(123, 159, 189)');
            setMultiSelectBtn(s => s = true);
        }else{
            setColor(c => c = 'rgb(194, 194, 194)');
            setMultiSelectBtn(s => s = false);
        }
   
    };

    function handleMultipleSelections(id){

        let copyMultiple = [...multiple]; //<--se hace una copia del arreglo

        const findIndexOfCurrentId = copyMultiple.indexOf(id); //<--ubica el indice de los items en el arreglo, si no hay nada retorna un -1

        if(findIndexOfCurrentId === -1){
            copyMultiple.push(id); //<--como retorna -1 ese item, quiere decir que no está, entonces se agrega al arreglo
        }else{
            copyMultiple.splice(findIndexOfCurrentId, 1); //<--si retorna otra posición que no sea -1, quiere decir que ya está en el arreglo, por lo tanto se quita con splice(indice, 1 elemento)
        }
         
        setMultiple(m => m = copyMultiple); //<--la variable se actualiza con el contenido del nuevo arreglo

    };

    return(

        <div className="wrapper">

            <button style={{backgroundColor: color}} onClick={enableMultiSelect}>Enable/Disable Multi Selection</button>

            <div className="acordion">
                {
                    data && data.length > 0 ? (

                        data.map( i => (

                            <div key={i.id} className="item">

                                <div onClick={multiSelectBtn ? () => handleMultipleSelections(i.id) : () => handleSingleSelection(i.id)} className="title">

                                    <h3>{i.question}</h3>
                                    <span>+</span>

                                </div>

                                {
                                    selected === i.id || multiple.indexOf(i.id) !== -1 ? //<--si hay id se 'abre' = imprime: || entra el id por el caso de las selecciones multiples
                                    <div className="content">
                                        <p>{i.answer}</p>
                                    </div>
                                    : null //<---si hay null se 'cierra' = no imprime nada
                                }

                            </div>

                        ))

                    ) : (<div>No data found !</div>)

                }
            </div>
        </div>

    );

};