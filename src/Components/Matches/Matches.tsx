import React from "react";
import matchStick from '../../assets/match.png';
import aiMatchStick from '../../assets/match.png';
import './Matches.css';

interface MatchesProps {
    playerMatches?: number;
    aiMatches?: number;
    handleMatchSelection?: (numMatches: number) => void;
}

const Matches: React.FC<MatchesProps> = ({ playerMatches, aiMatches, handleMatchSelection }) => {
    const handleClick = (numMatches: number) => {
        if (handleMatchSelection) {
            handleMatchSelection(numMatches);
        }
    };

    return (
        <div className="matches">
            <div className="amountMatches">
                <div className="oneMatch" onClick={() => handleClick(1)}>
                    <img className="matchStick" src={matchStick} alt="matchstick" />
                </div>
                <div className="twoMatch" onClick={() => handleClick(2)}>
                    <img className="matchStick" src={matchStick} alt="matchstick" />
                    <img className="matchStick" src={matchStick} alt="matchstick" />
                </div>
                <div className="threeMatch" onClick={() => handleClick(3)}>
                    {aiMatches === 1 ? (
                        <img className="matchStick" src={aiMatchStick} alt="matchstick" />
                    ) : (
                        <>
                            <img className="matchStick" src={aiMatchStick} alt="matchstick" />
                            <img className="matchStick" src={aiMatchStick} alt="matchstick" />
                        </>
                    )}
                </div>
            </div>
            <div className="totalMatches">Total matches: {playerMatches || aiMatches}</div>
        </div>
    );
}

export default Matches;
