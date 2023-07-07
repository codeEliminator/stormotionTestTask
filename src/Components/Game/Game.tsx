import React, { useEffect, useState } from "react";
import './Game.css';
import MatchStick from '../../assets/match.png';
import { redirect, useParams, useSearchParams } from "react-router-dom";
import minimax from "../../helpers/minimax";
import Modal from "../Modal/Modal";

const Game: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [n, setN] = useState<number>(12);
    const [m, setM] = useState<number>(3);
    const [playerMatches, setPlayerMatches] = useState<number>(0);
    const [aiMatches, setAiMatches] = useState<number>(0);
    const [currentPlayer, setCurrentPlayer] = useState<string | null>(searchParams.get('currentPlayer'));
    const [totalMatches, setTotalMatches] = useState<number>(2 * n + 1);
    const [isMoveDisabled, setIsMoveDisabled] = useState<boolean>(currentPlayer == 'player' ? false : true);
    const [aiNextMatchesToTake, setAiNextMatchesToTake] = useState<number>(0)
    const [winner, setWinner] = useState<string | null>(null)
    const [active, setActive] = useState<boolean>(false)

    const makeMove = (matchesToTake: number) => {
        if (matchesToTake <= totalMatches) {
            if (currentPlayer === 'player') {
                setPlayerMatches(playerMatches + matchesToTake);
                setIsMoveDisabled(() => !isMoveDisabled);
                setCurrentPlayer(() => 'ai')
            }
            else if(currentPlayer === 'ai'){
                setAiNextMatchesToTake(matchesToTake)
                setAiMatches(()=>aiMatches + matchesToTake)
                setIsMoveDisabled(()=>!isMoveDisabled)
                setCurrentPlayer('player')
            }
            setTotalMatches(totalMatches - matchesToTake);
        }
    };
    useEffect(()=>{
        if(currentPlayer == 'ai'){
            const makeAiMove = () => {
                let bestMove = -Infinity;
                let bestMoveValue = -Infinity;
                if(totalMatches > 10){
                    return 3
                }
                for (let i = 1; i <= m; i++) {
                    const newTotalMatches = totalMatches - i;
                    const moveValue = minimax(newTotalMatches, m, false, -Infinity, Infinity);
                    if (moveValue > bestMoveValue) {
                        bestMove = i;
                        bestMoveValue = moveValue;
                    }
                }
                return bestMove
            }
            
            makeMove(makeAiMove())
        }   
    }, [currentPlayer])
    useEffect(() => {
        if (totalMatches === 0) {
            playerMatches % 2 == 0 ? setWinner('Player') : setWinner('Ai')
            setActive(true)
        }
    }, [totalMatches, currentPlayer]);

    const renderMatchGroup = (numMatches: number) => {
        return (
            <>
                {[...Array(numMatches)].map((_, index) => (
                    <div
                        className="match"
                        key={index + 1}
                       
                    >
                        <img className="matchStick" src={MatchStick} alt="MatchStick" />
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="matchesLeft">
                        Matches Left: {totalMatches}
                    </div>
                    <div className="gameWrapper">
                        <div className="player">
                            <div className="matches">
                                <div className="amountMatches">
                                    {[...Array(m)].map((_, index) => (
                                        <div
                                            className="matchGroup"
                                            onClick={() => !isMoveDisabled && makeMove(index + 1)}
                                            key={index + 1}
                                        >
                                            {renderMatchGroup(index + 1)}
                                        </div>
                                    ))}
                                </div>
                                <div className="totalMatches">Total matches: {playerMatches}</div>
                            </div>
                        </div>
                        <div className="artificialPlayer">
                            <div className="matches">
                                <div className="amountMatches">
                                    {
                                        !aiNextMatchesToTake ? null : (
                                            <div className="matchGroup">
                                                {renderMatchGroup(aiNextMatchesToTake)}
                                            </div>
                                        )
                                    }
                                </div>
                                <div style={{color:"black"}}className="totalMatches">Total matches: {aiMatches}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    active ? <Modal active={active} setActive={setActive}>
                        {
                            winner == 'Player' ? <div style={{color: 'green', fontSize: "20px"}}>Congratulations, you have won</div> 
                            :
                            <div style={{color: "red", fontSize: "20px"}}>Maybe next time, AI is better</div>
                        }
                    </Modal> : null
                }
            </div>
        </>
        
    );
}   

export default Game;
