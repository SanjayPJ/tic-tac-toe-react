import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={this.props.squareOnClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            x_is_next: true
        };
    }

    calculateWinner = squares => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    handleClick(i) {
        const { squares, x_is_next } = this.state;
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = x_is_next ? "X" : "O";
        this.setState({ squares: squares, x_is_next: !x_is_next });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                squareOnClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.x_is_next ? "X" : "O");
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
