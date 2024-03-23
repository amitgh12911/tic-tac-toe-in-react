import React, { useEffect, useState } from 'react'
import { Data } from './Data'

export const Game = () => {
    let line = document.querySelector(".line");
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("");
    const [finalWinner, setFinalWinner] = useState("");
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const [rounds, setRounds] = useState(1);
    const stateArray = useState(10);
    const totalRounds = stateArray[0];
    const [isPlaying, setIsPlaying] = useState(false);
    const [totalFill, setTotalFill] = useState(0);
    const mainLogic = (e) => {
        if (e.target.innerText.trim() == "") {
            if (winner == "" && rounds <= totalRounds) {
                if (turn !== "") {
                    if (turn === "X") {
                        e.target.innerText = "X";
                        setTurn("O")
                    } else {
                        e.target.innerText = "O";
                        setTurn("X")
                    }
                }
                setTotalFill(totalFill + 1);
                // console.log(totalFill);
            }
        }
        if(totalFill == 8 && winner == "") {
            setWinner("Tie");
        }
        if(winner == "" && rounds != 10) {
            setIsPlaying(true);
        }
        if(rounds == 10) {
            setIsPlaying(false);
        }
        // console.log('clicked');
        winning();
    }
    useEffect(() => {
        if(rounds == 10) {
            if(xScore > oScore) {
                setFinalWinner("X");
            } else if(xScore < oScore) {
                setFinalWinner("0");
            } else if(xScore == oScore) {
                setFinalWinner("Draw");
            }
        }
    },[xScore, oScore]);

    const winningResult = () => {
        // console.log("Winner");
        if (turn !== "") {
            setWinner(turn);
        }
        if (turn === "X") {
            setXScore(xScore + 1);
        } else if (turn === "O") {
            setOScore(oScore + 1);
        }
        setTurn("");
    }

    const winning = () => {
        let allItems = document.querySelectorAll(".items");
        Array.from(allItems).forEach((e, i, a) => {
            // console.log(a[i])
            if (a[i].innerText.trim() !== "") {
                if ((i == 0 || i == 3 || i == 6) && (a[i].innerText.trim() === a[i + 1].innerText.trim() && a[i + 1].innerText.trim() === a[i + 2].innerText.trim())) {
                    // document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                    line.style.width = "280px";
                    line.style.left = "0";
                    line.style.right = "0";
                    if(i == 0) {
                        line.style.top = "49px";
                    }
                    if(i == 3) {
                        line.style.top = "149px";
                    }
                    if(i == 6) {
                        line.style.top = "249px";
                    }
                    winningResult();
                } else if ((i == 0 || i == 1 || i == 2) && (a[i].innerText.trim() === a[i + 3].innerText.trim() && a[i + 3].innerText.trim() === a[i + 6].innerText.trim())) {
                    // document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                    line.style.width = "280px";
                    line.style.top = "0";
                    line.style.bottom = "0";
                    line.style.rotate = "90deg";
                    if(i == 0) {
                        line.style.right = "110px";
                    }
                    if(i == 1) {
                        line.style.right = "10px";
                    }
                    if(i == 2) {
                        line.style.left = "110px";
                    }
                    winningResult();
                } else if ((i == 0) && (a[i].innerText.trim() === a[i + 4].innerText.trim() && a[i + 4].innerText.trim() === a[i + 8].innerText.trim())) {
                    // document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                    line.style.width = "280px";
                    line.style.rotate = "45deg";
                    line.style.top = "0";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.right = "0";
                    winningResult();
                } else if ((i == 2) && (a[i].innerText.trim() === a[i + 2].innerText.trim() && a[i + 2].innerText.trim() === a[i + 4].innerText.trim())) {
                    // document.body.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                    line.style.width = "280px";
                    line.style.rotate = "135deg";
                    line.style.top = "0";
                    line.style.bottom = "0";
                    line.style.left = "0";
                    line.style.right = "0";
                    winningResult();
                }
            }
        });
    }
    return (
        <>
            <h1>Tic-Tac-Toe it is a Multiplayer Game</h1>
            <div className="container">
                <div className="left game-box">
                    <div className="line"></div>
                    <div className="game-grid">
                        <div className="items" id="item-1" onClick={mainLogic}></div>
                        <div className="items" id="item-2" onClick={mainLogic}></div>
                        <div className="items" id="item-3" onClick={mainLogic}></div>
                        <div className="items" id="item-4" onClick={mainLogic}></div>
                        <div className="items" id="item-5" onClick={mainLogic}></div>
                        <div className="items" id="item-6" onClick={mainLogic}></div>
                        <div className="items" id="item-7" onClick={mainLogic}></div>
                        <div className="items" id="item-8" onClick={mainLogic}></div>
                        <div className="items" id="item-9" onClick={mainLogic}></div>
                    </div>
                </div>
                <div className="right game-score">
                    <Data turn={turn} setTurn={setTurn} winner={winner} xScore={xScore} setXScore={setXScore} oScore={oScore} setOScore={setOScore} rounds={rounds} setRounds={setRounds} totalRounds={totalRounds} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setWinner={setWinner} setTotalFill={setTotalFill} finalWinner={finalWinner} setFinalWinner={setFinalWinner} line={line} />
                </div>
            </div>
        </>
    )
}
