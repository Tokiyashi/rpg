import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cl from './Stats.module.css'

const Stat = ({name, title}) => {

    const dispatch = useDispatch();
    const statValue = useSelector(state => state.character.stats[name])
    return (
        <div className={cl.stat}>
            <button onClick={()=> {dispatch({type:"CHANGE_STAT", payload:{stat:name, value: 1 + +statValue}})}}> +1 </button>
            {title}:{statValue}
        </div>
    );
};

export default Stat;