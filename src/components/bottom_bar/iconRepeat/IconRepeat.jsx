import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { actSetRepeatMode } from "../../../store/actions/coreActions"


export default function IconRepeat (props) {
    const dispatch = useDispatch()
    const repeatMode = useSelector(state => state.coreReducer.repeatMode)


    return (
        <div className="icon-button i-tiny">
            <i
                onClick={() => dispatch(actSetRepeatMode({repeatMode: !repeatMode}))}
                id={`${repeatMode ? 'icon-btn-active' : ''}`}
                className={`fa-solid fa-repeat`}
            >
            </i>
        </div>
    )
    
}