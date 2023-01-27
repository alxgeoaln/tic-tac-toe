import React from "react";

export interface BorderItemProps {
    rowIndex: number;
    colIndex: number;
    onPlaceSign: (rowIndex: number, colIndex: number) => () => void;
    children: React.ReactNode;
    winner: boolean;
}