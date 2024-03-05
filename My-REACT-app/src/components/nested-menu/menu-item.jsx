import { useState } from "react";
import MenuList from "./menu-list";
import plus from '/plus-icon.svg';
import minus from '/minus-icon.svg';


export default function MenuItem({item}){

    const [displayChild, setDisplayChild] = useState({});

    function handleToggle(currentLabel){

        setDisplayChild({
            ...displayChild,
            [currentLabel] : !displayChild[currentLabel],
        });

    };


    return(
        <li className="menu-item">
            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>

                <p>{item.label}</p>
                {
                    item && item.children && item.children.length
                    ? <span onClick={()=>handleToggle(item.label)}>
                        {
                            displayChild[item.label] ? <img src={minus} width={20} height={20} /> : <img src={plus} width={20} height={20} />
                        }
                    </span>
                    : null
                }

            </div>
           {
            item && item.children && item.children.length > 0 && displayChild[item.label]
            ? <MenuList list={item.children} />
            : null
           }
        </li>
    );
};