import React, {useState} from "react";
import {Link} from "react-router-dom"
import Modal from "../Modal/Modal";
import './Home.css'

const Home: React.FC = () => {
    const [active, setActive] = useState(false)
    return (
       <>
        <div className="container">
            <div className="homeContent">
                <div className="actionContent">
                    <div style={{fontSize: '24px', color: "white"}}>Matchstick Game</div>
                    <Link to='/game?id=1'><input type="button" value="Play" /></Link>
                    <Link to='/game?id=2'><input type="button" value="Change mode" /></Link>
                    <input type="button" value="Custom mode" onClick={() => setActive(true)}/>
                    {
                        active ? <Modal active={active} setActive={setActive}></Modal> : null
                    }
                </div>
            </div>
        </div>
       </>
    )
}

export default Home