import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {Link} from "react-router-dom";

const CharacterSelector = () => {

    const [savedCharacters, setSavedCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(0)

    const dispatch = useDispatch();
    const currentCharacter = useSelector(state => state.character)

    const saveCharacter = () => {
        localStorage.setItem(currentCharacter.name, (JSON.stringify(currentCharacter)));
        alert(`Персонаж с именем ${currentCharacter.name} был сохранен успешно!`);
        loadCharacters();
    }

    const loadCharacters = () => {
        const values = [];
        const keys = Object.keys(localStorage);
        for (let i = 0; i<keys.length; i++) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        console.log(values)
            setSavedCharacters(values);
    }

    const loadCharacter = () => {
        dispatch({type:"LOAD_CHARACTER", payload:savedCharacters[selectedCharacter]})
    }

    const handleClickLeft = () => {
        if (savedCharacters[selectedCharacter-1])
            setSelectedCharacter(selectedCharacter - 1)
    }

    const handleClickRight = () => {
        if (savedCharacters[selectedCharacter+1])
            setSelectedCharacter(selectedCharacter + 1)
    }

    useEffect(()=>{
        loadCharacters()
    },[])


    return (
        <div className="character__selector">
            <button onClick={()=> {console.log(JSON.stringify(currentCharacter))}}> Экспорт персонажа </button>
            <button onClick={()=> saveCharacter()}> Сохранить </button>
            <button onClick={()=> {
                localStorage.clear();
                loadCharacters();
            }}> Удалить все сохранения </button>

            <div>
                {
                    (savedCharacters.length > 0) &&
                    <div className="character__selector__preview">
                        <button onClick={() => handleClickLeft()}> Предыдущий </button>
                        {savedCharacters[selectedCharacter].name}
                        <button onClick={()=> handleClickRight() }> Следующий </button>
                        <button onClick={()=> loadCharacter() }> Загрузить </button>
                    </div>
                }
            </div>

        </div>
    );
};

export default CharacterSelector;