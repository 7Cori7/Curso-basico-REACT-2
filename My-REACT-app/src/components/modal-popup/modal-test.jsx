import { useState } from 'react';
import './modal.css';
import Modal from './modal.jsx';

export default function ModalTest(){

    const[showModal, setShowModal] = useState(false);

    function handleToggleModal(){

        setShowModal(!showModal); //<--al ponerlo así no hace falta escribir los condicionales ?: 
    };

    function onClose(){
        setShowModal(m=>m= false);
    }

    return(<div className='modal-component-body'>

        <h1>Custom Modal Pop-Up</h1>

        <div>
            <button onClick={handleToggleModal}>{!showModal ? 'Open Modal' : 'Close Modal'}</button>
            {
                showModal && <Modal
                id={'custom-id'}
                body={<div><p>Customize body</p></div>}
                header={'Customized Header'}
                footer={'Customized Footer'}
                onClose={onClose}
                />
            }
        </div>

    </div>);
}