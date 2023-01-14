import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { actSetShuffleMode } from "../../../store/actions/coreActions"


export default function IconShuffle (props) {
    const dispatch = useDispatch()
    const shuffleMode = useSelector(state => state.coreReducer.shuffleMode)

    return (
        <div className=" icon-button i-tiny">
            <i
                onClick={() => dispatch(actSetShuffleMode({shuffleMode: !shuffleMode}))}
                id={`${shuffleMode ? 'icon-btn-active' : ''}`}
                className={
                    `fa-solid fa-shuffle ${shuffleMode ? ' shuffle-mode-style-active': ''}`
                }
            >
            </i>
        </div>
    )
    
}