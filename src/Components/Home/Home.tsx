import React, {useState, useRef} from "react";
import {Link} from "react-router-dom"
import Modal from "../Modal/Modal";
import './Home.css'

const Home: React.FC = () => {
    const [active, setActive] = useState(false)
    const inputN = useRef(null)
    const inputM = useRef(null)
    return (
       <>
        <div className="container">
            <div className="homeContent">
                <div className="actionContent">
                    <div style={{fontSize: '24px', color: "white"}}>Matchstick Game</div>
                    <Link to='/game?currentPlayer=player'><input type="button" value="Play" /></Link>
                    <Link to='/game?currentPlayer=ai'><input type="button" value="Change mode" /></Link>
                    <input type="button" value="Custom mode" onClick={() => setActive(true)}/>
                    {
                        active ? <Modal active={active} setActive={setActive}>
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
                        </Modal> : null
                    }
                </div>
            </div>
        </div>
       </>
    )
}

export default Home