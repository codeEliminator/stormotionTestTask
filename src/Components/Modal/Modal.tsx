import React, { ReactNode, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Modal.css";

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
    const inputN = useRef(null)
    const inputM = useRef(null)
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modalContent active" : "modalContent"} onClick={(evt) => evt.stopPropagation()}>
            <div className='modalContainer'>
                <div className='customInputs'>
                    <div style={{fontSize: '20px', }}>
                        N:
                    </div>
                    <input type="number" ref={inputN}/>
                    <div style={{fontSize: '20px',}}>
                        M:
                    </div>
                    <input type="number" ref={inputM} />
                </div>
                <Link to={'/game?matches='}></Link><input className='button' type="button" value={"Play"} />
            </div>
        </div>
        </div>
    );
};

export default Modal;
