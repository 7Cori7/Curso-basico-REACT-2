import { useRef } from "react";


export default function ScrollToSection(){

    const sectionRef = useRef(null);

    const data = [
        {
            label: 'First Section',
            style: {
                with: '100%',
                height: '600px',
                backgroundColor: 'red'
            }
        },
        {
            label: 'Second Section',
            style: {
                with: '100%',
                height: '600px',
                backgroundColor: 'cyan'
            }
        },
        {
            label: 'Third Section',
            style: {
                with: '100%',
                height: '600px',
                backgroundColor: 'yellow'
            }
        },
        {
            label: 'Fourth Section',
            style: {
                with: '100%',
                height: '600px',
                backgroundColor: 'Green'
            }
        },
        {
            label: 'Fifth Section',
            style: {
                with: '100%',
                height: '600px',
                backgroundColor: 'orange'
            }
        },

    ];

    function handleScroll(){

        sectionRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return <div style={{textAlign:'center', display:'flex', flexDirection:'column', fontFamily:'sans-serif', marginTop:'10%'}}>

        <h1>Scroll to an specific section of the page</h1>

        <div style={{margin:'30px 0'}} onClick={handleScroll}>
            <button style={{cursor:'pointer'}}>Scroll to section</button>
        </div>

        {
            data.map((item, index) => (
                
                <div
                key={index}
                style={item.style}
                ref={index === 3 ? sectionRef : null}
                >
                    <h2>{item.label}</h2>
                </div>
            ))
        }
    </div>
}