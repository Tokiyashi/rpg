import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cl from './CharacterName.module.css'

const CharacterName = () => {
    const currentCharacter = useSelector(state => state.character);
    const dispatch = useDispatch();

    return (
        <div className={cl.character__name}>
            <h2> Вашего персонажа зовут: </h2>
            <input
                value={currentCharacter.name}
                onChange={e => dispatch({type:"RENAME", payload:e.target.value})}
                placeholder="Укажите имя персонажа"
            />
        </div>
    );
};

export default CharacterName;