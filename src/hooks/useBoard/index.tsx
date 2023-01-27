import { Socket } from "socket.io-client";

import { Board, Sign, VictoryPath } from "./useBoard.type";
import { emitPlaceSign, onBoard, onSign, onTurn, onVictoryPath } from "../../common/constants";
import { useEffect, useState } from "react";;


const useBoard = (socket: Socket) => {
    const [board, setBoard] = useState<Board>();
    const [sign, setSign] = useState<Sign>();
    const [playerTurn, setPlayerTurn] = useState<Sign>();
    const [victoryPath, setVictoryPath] = useState<VictoryPath>();

    useEffect(() => {
        socket.on(onBoard, (board) => {
            setBoard(board);
        })

        socket.on(onSign, (sign: Sign) => {
            setSign(sign)
        })

        socket.on(onTurn, (turn: Sign) => {
            setPlayerTurn(turn)
        })

        socket.on(onVictoryPath, (victoryPath: number[][]) => {
            setVictoryPath(victoryPath)
        })

    }, [socket]);

    const handleOnPlaceSign = (rowIndex: number, colIndex: number) => () => {
        if (playerTurn !== sign) return;

        socket.emit(emitPlaceSign, [rowIndex, colIndex]);
    }

    return {
        board,
        sign,
        handleOnPlaceSign,
        playerTurn,
        victoryPath
    };
}

export default useBoard;