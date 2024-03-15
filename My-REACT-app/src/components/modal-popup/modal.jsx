import './modal.css';

export default function Modal({id, header, body, footer, onClose}){

    return<div id = { id || 'Modal' } className="modal">

        <div className="modal_content">

            <div className="modal-header">
                <span className="close-modal-icon" onClick={onClose}>&times;</span>
                <h2>{ header ? header : 'Header' }</h2>
            </div>
            <div className="modal-body">
                {
                    body ? body : <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                }
            </div>
            <div className="modal-footer">
                <p>{footer ? footer : 'Footer'}</p>
            </div>

        </div>
    </div>;
}