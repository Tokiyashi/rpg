import React, {useState} from 'react';
import './CreateCharacter.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CreateCharacter = () => {
    const [importKey, setImportKey] = useState()
    const [character, setCharacter] = useState({
        name: "Безымянный",
        stats: {
            strength: 0,
            agility: 0,
            intelligence: 0,
            charisma: 0,
        },
    });

    const dispatch = useDispatch();

    const importCharacter = () => {
        const result = JSON.parse(importKey)
        if (result.name && result.stats && result.skills){
            setCharacter(result)
            dispatch({type:"CHANGE_SKILLS", payload:result.skills})
        }
        else
            alert("Неверно указанный код!")
    }

    return (
        <div className="create-page">
            <h2> Создайте вашего персонажа </h2>
            <div className="create-form">
                <h4> Имя </h4>
                <input
                    placeholder="Имя вашего персонажа"
                    onChange={e => setCharacter({...character, name: e.target.value})}
                    value={character.name}
                />
                <h4> Сила </h4>
                <input
                    value={character.stats.strength}
                    placeholder="Сила"
                    onChange={e => setCharacter({...character, stats: {...character.stats, strength: ~~e.target.value}})}
                />
                <h4> Ловкость </h4>
                <input
                    value={character.stats.agility}
                    placeholder="Ловкость"
                    onChange={e => setCharacter({...character, stats: {...character.stats, agility: ~~e.target.value}})}
                />
                <h4> Интеллект </h4>
                <input
                    value={character.stats.intelligence}
                    placeholder="Интеллект"
                    onChange={e => setCharacter({...character, stats: {...character.stats, intelligence: ~~e.target.value}})}
                />
                <h4> Харизма </h4>
                <input
                    value={character.stats.charisma}
                    placeholder="Харизма"
                    onChange={e => setCharacter({...character, stats: {...character.stats, charisma: ~~e.target.value}})}
                />
            </div>
            <h3> Или вы можете импортировать персонажа вставив код в поле ниже </h3>
            <div className="create-form__import">
                <textarea
                    onChange={e => setImportKey(e.target.value)}
                />
                <button onClick={()=> importCharacter()}> Импорт </button>
            </div>
            <Link
                to="/character"
                onClick={()=>{
                    dispatch({type:"CHANGE_STATS", payload:character.stats});
                    dispatch({type:"RENAME", payload:character.name});}}>
            Создать персонажа!
            </Link>
        </div>
    );
};
export default CreateCharacter;