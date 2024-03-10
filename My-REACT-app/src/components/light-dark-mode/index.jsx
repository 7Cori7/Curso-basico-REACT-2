import './theme.css';
import useLocalStorage from './useLocalStorage.jsx';

export default function LightDarkMode(){

    // En este ejemplo se va a crear un custom hook para realizar el ejercicio :)

    const [theme, setTheme] = useLocalStorage('tema', 'dark'); //<--El custom hook creado

    function handleToggleTheme(){

        setTheme(t => t === 'light' ? 'dark' : 'light');
    };

    return(

        <div className='ligth-dark-mode' data-theme={theme}>

            <div className='ligth-dark-container'>

                <h3>Light-Dark Mode</h3>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}