import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Skill = ({name, title, baseStat}) => {

    const dispatch = useDispatch();
    const currentCharacter = useSelector(state => state.character)
    const currentSkillValue = currentCharacter.skills[name];

    const convertSkillValueToTitle = (skillValue) => {
        const titles = ["Нетренированный", "Новичок", "Ученик", "Адепт", "Эксперт", "Мастер"];
        return titles[skillValue];
    }

    const trainSkill = () => {
        if (currentSkillValue === 5){
            alert("Достигнут максимальный уровень");
            return
        }
        if (currentSkillValue === currentCharacter.stats[baseStat]) {
            alert("Тренировка не удалась! Прокачайте ваши характеристики");
            return
        }
        alert("Тренировка прошла успешно!");
        dispatch({type: "CHANGE_SKILL", payload: {skill:name, value: currentSkillValue+1}})
    }

    return (
        <div className="character__skill" >
            {title}:{convertSkillValueToTitle(currentSkillValue)}
            <button
                onClick={()=> trainSkill()}
            > Тренировать </button>
        </div>
    );
};

export default Skill;