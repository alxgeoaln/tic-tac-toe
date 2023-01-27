//env
export const localhost = process.env.NODE_ENV === 'test' ? '' : 'http://localhost:4000';

// players
export const x = 'x';
export const o = 'o';

// on
export const onSign = 'sign';
export const onTurn = 'turn';
export const onBoard = 'board';
export const onVictoryPath = 'victoryPath';

// emit
export const emitPlaceSign = 'placeSign';