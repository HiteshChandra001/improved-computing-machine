import { useState } from "react";
import './TicTac.css';

const initArr = new Array(9).fill(null);

const TicTac = () => {
    const [arr, setArr] = useState(initArr);
    const [player, setPlayer] = useState('O');
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);


    const checkWinner = (board) => {
        const winBoards = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let e of winBoards) {
            const [a, b, c] = e;
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
                return board[a];
            }
        }
        return null;
    }

    const checkDraw = (board) => {
        // Check if all cells are filled and there's no winner
        return board.every(cell => cell !== null) && !checkWinner(board);
    };
    const handleClick = (ind) => {
        if (arr[ind] || winner || isDraw) return;
        const newArr = [...arr];
        newArr[ind] = player;
        setArr(newArr);
        const win = checkWinner(newArr);
        setWinner(win);

        if (!win && checkDraw(newArr)) {
            setIsDraw(true);
        } else {
            setPlayer(p => (p === 'X' ? 'O' : 'X'));
        }
    }

    const reset = () => {
        setArr(initArr);
        setWinner(null);
        setPlayer('O');
    }

    return (
        <div>
            <h1>
                {winner
                    ? `Winner is ${winner}`
                    : isDraw
                        ? "It's a draw!"
                        : `Your turn ${player}`}
            </h1>
            <div className="board">

                {arr.map((e, i) => (
                    <div key={i} className="cell" onClick={() => handleClick(i)}>
                        {e}
                    </div>
                ))}
                <button onClick={reset}>Reset</button>
            </div>

            <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#555' }}>
                Made with ❤️ by Hitesh Chandra
            </h1>
        </div>
    );
}

export default TicTac;