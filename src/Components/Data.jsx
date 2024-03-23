import React from 'react'

export const Data = ({ turn, setTurn, winner, xScore, setXScore, oScore, setOScore, rounds, setRounds, totalRounds, isPlaying, setIsPlaying, setWinner, setTotalFill, finalWinner, setFinalWinner, line }) => {
  let allItems = document.querySelectorAll(".items");
  const nextRound = () => {
    if (isPlaying) {
      line.removeAttribute("style");
      if (rounds < totalRounds) {
        setRounds(rounds + 1);
        setWinner("");
        setTurn("X");
        Array.from(allItems).forEach(e => e.innerHTML = "");
      }
      setIsPlaying(false);
      setTotalFill(0);
    }
  }
  const resetGame = () => {
    line.removeAttribute("style");
    Array.from(allItems).forEach(e => e.innerHTML = "");
    setTurn("X");
    setWinner("");
    setRounds(1);
    setXScore(0);
    setOScore(0);
    setTotalFill(0);
    setFinalWinner("");
  }
  return (
    <>
      <div className="score-box">
        <div className="turn">Turn: {turn}</div>
        <div className="score">Score-X: {xScore}</div>
        <div className="h-score">Score-O: {oScore}</div>
        <div className="rounds">Rounds: {rounds}</div>
        <div className="total-rounds">Total Rounds: 10</div>
        <div className={'winner ' + (winner === "" ? "d-none" : "")}>{winner === "" ? "" : `Winner: ${winner}`}</div>
        <div className={'final-winner ' + (((finalWinner === "") && (finalWinner !== "Draw")) ? "d-none" : "") + ((finalWinner === "Draw") ? "text-red" : "")}>{finalWinner === "" ? "" : `Final Winner: ${finalWinner}`}</div>
        <div className="buttons">
          <button className={`btn-next-round btn-primary ${isPlaying ? "" : "disabled"}`} onClick={nextRound}>Next Round</button>
          <button className='btn-reset' onClick={resetGame}>Reset</button>
        </div>
      </div>
    </>
  )
}
