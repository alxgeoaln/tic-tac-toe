export type Cell = {
    colId: string;
    item: string | null
};
export type Board = {
    rowId: string;
    row: Cell[]
}[];

export type Sign = 'x' | 'o';

export type VictoryPath = number[][] | undefined;