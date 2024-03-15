import { useState } from "react";
import './tabs.css';

export default function Tabs({tabsContent, onChange}){

    const [currTabIndex, setCurrTabIndex] = useState(0);

    function handleOnClick(currIndex){

        setCurrTabIndex(t=>t= currIndex);

        onChange(currIndex);
    };

    return <>
        <div className="tabs-wrapper">

            <div className="tabs_heading">
                {
                    tabsContent.map((item, index )=> (

                        <div key={item.label} onClick={()=>handleOnClick(index)} className={`tab-item ${currTabIndex === index ? 'active' : ''}`}>

                            <span>{item.label}</span>
                        </div>
                    ))
                }
            </div>

            <div className="tabs_content">
                { tabsContent[currTabIndex] && tabsContent[currTabIndex].content }
            </div>
        </div>
    </>;
}