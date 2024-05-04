import { useRef, useState } from "react";
import './outside-click.css';
import useClickOutside from ".";

export default function ClickOutsideTest(){

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useClickOutside(ref, () => setShowContent(false));

    return <div className="click-outside_container">

        {
            showContent
            ? (
            <div ref={ref} className="click-outside_modal">
                <h1>This is random content</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, impedit.</p>
            </div>
            ):
            (
                <button onClick={()=>setShowContent(true)}>Show Content</button>
            )
        }

    </div>
}