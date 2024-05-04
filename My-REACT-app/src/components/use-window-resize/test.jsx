import useWindowResize from "."


export default function TestUseWindowResize(){

    const windowSize = useWindowResize();
    const {width, height} = windowSize;

    const reStyle = {

        resize: {

            backgroundColor: width <= 768 ? 'red' : 'transparent',
            textAlign: width && "center"
        },  
    }

    return <div style={reStyle.resize}>

        <h1>Use Window Resize Custom Hook</h1>
        <p>
            width is {width}px
        </p>
        <p>
            height is {height}px
        </p>
    </div>
}