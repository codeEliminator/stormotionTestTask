import React, { ReactNode, } from 'react';
import "./Modal.css";

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className={active ? "modalContent active" : "modalContent"} onClick={(evt) => evt.stopPropagation()}>
            {
                children
            }
        </div>
        </div>
    );
};

export default Modal;
