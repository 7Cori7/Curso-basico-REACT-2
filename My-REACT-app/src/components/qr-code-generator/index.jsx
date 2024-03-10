import './qr-code.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

export default function QrCodeGenerator(){

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenQrCode(){

        setQrCode(q=>q=input);
        setInput(i=>i='');
    };

    return(

        <div className='qr-code-container'>

            <h1>QR CODE GENERATOR</h1>
            <div>
                <input type="text" name="qr-code" placeholder='Enter your value here' value={input} onChange={(e)=>setInput(i=>i=e.target.value)} />
                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenQrCode}>Generate</button>
            </div>
            <div>
                {
                    qrCode && qrCode.trim() !== '' ?
                    <QRCode
                        id='qr-code-value'
                        value={qrCode}
                        size={400}
                    />
                    :
                    <p>No value has been entered yet</p>
                }
            </div>
        </div>
    );
};