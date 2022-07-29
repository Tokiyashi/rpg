import React, {useState} from 'react';
import Stat from "./Stat";
import {useSelector} from "react-redux";
import cl from './Stats.module.css'

const Stats = () => {
    const currentCharacter = useSelector(state => state.character)
    const [damage, setDamage] = useState(0);

    const takeDamage = () => {
        if (3+ +currentCharacter.stats.strength-damage === 0)
            return
        setDamage(damage +1)
    }

    return (
        <div className={cl.stats}>
            <h3> Характеристики персонажа </h3>
            <div className={cl.stats__changeable}>
                <Stat title="Сила" name={"strength"}/>
                <Stat title="Ловкость" name={"agility"}/>
                <Stat title="Интеллект" name={"intelligence"}/>
                <Stat title="Харизма" name={"charisma"}/>
            </div>
            <div className={cl.stats__computed}>
                <div> Жизненная сила: {3 + +currentCharacter.stats.strength - damage} </div>
                <div> Увороты: {10 + +currentCharacter.stats.agility} </div>
                <div> Энергия: {+currentCharacter.stats.agility + +currentCharacter.stats.intelligence} </div>
            </div>
            <button onClick={()=> takeDamage()}> Получить урон </button>
        </div>
    );
};

export default Stats;