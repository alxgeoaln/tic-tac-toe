import classNames from "classnames"

import { BorderItemProps } from "./BoardItem.type"

export const BoardItem = ({
    rowIndex, colIndex, onPlaceSign, children, winner
}: BorderItemProps) => {
    return (
        <div onClick={onPlaceSign(rowIndex, colIndex)} className={classNames("flex justify-center items-center w-20 h-20 m-0.5 cursor-pointer active:bg-dark", {
            "bg-yellow": winner,
            "bg-blue": !winner
        })}>
            <h1 className="text-5xl text-green font-black">
                {children}
            </h1>
        </div>
    )
}