import { connect } from 'socket.io-client';

import useBoard from './hooks/useBoard';
import { Board } from './components/Board'

import { Loading } from './components/Loading';
import { localhost } from './common/constants';

import './App.css';

const socket = connect(localhost);

function App() {
  const { board, handleOnPlaceSign, playerTurn, sign, victoryPath } = useBoard(socket);

  const gameStarted = board?.length && playerTurn;

  return (
    <div className="App flex flex-col justify-center items-center bg-green">
      {
        !gameStarted ?
          (<div className='self-center'>
            <Loading />
          </div>
          ) : null
      }

      {gameStarted ?
        <>
          <h1 className='text-3xl font-bold text-dark'>Your sign is: {sign}</h1>
          <h1 className='text-xl font-black text-dark mb-3'>Player turn: {playerTurn}</h1>
          <div className='self-center'>
            <Board victoryPath={victoryPath} onPlaceSign={handleOnPlaceSign} board={board} />
          </div>
        </>
        : null}
    </div>
  );
}

export default App;