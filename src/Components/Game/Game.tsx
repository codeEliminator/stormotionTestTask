import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Matches from "../Matches/Matches";
import matchStick from '../../assets/match.png';
import aiMatchStick from '../../assets/ai-match.png';
import './Game.css';

const Game: React.FC = () => {
    const { id } = useParams();
    const [totalMatches, setTotalMatches] = useState(21);
    const [playerMatches, setPlayerMatches] = useState(0);
    const [aiMatches, setAiMatches] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState("player");

    useEffect(() => {
        if (currentPlayer === "ai") {
            setTimeout(() => {
                handleAIMove();
            }, 1000);
        }
    }, [currentPlayer]);

    const handleMatchSelection = (numMatches: number) => {
        if (currentPlayer === "player") {
            const updatedPlayerMatches = playerMatches + numMatches;
            setPlayerMatches(updatedPlayerMatches);
            setTotalMatches(totalMatches - numMatches);
            setCurrentPlayer("ai");
        }
    };

    const handleAIMove = () => {
        const aiChoice = Math.floor(Math.random() * 3) + 1;
        const updatedAiMatches = aiMatches + aiChoice;
        setAiMatches(updatedAiMatches);
        setTotalMatches(totalMatches - aiChoice);
        setCurrentPlayer("player");
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
                            <Matches
                                playerMatches={playerMatches}
                                handleMatchSelection={handleMatchSelection}
                            />
                        </div>
                        <div className="artificialPlayer">
                            <Matches aiMatches={aiMatches} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game;
