import React, {useState} from 'react';
import './CreateCharacter.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CreateCharacter = () => {

    const [character, setCharacter] = useState({
        name: "Безымянный",
        stats: {
            strength: 0,
            agility: 0,
            intelligence: 0,
            charisma: 0,
        },
    });

    const [importKey, setImportKey] = useState('')

    const dispatch = useDispatch();

    return (
        <div>
            <h2> Создайте вашего персонажа </h2>
            <div className="create-form">
                <h4> Имя </h4>
                <input
                    placeholder="Your character's name"
                    onChange={e => setCharacter({...character, name: e.target.value})}
                    value={character.name}
                />
                <h4> Сила </h4>
                <input
                    value={character.stats.strength}
                    placeholder="Strength"
                    onChange={e => setCharacter({...character, stats: {...character.stats, strength: ~~e.target.value}})}
                />
                <h4> Ловкость </h4>

                <input
                    value={character.stats.agility}
                    placeholder="Strength"
                    onChange={e => setCharacter({...character, stats: {...character.stats, agility: ~~e.target.value}})}
                />
                <h4> Интеллект </h4>

                <input
                    value={character.stats.intelligence}
                    placeholder="Strength"
                    onChange={e => setCharacter({...character, stats: {...character.stats, intelligence: ~~e.target.value}})}
                />
                <h4> Харизма </h4>
                <input
                    value={character.stats.charisma}
                    placeholder="Strength"
                    onChange={e => setCharacter({...character, stats: {...character.stats, charisma: ~~e.target.value}})}
                />
                <Link
                    to="/character"
                    onClick={()=>{
                    dispatch({type:"CHANGE_STATS", payload:character.stats});
                    dispatch({type:"RENAME", payload:character.name});
                }}> Готово! </Link>

            </div>
        </div>
    );
};
export default CreateCharacter;